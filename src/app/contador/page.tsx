/* eslint-disable @next/next/no-img-element */
'use client';
import { UserStrapi } from 'index';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import FAQ from '@/components/FAQ/faq';
import CustomFooter from '@/components/Footer/CustomFooter';
import NavBar from '@/components/navbar/Navbar';
import BlogSection from '@/components/sections/blogSection';
import NewSolutionsSection from '@/components/sections/newSolutionsSection';

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

    ///check the password
    const isValidPassword = (password: string): boolean =>
      /^.{6,}$/.test(password);
    if (!isValidPassword(password)) {
      return toast.error('A senha precisa ter ao menos 6 digitos');
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

      toast.success('Empresa e usuário criados!', {
        autoClose: 1000,
      });
      toast.success('Efetuando seu login...');

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
      s
      <Head>
        <title>MCD Contabilidade Consultiva</title>
      </Head>
      <a
        className='font-primary fixed bottom-2 right-2 z-[888888888] flex w-[200px] items-center justify-center gap-2 rounded-3xl  bg-[#5ECC66] px-2 py-2 font-semibold text-white lg:bottom-10 lg:right-10 lg:w-[250px] lg:gap-4 lg:px-4 lg:py-3'
        href='https://api.whatsapp.com/send?phone=5521965806068'
        target='_blank'
      >
        {/* <Image src='icons/zap.svg' alt='' width={30} height={30} /> */}
        <svg
          width='25'
          height='25'
          viewBox='0 0 20 20'
          fill='white'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17 2.91006C16.0832 1.98399 14.9912 1.24973 13.7876 0.750111C12.5841 0.250494 11.2931 -0.00448012 9.99 5.95696e-05C4.53 5.95696e-05 0.0800002 4.45006 0.0800002 9.91006C0.0800002 11.6601 0.54 13.3601 1.4 14.8601L0 20.0001L5.25 18.6201C6.7 19.4101 8.33 19.8301 9.99 19.8301C15.45 19.8301 19.9 15.3801 19.9 9.92006C19.9 7.27006 18.87 4.78006 17 2.91006ZM9.99 18.1501C8.51 18.1501 7.06 17.7501 5.79 17.0001L5.49 16.8201L2.37 17.6401L3.2 14.6001L3 14.2901C2.17775 12.977 1.74114 11.4593 1.74 9.91006C1.74 5.37006 5.44 1.67006 9.98 1.67006C12.18 1.67006 14.25 2.53006 15.8 4.09006C16.5675 4.85402 17.1757 5.76272 17.5894 6.76348C18.0031 7.76425 18.214 8.83717 18.21 9.92006C18.23 14.4601 14.53 18.1501 9.99 18.1501ZM14.51 11.9901C14.26 11.8701 13.04 11.2701 12.82 11.1801C12.59 11.1001 12.43 11.0601 12.26 11.3001C12.09 11.5501 11.62 12.1101 11.48 12.2701C11.34 12.4401 11.19 12.4601 10.94 12.3301C10.69 12.2101 9.89 11.9401 8.95 11.1001C8.21 10.4401 7.72 9.63006 7.57 9.38006C7.43 9.13006 7.55 9.00006 7.68 8.87006C7.79 8.76006 7.93 8.58006 8.05 8.44006C8.17 8.30006 8.22 8.19006 8.3 8.03006C8.38 7.86006 8.34 7.72006 8.28 7.60006C8.22 7.48006 7.72 6.26006 7.52 5.76006C7.32 5.28006 7.11 5.34006 6.96 5.33006H6.48C6.31 5.33006 6.05 5.39006 5.82 5.64006C5.6 5.89006 4.96 6.49006 4.96 7.71006C4.96 8.93006 5.85 10.1101 5.97 10.2701C6.09 10.4401 7.72 12.9401 10.2 14.0101C10.79 14.2701 11.25 14.4201 11.61 14.5301C12.2 14.7201 12.74 14.6901 13.17 14.6301C13.65 14.5601 14.64 14.0301 14.84 13.4501C15.05 12.8701 15.05 12.3801 14.98 12.2701C14.91 12.1601 14.76 12.1101 14.51 11.9901Z'
            fill='#FFFFF'
          />
        </svg>
        ENTRE EM CONTATO
      </a>
      <NavBar />
      <section className='relative flex h-full w-full rounded-b-[30px] lg:h-full lg:rounded-b-[80px] lg:bg-[#F2F2F2]'>
        <Image
          src='/images/bg-hero-contador.webp'
          alt=''
          className='absolute left-0 top-[-50px] h-[450px] w-full object-cover lg:top-[-80px]  lg:block lg:h-full '
          width={1440}
          height={960.12}
          priority={true}
        />

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
                <span className='font-semibold'>você virar cliente MCD</span>
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
                  className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 lg:max-w-xs dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
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
                  className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 lg:max-w-xs dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                />
                <label
                  htmlFor='user'
                  className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900 dark:text-gray-400 '
                >
                  Usuário
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
                  className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 lg:max-w-xs dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
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
            <Link
              href='/solucoes'
              className='font-primary z-40 rounded-[15px] bg-[#FFFCF2] px-6 py-4 text-base font-medium text-[#493602] lg:text-xl'
            >
              Conheça nossas soluções
            </Link>
          </div>
          <div className='absolute top-0 h-[240px] w-full rounded-[38.64px] bg-[#1E8AAE]/[.30] lg:bottom-[-40px] lg:h-[260px] lg:rounded-[80px]'></div>
          <div className='absolute top-0 h-[260px] w-full rounded-[38.64px] bg-[#1D81A2]/[.20] lg:bottom-[-80px] lg:h-[300px] lg:rounded-[80px]'></div>
        </div>
      </section>
      <NewSolutionsSection />
      <FAQ />
      <BlogSection />
      <CustomFooter />
    </main>
  );
}
