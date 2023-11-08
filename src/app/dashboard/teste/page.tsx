import { getServerSession } from 'next-auth/next';

import { authOptions } from '@/constant/authOptions';

export default async function Protected(): Promise<any> {
  const session = await getServerSession(authOptions);
  return (
    <div className='flex h-screen items-center justify-center text-black'>
      <div>
        {session !== null ? (
          <h1 className='text-accent font-extrabold leading-loose'>
            Olá, {session?.user.user.username}!
          </h1>
        ) : (
          <a className='btn btn-primary' href='/api/auth/signin'>
            Sign in
          </a>
        )}
      </div>
    </div>
  );
}
