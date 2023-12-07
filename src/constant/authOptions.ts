import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { isProd } from './env';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      credentials: {
        email: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // console.log('credendials here:', credentials);
        // Add logic here to look up the user from the credentials supplied
        try {
          // const res = await fetch(`http://127.0.0.1:1337/api/auth/local`, {
          const res = await fetch(
            `${
              isProd
                ? `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`
                : 'http://127.0.0.1:1337/api/auth/local'
            }`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                identifier: credentials?.email,
                password: credentials?.password,
              }),
            }
          );

          const user = await res.json();

          // console.log('user?',user);
          if (user.jwt) {
            // Any object returned will be saved in `user` property of the JWT
            return user;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log('tem token', token)
      if (!user) {
        // console.log('nao tem user', user);
      }
      if (user) {
        // console.log('tem user?', user)
      }
      return { ...token, ...user };
    },

    async session({ session, token }) {
      // console.log('token',token);
      session.user = token as any;
      return session;
    },
  },

  session: {
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    strategy: 'jwt',
  },

  secret: process.env.NEXTAUTH_SECRET,
};
