import NextAuth from 'next-auth/next';
export const dynamic = 'force-dynamic';
import { authOptions } from '@/constant/authOptions';

// export const authOptions: AuthOptions = {
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Username', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials, req) {
//         console.log('credendials here:', credentials);
//         // Add logic here to look up the user from the credentials supplied
//         try {
//           const res = await fetch(`http://127.0.0.1:1337/api/auth/local`, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               identifier: credentials?.email,
//               password: credentials?.password,
//             }),
//           });

//           const user = await res.json();
//           if (user) {
//             // Any object returned will be saved in `user` property of the JWT
//             return user;
//           }
//         } catch (error) {
//           console.error(error);
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       return { ...token, ...user };
//     },

//     async session({ session, token, user }) {
//       session.user = token as any;
//       return session;
//     },
//   },

//   session: {
//     // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
//     // If you use an `adapter` however, we default it to `"database"` instead.
//     // You can still force a JWT session by explicitly defining `"jwt"`.
//     strategy: 'jwt',
//   },

//   secret: process.env.NEXTAUTH_SECRET,
// };

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
