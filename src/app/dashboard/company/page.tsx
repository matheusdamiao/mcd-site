/* eslint-disable @next/next/no-img-element */
'use client';
export const dynamic = 'force-dynamic';
import { Button, Spinner } from 'flowbite-react';
import { Company, Root, UserStrapi } from 'index';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { isProd } from '@/constant/env';

export default function Company() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserStrapi>();
  const [company, setCompany] = useState<Company>();
  const [fullData, setFullData] = useState<Root>();

  /////
  const [file, setFile] = useState<File | null>(null);
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');

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

  const saveCompanyData = async () => {
    if (session && session.user && user?.empresa) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/empresas/${user?.empresa.id}?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${session?.user.jwt}`,
            },
          }
        );

        const companyData = await res.json();
        // console.log(companyData);
        setFullData(companyData);
        setCompany(companyData.data.attributes);
        if (res.ok) {
          // console.log(res);
        } else {
          // return console.log(res);
        }
      } catch (error) {
        // console.log(error);
        toast.error('Ops! Ocorreu um erro. Tente novamente');
      }
    }
  };

  React.useEffect(() => {
    saveCompanyData();
    // console.log(company);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const editData = () => {
    if (name !== company?.nome) {
      setName(company?.nome);
    }
    if (CNPJ !== company?.CNPJ) {
      setCNPJ(company?.CNPJ);
    }
    if (description !== company?.descricao) {
      setDescription(company?.descricao);
    }
    if (address !== company?.endereco) {
      setAddress(company?.endereco);
    }
    if (phone !== company?.telefone) {
      setPhone(company?.telefone);
    }
    if (city !== company?.cidade) {
      setCity(company?.cidade);
    }
  };

  React.useEffect(() => {
    editData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [company, isEditable]);

  const handleForm = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/empresas/${fullData?.data.id}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${session?.user.jwt}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              nome: name,
              CNPJ: CNPJ,
              descricao: description,
              endereco: address,
              cidade: city,
              telefone: phone,
            },
          }),
        }
      );
      // const updatedUser = await res.json();
      if (res.ok) {
        toast.success('Empresa atualizada!', { autoClose: 1500 });
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
      formData.append('ref', 'api::empresa.empresa');
      formData.append('refId', String(fullData?.data.id));
      formData.append('field', 'documentos');
      //   formData.append('source', 'users-permissions');

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
          render: 'Arquivo carregado!',
          type: 'success',
          autoClose: 1000,
          isLoading: false,
        });
      } catch (error) {
        toast.error('Erro ao carregar o arquivo. Tente novamente');
      }
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
              src='/icons/building.svg'
              className='lg:w-14'
              alt='person icon'
            />
            <h3 className='font-primary text-base font-normal text-[#646262]'>
              Sua empresa
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
              {company && !isEditable && (
                <>
                  <div>
                    <small className='font-primary text-[#9E9E9E]s text-[8px] lg:text-xs'>
                      Nome
                    </small>
                    <p className='font-primary min-h-[28px] rounded-sm px-2 py-1 lg:text-xl'>
                      {company.nome}
                    </p>
                  </div>
                  <div>
                    <small className='font-primary text-[#9E9E9E]s text-[9px] lg:text-xs'>
                      CNPJ
                    </small>
                    <p className='font-primary min-h-[28px] rounded-sm  px-2 py-1 lg:text-xl'>
                      {company.CNPJ}
                    </p>
                  </div>
                  <div>
                    <small className='font-primary text-[#9E9E9E]s text-[8px] lg:text-xs'>
                      Descrição
                    </small>
                    <p className='font-primary min-h-[28px] rounded-sm  px-2 py-1 lg:text-xl'>
                      {company.descricao}
                    </p>
                  </div>
                  <div>
                    <small className='font-primary text-[#9E9E9E]s text-[8px] lg:text-xs'>
                      Endereço
                    </small>
                    <p className='font-primary min-h-[28px] rounded-sm  px-2 py-1 lg:text-xl'>
                      {company.endereco}
                    </p>
                  </div>
                  <div>
                    <small className='font-primary text-[#9E9E9E]s text-[8px] lg:text-xs'>
                      Cidade
                    </small>
                    <p className='font-primary min-h-[28px] rounded-sm  px-2 py-1 lg:text-xl'>
                      {company.cidade}
                    </p>
                  </div>
                  <div>
                    <small className='font-primary text-[#9E9E9E]s text-[8px] lg:text-xs'>
                      Área de atuação
                    </small>
                    <p className='font-primary min-h-[28px] rounded-sm  px-2 py-1 lg:text-xl'>
                      {company.area}
                    </p>
                  </div>
                  <div>
                    <small className='font-primary text-[#9E9E9E]s text-[8px] lg:text-xs'>
                      Telefone
                    </small>
                    <p className='font-primary min-h-[28px] rounded-sm  px-2 py-1 lg:text-xl'>
                      {company.telefone}
                    </p>
                  </div>

                  <div>
                    <small className='font-primary text-[#9E9E9E]s text-[8px] lg:text-xs'>
                      Status da Empresa
                    </small>
                    <p className='font-primary min-h-[28px] rounded-sm  px-2 py-1 lg:text-xl'>
                      {company.aberta ? 'aberta' : 'em progresso'}
                    </p>
                  </div>

                  <div>
                    <small className='font-primary text-[#9E9E9E]s text-[8px] lg:text-xs'>
                      Documentos
                    </small>
                    <div className='flex flex-col gap-4'>
                      {company.documentos.data &&
                        company.documentos.data.map((doc) => {
                          return (
                            <a
                              key={`${doc.id}`}
                              download='Example-PDF-document'
                              target='_blank'
                              rel='noreferrer'
                              href={`${
                                isProd
                                  ? doc.attributes.url
                                  : `${process.env.NEXT_PUBLIC_API_URL}${doc.attributes.url}`
                              }`}
                            >
                              {' '}
                              {doc.attributes.name}
                            </a>
                          );
                        })}
                    </div>
                  </div>
                </>
              )}
              {!company && user?.empresa && (
                <div className='flex items-center justify-center'>
                  <Spinner />{' '}
                </div>
              )}
              {user?.empresa === null && (
                <div>Você ainda não cadastrou da sua empresa</div>
              )}
            </div>

            {company && isEditable && (
              <form action='' className='flex flex-col gap-3 py-3'>
                <div className='relative w-full'>
                  <input
                    type='text'
                    id='nome'
                    value={name || ''}
                    onChange={(e) => setName(e.target.value)}
                    className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 lg:text-xl'
                    placeholder=' '
                  />
                  <label
                    htmlFor='nome'
                    className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-[10px] text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900 dark:text-gray-400 lg:text-xs'
                  >
                    Nome
                  </label>
                </div>

                <div className='relative w-full'>
                  <input
                    type='text'
                    id='CNPJ'
                    value={CNPJ || ''}
                    onChange={(e) => setCNPJ(e.target.value)}
                    className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 lg:text-xl'
                    placeholder=' '
                  />
                  <label
                    htmlFor='CNPJ'
                    className=' absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-[10px] text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900 dark:text-gray-400 lg:text-xs'
                  >
                    CNPJ
                  </label>
                </div>
                <div className='relative w-full'>
                  <input
                    type='text'
                    id='description'
                    value={description || ''}
                    onChange={(e) => setDescription(e.target.value)}
                    className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 lg:text-xl'
                    placeholder=' '
                  />
                  <label
                    htmlFor='description'
                    className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-[10px] text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900 dark:text-gray-400 lg:text-xs'
                  >
                    Descrição
                  </label>
                </div>

                <div className='relative w-full'>
                  <input
                    type='text'
                    id='endereço'
                    value={address || ''}
                    onChange={(e) => setAddress(e.target.value)}
                    className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 lg:text-xl'
                    placeholder=' '
                  />
                  <label
                    htmlFor='endereço'
                    className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-[10px] text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900 dark:text-gray-400 lg:text-xs'
                  >
                    Endereço
                  </label>
                </div>
                <div className='relative w-full'>
                  <input
                    type='text'
                    id='cidade'
                    value={city || ''}
                    onChange={(e) => setCity(e.target.value)}
                    className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 lg:text-xl'
                    placeholder=' '
                  />
                  <label
                    htmlFor='cidade'
                    className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-[10px] text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900 dark:text-gray-400 lg:text-xs'
                  >
                    Cidade
                  </label>
                </div>

                <div className='relative w-full'>
                  <input
                    type='text'
                    id='telefone'
                    value={phone || ''}
                    onChange={(e) => setPhone(e.target.value)}
                    className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 lg:text-xl'
                    placeholder=' '
                  />
                  <label
                    htmlFor='telefone'
                    className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-[10px] text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900 dark:text-gray-400 lg:text-xs'
                  >
                    Telefone
                  </label>
                </div>
                <div className='relative w-full'>
                  <div className='flex h-full w-full items-center justify-between gap-2'>
                    <div className='flex flex-col gap-4'>
                      {company.documentos.data &&
                        company.documentos.data.map((doc) => {
                          return (
                            <a
                              key={`${doc.id}`}
                              download='Example-PDF-document'
                              target='_blank'
                              rel='noreferrer'
                              href={`${
                                isProd
                                  ? doc.attributes.url
                                  : `${process.env.NEXT_PUBLIC_API_URL}${doc.attributes.url}`
                              }`}
                            >
                              {' '}
                              {doc.attributes.name}
                            </a>
                          );
                        })}
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
