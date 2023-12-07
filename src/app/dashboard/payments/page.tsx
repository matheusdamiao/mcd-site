/* eslint-disable @next/next/no-img-element */
'use client';
export const dynamic = 'force-dynamic';
import { Spinner } from 'flowbite-react';
import { UserStrapi } from 'index';
import { redirect } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

import { isProd } from '@/constant/env';

export default function Documents() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserStrapi>();

  /////
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [CPF, setCPF] = useState('');
  const [RG, setRG] = useState('');

  async function api<T>(url: string): Promise<T> {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.user.jwt}`,
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = (await res.json()) as Promise<T>;
    const realData = await data;
    return realData;
  }

  const saveUserData = async () => {
    if (session && session.user) {
      const data = await api<UserStrapi>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/me?populate=*`
      );
      setUser(data);
    }
  };

  React.useEffect(() => {
    saveUserData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const editData = () => {
    if (name !== user?.nome) {
      setName(user?.nome);
    }
    if (email !== user?.email) {
      setEmail(user?.email);
    }
    if (CPF !== user?.CPF) {
      setCPF(user?.CPF);
    }
    if (RG !== user?.RG) {
      setRG(user?.RG);
    }
    if (phone !== user?.telefone) {
      setPhone(user?.telefone);
    }
  };

  React.useEffect(() => {
    editData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const isLoading = status === 'loading';
  if (isLoading) return <Spinner />;

  if (session && session.user?.user) {
    return (
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

        <section className='m-auto w-full max-w-4xl'>
          <div className='relative flex h-[20vh] flex-col items-center justify-center'>
            <a
              href='/dashboard'
              className='absolute left-0 top-6 flex flex-row-reverse gap-2'
            >
              <small>voltar</small>
              <img src='/svg/return.svg' alt='voltar icone' />
            </a>
            <img
              src='/icons/payment.svg'
              className='lg:w-14'
              alt='person icon'
            />
            <h3 className='font-primary text-base font-normal text-[#646262]'>
              Seus pagamentos
            </h3>
          </div>
          <div className='relative w-full rounded-[18px] bg-[#F0F0F0] px-6 py-8'>
            <div>
              <p> Você não possui pagamentos em aberto. </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (status === 'unauthenticated') {
    return redirect('/dashboard');
  }
}
