/* eslint-disable @next/next/no-img-element */
'use client';
export const dynamic = 'force-dynamic';
import { Spinner } from 'flowbite-react';
import { UserStrapi } from 'index';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

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
        <section className='m-auto w-full max-w-4xl'>
          <div className='relative flex h-[20vh] flex-col items-center justify-center'>
            <Link
              href='/dashboard'
              className='absolute left-0 top-6 flex flex-row-reverse gap-2'
            >
              <small>voltar</small>
              <img src='/svg/return.svg' alt='voltar icone' />
            </Link>
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
