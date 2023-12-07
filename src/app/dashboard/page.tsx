/* eslint-disable @next/next/no-img-element */
'use client';
export const dynamic = 'force-dynamic';

import { Spinner } from 'flowbite-react';
import { UserStrapi } from 'index';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

import Login from '@/components/Login/login';

import { isProd } from '@/constant/env';

export default function IndexPage() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserStrapi>();

  async function api<T>(url: string): Promise<T> {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.user.jwt}`,
      },
    });
    // console.log(res);
    if (!res.ok) {
      // console.log(res);
    }
    const data = (await res.json()) as Promise<T>;
    const realData = await data;
    return realData;
  }

  const saveUserData = async () => {
    if (session && session.user && status === 'authenticated') {
      // console.log(status);
      const data = await api<UserStrapi>(`
        ${process.env.NEXT_PUBLIC_API_URL}/api/users/me?populate=*`);
      setUser(data);
    }
  };

  React.useEffect(() => {
    saveUserData();
    // console.log(status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  if (session?.user?.error || !session) {
    return <Login />;
  }

  if (session && session.user) {
    return (
      <>
        <main className='m-auto max-w-7xl px-6 py-6'>
          <div className='flex w-full justify-between'>
            <div className='flex-0 flex-shrink-0 flex-grow-0'>
              <img
                src='/svg/logo-mob.svg'
                alt=''
                className='w-full max-w-[150px] lg:max-w-[400px]'
              />
            </div>
            <aside className='flex gap-2'>
              <div>
                <img
                  src={
                    isProd
                      ? user?.avatar?.url
                      : user?.avatar?.url
                      ? `${process.env.NEXT_PUBLIC_API_URL}${user?.avatar.url}`
                      : '/svg/profile-place.svg'
                  }
                  alt='avatar'
                  className='max-w-[30px] lg:max-w-[50px]'
                />
              </div>
              <div className='flex flex-col justify-center'>
                {user && (
                  <p className='font-primary text-xs font-normal text-[#646464] lg:text-base'>
                    {user.username}
                  </p>
                )}
                <a
                  className='cursor-pointer rounded-none text-xs font-normal text-[#A9A9A9] hover:underline lg:text-base'
                  onClick={() => signOut()}
                >
                  Sair
                </a>
              </div>
            </aside>
          </div>
          <div className='flex h-[20vh] flex-col justify-center'>
            <h2 className='font-primary flex-shrink-0 text-2xl font-normal text-[#5E5E5E] lg:text-5xl'>
              {' '}
              <span className='text-[#A9A9A9]'>Olá,</span>{' '}
              {(user && user.nome) || user?.username}
            </h2>
            <h3 className='font-primary text-xs font-normal text-[#646464] lg:text-lg'>
              Seja bem-vindo a MCD Assessoria Contábil
            </h3>
          </div>
          <section className=' flex flex-col flex-wrap gap-4 pb-16 lg:flex-row lg:items-start lg:justify-evenly'>
            <a
              href='/dashboard/profile'
              className='flex h-[100px] w-full max-w-lg cursor-pointer flex-col items-center justify-center gap-1 rounded-[18px] bg-[#E7E7E7] transition-all hover:scale-[1.1] lg:h-[250px]'
            >
              <div>
                <img
                  src='/icons/person.svg'
                  className='lg:w-14'
                  alt='person icon'
                />
              </div>
              <h4 className='font-primary text-xs font-normal text-[#646262] lg:text-xl'>
                {' '}
                Seus dados pessoais
              </h4>
            </a>
            <a
              href='/dashboard/company'
              className='flex h-[100px] w-full max-w-lg cursor-pointer flex-col items-center justify-center gap-1 rounded-[18px] bg-[#E7E7E7] transition-all hover:scale-[1.1] lg:h-[250px]'
            >
              <div>
                <img
                  src='/icons/building.svg'
                  className='lg:w-14'
                  alt='person icon'
                />
              </div>
              <h4 className='font-primary text-xs font-normal text-[#646262] lg:text-xl'>
                {' '}
                Sua empresa
              </h4>
            </a>
            <a
              href='/dashboard/documents'
              className='flex h-[100px] w-full max-w-lg  cursor-pointer flex-col items-center justify-center gap-1 rounded-[18px]  bg-[#E7E7E7] transition-all hover:scale-[1.1] lg:h-[250px]'
            >
              <div>
                <img
                  src='/icons/documents.svg'
                  className='lg:w-14'
                  alt='person icon'
                />
              </div>
              <h4 className='font-primary text-xs font-normal text-[#646262] lg:text-xl'>
                {' '}
                Seus documentos
              </h4>
            </a>
            <a
              href='/dashboard/payments'
              className='flex h-[100px] w-full max-w-lg  cursor-pointer flex-col items-center justify-center gap-1 rounded-[18px]  bg-[#E7E7E7] transition-all hover:scale-[1.1] lg:h-[250px]'
            >
              <div>
                <img
                  src='/icons/payment.svg'
                  className='lg:w-14'
                  alt='person icon'
                />
              </div>
              <h4 className='font-primary text-xs font-normal text-[#646262] lg:text-xl'>
                {' '}
                Seus pagamentos
              </h4>
            </a>
          </section>
        </main>
        <a className='font-primary fixed bottom-0 flex h-16 w-full items-center justify-center gap-2 bg-[#84FE89] text-xs font-bold text-[#202020]'>
          {' '}
          <img src='/icons/zap.svg' alt='' />
          <p>CONVERSE COM A GENTE </p>
        </a>
      </>
    );
  }

  if (status !== 'authenticated') {
    return <Login />;
  }

  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4'>
      {' '}
      <Spinner />
    </div>
  );
}
