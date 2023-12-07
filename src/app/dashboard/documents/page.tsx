/* eslint-disable @next/next/no-img-element */
'use client';
export const dynamic = 'force-dynamic';
import { Button, Spinner } from 'flowbite-react';
import { UserStrapi } from 'index';
import { redirect } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { isProd } from '@/constant/env';

export default function Documents() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserStrapi>();

  /////
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [CPF, setCPF] = useState('');
  const [RG, setRG] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isDelete, setIsDelete] = useState(false);
  const [fileToDelete, setFileToDelete] = useState({ id: '', name: '' });

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
        toast.success('Documentos atualizados!', { autoClose: 1500 });
        setFile(null);
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
      const load = toast.loading('Carregando arquivo');

      const formData = new FormData();
      formData.append('files', file);
      formData.append('ref', 'plugin::users-permissions.user');
      formData.append('refId', user?.id);
      formData.append('field', 'documentos');
      formData.append('source', 'users-permissions');

      try {
        const result = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/upload/`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${session?.user.jwt}`,
            },
            body: formData,
          }
        );

        await result.json();
        // console.log(data);
        toast.update(load, {
          render: 'Arquivo carregado!',
          type: 'success',
          autoClose: 1000,
          isLoading: false,
        });
      } catch (error) {
        toast.error('Erro ao carregar o documento. Tente novamente');
      }
    }
  };

  const deleteThisFile = async (id: number, name: string) => {
    setIsDelete(true);
    setFileToDelete({ id: String(id), name: name });
  };

  const deleteFile = async (id: string) => {
    // console.log(id);
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/upload/files/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${session?.user.jwt}`,
          },
        }
      );
      toast.success('Arquivo apagado!', { autoClose: 1500 });
      await result.json();
      // console.log(data);
      setIsDelete(false);
      saveUserData();
    } catch (error) {
      toast.error('Erro ao apagar o documento. Tente novamente');
    }
  };

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
              src='/icons/documents.svg'
              className='lg:w-14'
              alt='person icon'
            />
            <h3 className='font-primary text-base font-normal text-[#646262]'>
              Seus documentos
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
                    <div className='flex flex-col gap-4'>
                      {user.documentos &&
                        user.documentos.map((doc) => {
                          return (
                            <a
                              key={`${doc.id}`}
                              download='Example-PDF-document'
                              target='_blank'
                              rel='noreferrer'
                              href={`${
                                isProd
                                  ? doc.url
                                  : `${process.env.NEXT_PUBLIC_API_URL}${doc.url}`
                              }`}
                            >
                              {' '}
                              {doc.name}
                            </a>
                          );
                        })}
                      {!user.documentos && (
                        <p> Você ainda não possui documentos. </p>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {user && isEditable && (
              <form action='' className='flex flex-col gap-3 py-3'>
                <div className='relative w-full'>
                  <div className='flex h-full w-full flex-col justify-between gap-8'>
                    <div className='flex flex-col gap-4'>
                      {user.documentos !== null &&
                        user.documentos.map((doc) => {
                          return (
                            <div key={`${doc.hash}`}>
                              <div className='flex justify-between'>
                                <a
                                  key={`${doc.alternativeText}`}
                                  download='Example-PDF-document'
                                  target='_blank'
                                  rel='noreferrer'
                                  href={`${
                                    isProd
                                      ? doc.url
                                      : `${process.env.NEXT_PUBLIC_API_URL}${doc.url}`
                                  }`}
                                  className='w-[80%]'
                                >
                                  {' '}
                                  {doc.name}
                                </a>
                                <span>olha o id:{doc.id} </span>
                                <button
                                  type='button'
                                  onClick={() =>
                                    deleteThisFile(doc.id, doc.name)
                                  }
                                >
                                  {' '}
                                  <img
                                    src='/svg/trash.svg'
                                    alt='ícone de apagar'
                                  />
                                </button>
                              </div>
                              {isDelete && (
                                <div className='fixed left-0 top-0 z-[9922] flex h-screen w-full items-center justify-center bg-[#1b5b70]'>
                                  <div className='flex h-96 w-60 flex-col items-center justify-center gap-5 bg-white'>
                                    <p className='text-center'>
                                      Deseja apagar o arquivo <br />
                                      <span className='font-bold'>
                                        {fileToDelete.name}
                                      </span>
                                      ?
                                    </p>
                                    <div className='flex gap-4'>
                                      <button
                                        type='button'
                                        onClick={() =>
                                          deleteFile(fileToDelete.id)
                                        }
                                        className='hover:underline'
                                      >
                                        Sim
                                      </button>
                                      <button
                                        type='button'
                                        onClick={() => setIsDelete(false)}
                                        className='hover:underline'
                                      >
                                        Não
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      {!user.documentos && (
                        <p> Você ainda não possui documentos. </p>
                      )}
                    </div>

                    <label
                      className='z-20 flex h-full  w-full cursor-pointer items-center text-sm text-blue-500 lg:text-xs'
                      htmlFor='avatar'
                    >
                      Adicionar documento
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
                        Carregue seu documento
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
  }

  if (status === 'unauthenticated') {
    return redirect('/dashboard');
  }
}
