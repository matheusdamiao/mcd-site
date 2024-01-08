'use client';
/* eslint-disable @next/next/no-img-element */
import { Button, Spinner } from 'flowbite-react';
import { UserStrapi } from 'index';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { isProd } from '@/constant/env';

const EditData = ({ userData }: { userData: UserStrapi }) => {
  const [mounted, setMounted] = useState(false);
  const { data: session } = useSession();
  const [user, setUser] = useState<UserStrapi>(userData);
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [CPF, setCPF] = useState('');
  const [RG, setRG] = useState('');
  const [file, setFile] = useState<File | null>(null);

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

  // React.useEffect(() => {
  //   saveUserData();
  //   // console.log(status);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [session]);

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
  }, [user, isEditable]);

  const handleForm = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/${user?.id}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${session?.user.jwt}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: name,
            telefone: phone,
            RG: RG,
            CPF: CPF,
            email: email,
          }),
        }
      );
      // const updatedUser = await res.json();
      if (res.ok) {
        toast.success('Perfil atualizado!', { autoClose: 1500 });
        return saveUserData();
      } else {
        return toast.error('Não fui possível atualizar. Tente novamente');
      }
    } catch (error) {
      toast.error('Ops! Ocorreu um erro. Tente novamente');
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: any) => {
    e.preventDefault();

    if (file) {
      const load = toast.loading('Carregando imagem');

      const formData = new FormData();
      formData.append('files', file);
      formData.append('ref', 'plugin::users-permissions.user');
      formData.append('refId', user?.id);
      formData.append('field', 'avatar');
      formData.append('source', 'users-permissions');

      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/upload/`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${session?.user.jwt}`,
          },
          body: formData,
        });

        // const data = await result.json();
        // console.log(data);
        toast.update(load, {
          render: 'Imagem carregada!',
          type: 'success',
          autoClose: 1000,
          isLoading: false,
        });
      } catch (error) {
        toast.error('Erro ao carregar a imagem. Tente novamente');
      }
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <>
        <Spinner />
      </>
    );
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
          <img src='/icons/person.svg' className='lg:w-14' alt='person icon' />
          <h3 className='font-primary text-base font-normal text-[#646262]'>
            Seus dados pessoais
          </h3>
        </div>
        <div className='relative w-full rounded-[18px] bg-[#F0F0F0] px-6 py-8'>
          {!isEditable && (
            <button onClick={() => setIsEditable(!isEditable)}>
              <small className='absolute right-10 top-4'>Editar</small>
              <img
                src='/svg/edit-data.svg'
                alt='edit icon'
                className='absolute right-4 top-4'
              />
            </button>
          )}
          {isEditable && (
            <button onClick={() => setIsEditable(!isEditable)}>
              <small className='absolute right-10 top-4'>Voltar</small>
              <img
                className='absolute right-4 top-4'
                src='/svg/return.svg'
                alt='voltar icone'
              />
            </button>
          )}

          <div>
            {user && !isEditable && (
              <>
                <div>
                  <small className='font-primary text-[#9E9E9E]s text-[8px] lg:text-xs'>
                    Nome Completo
                  </small>
                  <p className='font-primary min-h-[28px] rounded-sm px-2 py-1 lg:text-xl'>
                    {user.nome}
                  </p>
                </div>
                <div>
                  <small className='font-primary text-[#9E9E9E]s text-[9px] lg:text-xs'>
                    Telefone
                  </small>
                  <p className='font-primary min-h-[28px] rounded-sm  px-2 py-1 lg:text-xl'>
                    {user.telefone}
                  </p>
                </div>
                <div>
                  <small className='font-primary text-[#9E9E9E]s text-[8px] lg:text-xs'>
                    CPF
                  </small>
                  <p className='font-primary min-h-[28px] rounded-sm  px-2 py-1 lg:text-xl'>
                    {user.CPF}
                  </p>
                </div>
                <div>
                  <small className='font-primary text-[#9E9E9E]s text-[8px] lg:text-xs'>
                    RG
                  </small>
                  <p className='font-primary min-h-[28px] rounded-sm  px-2 py-1 lg:text-xl'>
                    {user.RG}
                  </p>
                </div>
                <div>
                  <small className='font-primary text-[#9E9E9E]s text-[8px] lg:text-xs'>
                    E-mail
                  </small>
                  <p className='font-primary min-h-[28px] rounded-sm  px-2 py-1 lg:text-xl'>
                    {user.email}
                  </p>
                </div>
                <div>
                  <small className='font-primary text-[#9E9E9E]s text-[8px] lg:text-xs'>
                    Foto de perfil
                  </small>
                  <p className='font-primary min-h-[28px] rounded-sm  px-2 py-1 lg:text-xl'>
                    <img
                      src={
                        isProd
                          ? user?.avatar?.url
                          : user?.avatar?.url
                          ? `${process.env.NEXT_PUBLIC_API_URL}${user?.avatar.url}`
                          : '/svg/profile-place.svg'
                      }
                      alt='avatar'
                      className='max-w-[80px] lg:max-w-[100px]'
                    />
                  </p>
                </div>
              </>
            )}
          </div>

          {user && isEditable && (
            <form action='' className='flex flex-col gap-3 py-3'>
              <div className='relative w-full'>
                <input
                  type='text'
                  id='nome'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 lg:text-xl dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                />
                <label
                  htmlFor='nome'
                  className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-[10px] text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black lg:text-xs dark:bg-gray-900 dark:text-gray-400'
                >
                  Nome Completo
                </label>
              </div>
              <div className='relative w-full'>
                <input
                  type='text'
                  id='telefone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 lg:text-xl dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                />
                <label
                  htmlFor='telefone'
                  className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-[10px] text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black lg:text-xs dark:bg-gray-900 dark:text-gray-400'
                >
                  Telefone
                </label>
              </div>

              <div className='relative w-full'>
                <input
                  type='text'
                  id='CPF'
                  value={CPF}
                  onChange={(e) => setCPF(e.target.value)}
                  className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 lg:text-xl dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                />
                <label
                  htmlFor='CPF'
                  className=' absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-[10px] text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black lg:text-xs dark:bg-gray-900 dark:text-gray-400'
                >
                  CPF
                </label>
              </div>

              <div className='relative w-full'>
                <input
                  type='text'
                  id='RG'
                  value={RG}
                  onChange={(e) => setRG(e.target.value)}
                  className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 lg:text-xl dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                />
                <label
                  htmlFor='RG'
                  className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-[10px] text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black lg:text-xs dark:bg-gray-900 dark:text-gray-400'
                >
                  RG
                </label>
              </div>

              <div className='relative w-full'>
                <input
                  type='text'
                  id='e-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 lg:text-xl dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                />
                <label
                  htmlFor='e-mail'
                  className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-[10px] text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black lg:text-xs dark:bg-gray-900 dark:text-gray-400'
                >
                  E-mail
                </label>
              </div>

              <div className='relative w-full'>
                <div className='flex h-full w-full items-center justify-between gap-2'>
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
                      className='max-w-[80px] lg:max-w-[150px]'
                    />
                  </div>

                  <label
                    className='z-20 flex h-full  w-full items-center text-sm text-blue-500 lg:text-xs'
                    htmlFor='avatar'
                  >
                    Escolha seu avatar
                  </label>
                  <input
                    type='file'
                    id='avatar'
                    onChange={handleFileChange}
                    className='absolute z-10 h-1 w-1 overflow-hidden opacity-0'
                  />
                </div>
                {file && (
                  <section className='flex flex-col gap-2 py-2'>
                    <ul>
                      <li>Nome: {file.name}</li>
                    </ul>
                    <button
                      className='rounded-lg border-2 border-gray-500 bg-white px-4 py-1'
                      onClick={handleUpload}
                    >
                      Carregue sua imagem
                    </button>
                  </section>
                )}
              </div>

              {isEditable && (
                <Button onClick={handleForm}>Salvar edições</Button>
              )}
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default EditData;
