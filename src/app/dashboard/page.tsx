'use client';
export const dynamic = 'force-dynamic';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function IndexPage() {
  const { data: session, status } = useSession();

  const handleForm = async (e: any) => {
    e.preventDefault();
    await signIn('credentials', {
      redirect: false,
      email: 'matheusdamiao',
      password: '1234567',
    });
  };

  if (session && session.user?.error) {
    return (
      <div className='flex h-screen flex-col items-center justify-center gap-4'>
        <p>senha errada</p>
        <button onClick={(e) => handleForm(e)}>Sign in</button>
      </div>
    );
  }

  if (session && session.user) {
    return (
      <div className='flex h-screen flex-col items-center justify-center gap-4'>
        Signed in as {session.user.user.username} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <div className='flex h-screen flex-col items-center justify-center gap-4'>
        Not signed in <br />
        <button onClick={(e) => handleForm(e)}>Sign in</button>
      </div>
    );
  }

  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4'>
      {' '}
      'Loading...'
    </div>
  );
}
