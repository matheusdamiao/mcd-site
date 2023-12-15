/* eslint-disable @next/next/no-img-element */
'use client';
export const dynamic = 'force-dynamic';
import { Button, Spinner } from 'flowbite-react';
import { UserStrapi } from 'index';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
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
        saveUserData();
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
      setFile(null);
    } catch (error) {
      toast.error('Erro ao apagar o documento. Tente novamente');
    }
  };

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
              {!user && (
                <div className='flex items-center justify-center'>
                  {' '}
                  <Spinner />
                </div>
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
                                <div className='z- fixed left-0 top-0 z-[9922] flex h-screen w-full items-center justify-center bg-[#a8abac] bg-opacity-60'>
                                  <div className='z-50 flex h-96 w-60 flex-col items-center justify-center gap-5 rounded-lg bg-white shadow-xl lg:w-96'>
                                    <svg
                                      className='fill-current text-red-600'
                                      width='24'
                                      height='25'
                                      viewBox='0 0 24 24'
                                    >
                                      <path d='M6.53125 6.53125C6.68872 6.53125 6.83974 6.59381 6.95109 6.70516C7.06244 6.81651 7.125 6.96753 7.125 7.125V14.25C7.125 14.4075 7.06244 14.5585 6.95109 14.6698C6.83974 14.7812 6.68872 14.8438 6.53125 14.8438C6.37378 14.8438 6.22276 14.7812 6.11141 14.6698C6.00006 14.5585 5.9375 14.4075 5.9375 14.25V7.125C5.9375 6.96753 6.00006 6.81651 6.11141 6.70516C6.22276 6.59381 6.37378 6.53125 6.53125 6.53125ZM9.5 6.53125C9.65747 6.53125 9.8085 6.59381 9.91985 6.70516C10.0312 6.81651 10.0938 6.96753 10.0938 7.125V14.25C10.0938 14.4075 10.0312 14.5585 9.91985 14.6698C9.8085 14.7812 9.65747 14.8438 9.5 14.8438C9.34253 14.8438 9.19151 14.7812 9.08016 14.6698C8.96881 14.5585 8.90625 14.4075 8.90625 14.25V7.125C8.90625 6.96753 8.96881 6.81651 9.08016 6.70516C9.19151 6.59381 9.34253 6.53125 9.5 6.53125ZM13.0625 7.125C13.0625 6.96753 12.9999 6.81651 12.8886 6.70516C12.7772 6.59381 12.6262 6.53125 12.4688 6.53125C12.3113 6.53125 12.1603 6.59381 12.0489 6.70516C11.9376 6.81651 11.875 6.96753 11.875 7.125V14.25C11.875 14.4075 11.9376 14.5585 12.0489 14.6698C12.1603 14.7812 12.3113 14.8438 12.4688 14.8438C12.6262 14.8438 12.7772 14.7812 12.8886 14.6698C12.9999 14.5585 13.0625 14.4075 13.0625 14.25V7.125Z' />
                                      <path d='M17.2188 3.5625C17.2188 3.87744 17.0936 4.17949 16.8709 4.40219C16.6482 4.62489 16.3462 4.75 16.0312 4.75H15.4375V15.4375C15.4375 16.0674 15.1873 16.6715 14.7419 17.1169C14.2965 17.5623 13.6924 17.8125 13.0625 17.8125H5.9375C5.30761 17.8125 4.70352 17.5623 4.25812 17.1169C3.81272 16.6715 3.5625 16.0674 3.5625 15.4375V4.75H2.96875C2.65381 4.75 2.35176 4.62489 2.12906 4.40219C1.90636 4.17949 1.78125 3.87744 1.78125 3.5625V2.375C1.78125 2.06006 1.90636 1.75801 2.12906 1.53531C2.35176 1.31261 2.65381 1.1875 2.96875 1.1875H7.125C7.125 0.872555 7.25011 0.57051 7.47281 0.347811C7.69551 0.125111 7.99756 0 8.3125 0L10.6875 0C11.0024 0 11.3045 0.125111 11.5272 0.347811C11.7499 0.57051 11.875 0.872555 11.875 1.1875H16.0312C16.3462 1.1875 16.6482 1.31261 16.8709 1.53531C17.0936 1.75801 17.2188 2.06006 17.2188 2.375V3.5625ZM4.89013 4.75L4.75 4.82006V15.4375C4.75 15.7524 4.87511 16.0545 5.09781 16.2772C5.32051 16.4999 5.62256 16.625 5.9375 16.625H13.0625C13.3774 16.625 13.6795 16.4999 13.9022 16.2772C14.1249 16.0545 14.25 15.7524 14.25 15.4375V4.82006L14.1099 4.75H4.89013ZM2.96875 3.5625H16.0312V2.375H2.96875V3.5625Z' />
                                    </svg>
                                    <p className='font-primary text-center'>
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
                                        className='bg rounded-xl bg-red-600 px-3 py-1 text-white hover:underline'
                                      >
                                        Deletar
                                      </button>
                                      <button
                                        type='button'
                                        onClick={() => setIsDelete(false)}
                                        className='rounded-xl border-2 bg-transparent px-3 py-1 hover:underline'
                                      >
                                        Cancelar
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      {!user.documentos && !file && (
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
