/* eslint-disable @next/next/no-img-element */
'use client';
import { UserStrapi } from 'index';
import Head from 'next/head';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import FAQ from '@/components/FAQ/faq';
import CustomFooter from '@/components/Footer/CustomFooter';
import NavBar from '@/components/navbar/Navbar';
import BlogSection from '@/components/sections/blogSection';
import SolutionsSection from '@/components/sections/solutionsSections';

export default function ChangeAccountant() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [CNPJ, setCNPJ] = useState('');

  const handleForm = async (e: any) => {
    e.preventDefault();
    // check if there's already a user with that e-mail or username
    try {
      const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
      const data = await users.json();
      const EmailAlreadyExists = data
        .map((user: UserStrapi) => user.email)
        .includes(email);
      if (EmailAlreadyExists === true) {
        return toast.error('E-mail cadastrado já existe!');
      }
      const UserAlreadyExists = data
        .map((user: UserStrapi) => user.username)
        .includes(user);
      if (UserAlreadyExists === true) {
        return toast.error('Nome de usuário já existe!');
      }
    } catch (error) {
      toast.error('Ops! Ocorreu um erro. Tente novamente');
    }

    //////// create a new user
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            username: user,
            password: password,
            nome: name,
            telefone: phone,
          }),
        }
      );
      const data: any = await response.json();
      // console.log(data);
      if (data.data === null) {
        // const erros = data?.error.details.errors.map((err: any) => err.message);
        // console.log(erros);
        return toast.error('Erro no cadastro!');
      }

      /// create company with new user
      try {
        // console.log(data.user.id);
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/empresas`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              CNPJ: CNPJ,
              aberta: true,
              cidade: city,
              area: area,
              dono: {
                id: data.user.id,
              },
            },
          }),
        });

        // console.log(await res.json());
      } catch (error) {
        // console.log();
      }

      toast.success('Empresa e usuário cadastrados!');

      return setTimeout(() => {
        signIn('credentials', {
          redirect: true,
          email: email,
          password: password,
          callbackUrl: '/dashboard',
        });
      }, 2000);
    } catch (error) {
      toast.error('Erro no cadastro!');
    }
  };
  return (
    <main className='m-0 flex w-full flex-col bg-[#F2F2F2]'>
      <Head>
        <title>MCD Contabilidade Consultiva</title>
      </Head>

      <section className='relative flex h-full w-full rounded-b-[30px] lg:h-full lg:rounded-b-[80px] lg:bg-[#F2F2F2]'>
        <Image
          src='/images/bg-hero-contador.webp'
          alt=''
          className='absolute left-0 top-[-50px] h-[450px] w-full object-cover lg:top-[-80px]  lg:block lg:h-full '
          width={1440}
          height={960.12}
          priority={true}
        />

        <NavBar />
        <div className='m-auto flex w-full max-w-[1440px] flex-col flex-wrap  items-center justify-center gap-8 lg:flex-row lg:flex-nowrap lg:px-14 2xl:gap-52'>
          <div className='mt-14  flex h-[300px] max-w-3xl flex-col justify-end gap-7 px-6 sm:h-[200px] lg:mt-0 lg:h-full lg:items-center lg:gap-12'>
            <h1 className=' font-primary z-[99] w-full text-center text-3xl font-normal text-white lg:mt-0 lg:w-[100%] lg:text-left lg:text-[50px] lg:font-normal lg:leading-[60px] '>
              Contabilidade{' '}
              <span className='font-semibold text-white'>
                segura <br className='hidden lg:block' /> e prática
              </span>{' '}
              nas suas mãos
            </h1>
            <h4 className=' font-primary z-40 w-full text-center text-lg font-normal text-white lg:text-left lg:text-2xl  '>
              Nós cuidamos da saúde da sua empresa para que ela possa continuar
              prosperando
            </h4>
          </div>

          <div className='z-[98] mt-0 flex h-full w-[90%] max-w-lg flex-col justify-center gap-4 rounded-[30px] border-2 bg-white px-8 py-8 lg:mt-52'>
            <div>
              <h2 className='text-base font-normal text-[#40494C] lg:text-2xl'>
                Vamos começar os preparativos para{' '}
                <span className='font-semibold'>abrir sua empresa</span>
              </h2>
              <h3 className='pt-4 text-sm font-normal text-[#647073] lg:text-lg'>
                Preencha com suas informações abaixo
              </h3>
            </div>
            <p className='m-0 px-1 py-0 text-base font-semibold text-[#647073]'>
              Sobre você
            </p>

            <div className='relative'>
              <input
                type='text'
                id='nome'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                placeholder=' '
              />
              <label
                htmlFor='nome'
                className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900 dark:text-gray-400'
              >
                Nome
              </label>
            </div>
            <div className=' flex w-full flex-wrap justify-between gap-3 lg:flex-nowrap'>
              <div className='relative w-full'>
                <input
                  type='text'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 lg:max-w-xs'
                  placeholder=' '
                />
                <label
                  htmlFor='email'
                  className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900 dark:text-gray-400 '
                >
                  E-mail
                </label>
              </div>
              <div className='relative w-full'>
                <input
                  type='text'
                  id='telefone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-black focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                />
                <label
                  htmlFor='telefone'
                  className='dark:text-gray-40 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900'
                >
                  Telefone
                </label>
              </div>
            </div>

            <p className='m-0 px-1 py-0 text-base font-semibold text-[#647073]'>
              Sobre seu cadastro
            </p>

            <div className=' flex w-full flex-wrap justify-between gap-3 lg:flex-nowrap'>
              <div className='relative w-full'>
                <input
                  type='text'
                  id='user'
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 lg:max-w-xs'
                  placeholder=' '
                />
                <label
                  htmlFor='user'
                  className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900 dark:text-gray-400 '
                >
                  E-mail
                </label>
              </div>
              <div className='relative w-full'>
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-black focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                />
                <label
                  htmlFor='password'
                  className='dark:text-gray-40 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900'
                >
                  Senha
                </label>
              </div>
            </div>

            <p className='m-0 px-1 py-0 text-base font-semibold text-[#647073]'>
              Sobre sua empresa
            </p>

            <div className=' flex w-full flex-wrap justify-between gap-3 lg:flex-nowrap'>
              <div className='relative w-full'>
                <input
                  type='text'
                  id='area'
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 lg:max-w-xs'
                  placeholder=' '
                />
                <label
                  htmlFor='area'
                  className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900 dark:text-gray-400 '
                >
                  Segmento de Atuação
                </label>
              </div>
              <div className='relative w-full'>
                <input
                  type='text'
                  id='city'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-black focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                />
                <label
                  htmlFor='city'
                  className='dark:text-gray-40 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900'
                >
                  Cidade
                </label>
              </div>
            </div>
            <div className='relative w-full'>
              <input
                type='text'
                id='cnpj'
                value={CNPJ}
                onChange={(e) => setCNPJ(e.target.value)}
                className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-black focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                placeholder=' '
              />
              <label
                htmlFor='cnpj'
                className='dark:text-gray-40 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900'
              >
                CNPJ
              </label>
            </div>
            <div>
              <button
                type='submit'
                onClick={(e) => handleForm(e)}
                className='w-full rounded-2xl bg-[#1D81A2] px-6 py-4 text-xl font-medium text-white'
              >
                Trocar de contador
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 py-10'>
        <div className={`flex-0 mt-8 w-full flex-shrink-0 snap-center `}>
          <h2 className='font-primary  text-center text-3xl font-normal  text-[#1D81A2] lg:text-4xl'>
            {' '}
            Sua contabilidade{' '}
            <span className='text-[#40494C]'>
              {' '}
              na MCD de forma econômica e segura
            </span>
          </h2>
          <h3
            className='font-primary pt-5 text-center text-lg font-normal text-[#647073] lg:text-xl'
            id='contabilidade-1'
          >
            {' '}
            Ajudamos empresas a simplificar suas contabilidades e economizar
            tempo.
          </h3>
          <div className='mt-11 flex flex-col items-center gap-10'>
            <ol className=' flex flex-col items-center gap-10 lg:flex-row lg:gap-12'>
              <li className='flex max-w-xs flex-col items-center gap-5'>
                <img
                  src='/images/contador-illustration-1.png'
                  alt=''
                  className='hidden lg:block'
                />
                <div className='flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-5'>
                  <div className='flex-grow-0'>
                    <img src='/icons/square-1-blue.svg' alt='' />
                  </div>
                  <div className='w-full lg:w-2/3'>
                    <h4 className='font-primary text-center text-base font-semibold text-[#40494C]  lg:text-left'>
                      Faça seu cadastro
                    </h4>
                    <p className=' font-primary m-auto w-[90%] pt-2 text-center text-sm text-[#303030] lg:w-full lg:pt-4 lg:text-left'>
                      Em menos de 2 minutos você terá se cadastrado para iniciar
                      o processo.
                    </p>
                  </div>
                </div>
              </li>

              <li className='flex max-w-sm flex-col items-start gap-5'>
                <img
                  src='/images/contador-illustration-2.png'
                  alt=''
                  className='hidden lg:block'
                />
                <div className='flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-5'>
                  <div className='flex-grow-0'>
                    <img src='/icons/square-2-blue.svg' alt='' />
                  </div>
                  <div className='w-full lg:w-2/3'>
                    <h4 className='font-primary whitespace-nowrap text-center text-base font-semibold  text-[#40494C] lg:text-left'>
                      Fale com nossos especialistas
                    </h4>
                    <p className='font-primary m-auto  w-[90%] pt-2 text-center text-sm text-[#303030] lg:w-full lg:pt-4 lg:text-left'>
                      Vamos juntos planejar as melhores decisões para sua
                      empresa.
                    </p>
                  </div>
                </div>
              </li>

              <li className='flex max-w-sm flex-col items-start gap-5'>
                <div className='pl-16'>
                  {' '}
                  <img
                    src='/images/contador-illustration-3.png'
                    alt=''
                    className='hidden flex-grow-0 lg:block'
                  />
                </div>

                <div className='flex flex-1 flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-5'>
                  <div className=''>
                    <img src='/icons/square-3-blue.svg' alt='' />
                  </div>
                  <div className='w-full lg:w-2/3'>
                    <h4 className='font-primary text-center text-base  font-semibold text-[#40494C] lg:text-left'>
                      Fazemos tudo para você
                    </h4>
                    <p className=' font-primary m-auto w-[90%] pt-2  text-center text-sm text-[#303030] lg:w-full lg:pt-4 lg:text-left'>
                      Envie suas informações e documentos, e nossa equipe
                      cuidará de todo o processo para você.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className='flex h-[400px] w-full items-center justify-center px-6'>
        <div className='relative h-[210px] w-full lg:h-[220px]   '>
          <div className='relative z-50 flex h-full flex-wrap items-center justify-center gap-5 rounded-[38.64px] bg-[#2398BF]/[.08] px-7 py-9 lg:flex-nowrap lg:justify-between lg:gap-0 lg:rounded-[80px] lg:px-24 lg:py-8'>
            <h2 className=' font-primary z-[60] w-full text-left text-lg font-normal text-[#00232F] lg:w-[60%] lg:text-4xl'>
              Além das{' '}
              <span className='font-primary font-bold'>tarefas contábeis</span>{' '}
              tradicionais, oferecemos serviços de{' '}
              <span className='font-primary font-bold'>análise financeira</span>{' '}
              para ajudar você a tomar{' '}
              <span className='font-primary font-bold'>
                decisões estratégicas.
              </span>{' '}
            </h2>
            <button className='font-primary z-40 rounded-[15px] bg-[#FFFCF2] px-6 py-4 text-base font-medium text-[#493602] lg:text-xl'>
              Conheça nossos planos
            </button>
          </div>
          <div className='absolute top-0 h-[240px] w-full rounded-[38.64px] bg-[#1E8AAE]/[.30] lg:bottom-[-40px] lg:h-[260px] lg:rounded-[80px]'></div>
          <div className='absolute top-0 h-[260px] w-full rounded-[38.64px] bg-[#1D81A2]/[.20] lg:bottom-[-80px] lg:h-[300px] lg:rounded-[80px]'></div>
        </div>
      </section>

      <SolutionsSection color='#1D81A2' />
      <FAQ />
      <BlogSection />
      <CustomFooter />
    </main>
  );
}
