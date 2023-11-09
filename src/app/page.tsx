/* eslint-disable @next/next/no-img-element */
'use client';

import { Button, Card, Carousel, CustomFlowbiteTheme } from 'flowbite-react';
import Head from 'next/head';
import * as React from 'react';

import CustomFooter from '@/components/Footer/CustomFooter';
import NavBar from '@/components/navbar/Navbar';

// const nibo = './images/nibo.webp';

const customTheme: CustomFlowbiteTheme['carousel'] = {
  root: {
    base: 'relative h-full w-full',
    leftControl:
      'absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none',
    rightControl:
      'absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none',
  },
  indicators: {
    active: {
      off: 'bg-slate-400 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800',
      on: 'bg-[#1C81A2] dark:bg-gray-800',
    },
    base: 'h-3 w-3 rounded-full',
    wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
  },
  item: {
    base: 'absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2',
    wrapper: 'w-full flex-shrink-0 transform cursor-grab snap-center',
  },
  control: {
    base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
    icon: 'h-5 w-5 text-black dark:text-gray-800 sm:h-6 sm:w-6',
  },
  scrollContainer: {
    base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg gap-4 ',
    snap: 'snap-x',
  },
};

const customCard: CustomFlowbiteTheme['card'] = {
  root: {
    base: 'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
    children: 'flex h-full min-h-[250px] flex-col justify-between gap-4 p-6',
    horizontal: {
      off: 'flex-col',
      on: 'flex-col md:max-w-xl md:flex-row',
    },
    href: 'hover:bg-gray-100 dark:hover:bg-gray-700',
  },
  img: {
    base: '',
    horizontal: {
      off: 'rounded-t-lg',
      on: 'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg',
    },
  },
};

export default function HomePage() {
  React.useEffect(() => {
    if (window && window.document) {
      const options = {
        root: document.querySelector('#scroll-area'),
        rootMargin: '200px',
        threshold: 1.0,
      };

      const callback = () => {
        // console.log('to na tela!');
      };

      const observer = new IntersectionObserver(callback, options);
      const openCompany = document.querySelector('#contabilidade-1');
      if (openCompany) {
        observer.observe(openCompany);
      }
    }
  }, []);

  const [isIntersecting, setIsIntersecting] = React.useState(false);

  const ref = React.useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    if (ref.current) {
      // console.log(isIntersecting);
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isIntersecting]);

  const moveTo = () => {
    if (window && window.document) {
      const openCompany = document.querySelector('#scroll-area');
      openCompany?.scrollTo(1000, 0);
    }
  };

  const moveBack = () => {
    if (window && window.document) {
      const openCompany = document.querySelector('#scroll-area');
      openCompany?.scrollTo(0, 0);
    }
  };

  return (
    <main className='m-0 flex flex-col '>
      <Head>
        <title>MCD Contabilidade Consultiva</title>
      </Head>

      {/*/////////////// hero section ///////////////////*/}

      <section className='relative flex h-[80vh] rounded-b-[30px] lg:h-[80vh] lg:rounded-b-[80px] lg:bg-[#F2F2F2] lg:px-8'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/images/bg-hero-desktop-new.png'
          alt=''
          className='absolute left-0 hidden h-full w-full rounded-b-[80px] object-cover lg:block'
        />
        <img
          src='/images/bg-hero-mobile.png'
          alt=''
          className='block w-full lg:hidden'
        />
        <NavBar />
        <div className='absolute top-[20px] z-[80] flex h-full flex-col justify-center gap-4 px-6 pt-14 lg:left-16 lg:items-start lg:gap-9 lg:pl-5 xl:max-w-7xl'>
          <h1 className='font-primary leading- w-full text-3xl font-semibold text-[#40494C] lg:w-[60%] lg:text-left lg:text-5xl lg:text-white'>
            <span className='text-[#1D81A2]'>Contabilidade digital</span> e{' '}
            <br className='hidden lg:block' />
            <span className='text-[#1D81A2]'> assessoria empresarial</span> para
            sua empresa crescer de verdade
          </h1>
          <h3 className='font-primary lg:font w-full pt-2 text-left text-base font-normal leading-snug text-[#40494C] lg:max-w-[50%] lg:text-left lg:text-2xl lg:text-white'>
            Cuidamos da sua empresa para você se concentrar no que mais importa:{' '}
            <br className='block lg:hidden' />
            <span className='font-bold text-[#1D81A2]'>seu negócio</span>
          </h3>
          <Button
            color='light'
            href='/#action'
            className='font-primary m-auto my-0 mt-4 w-[90%] max-w-[350px] whitespace-nowrap text-base font-medium lg:m-0 lg:mt-0 lg:w-full lg:text-xl'
          >
            Saiba como podemos te ajudar
          </Button>
        </div>
      </section>

      {/*/////////////// Seção dos serviços ///////////////////*/}

      <section className='m-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-20 lg:gap-32'>
        <div className='flex flex-col gap-6 lg:gap-8'>
          {' '}
          <h2 className='font-primary text-center text-3xl font-normal text-[#40494C] lg:text-left lg:text-5xl'>
            Simplificamos o dia a dia da sua empresa
          </h2>
          <h3 className='font-primary text-center text-lg font-normal text-[#647073] lg:text-left lg:text-3xl'>
            Otimizamos as suas rotinas contábeis e fiscais com uma equipe
            especialista.
          </h3>
        </div>
        <ul className='grid grid-cols-1 flex-wrap gap-6 lg:grid-cols-2 lg:gap-10'>
          <li className='flex items-center gap-[30px]'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='icons/management.svg'
              className='flex-0 hidden lg:block'
              alt=''
            />
            <img
              src='icons/management-2.svg'
              className='flex-0 block lg:hidden'
              alt=''
            />

            <p className='font-primary w-full text-base font-normal text-[#647073] lg:max-w-sm lg:text-2xl'>
              Cuidamos da sua contabilidade com{' '}
              <span className='font-semibold'>segurança e agilidade</span>
            </p>
          </li>
          <li className='flex items-center gap-[30px]'>
            {/* eslint-disable-next-line @next/next/no-img-element */}

            <img
              src='/icons/data-report.svg'
              alt=''
              className='hidden lg:block'
            />
            <img
              src='icons/data-report-2.svg'
              className='flex-0 block lg:hidden'
              alt=''
            />
            <p className='font-primary w-full whitespace-normal text-base font-normal text-[#647073] lg:max-w-sm lg:text-2xl'>
              Receba um{' '}
              <span className='w-full font-semibold'>
                plano de negócio estratégico{' '}
              </span>{' '}
              e personalizado{' '}
            </p>
          </li>

          <li className='flex items-center gap-[30px]'>
            {/* eslint-disable-next-line @next/next/no-img-element */}

            <img
              src='/icons/risk-management.svg'
              alt=''
              className='hidden lg:block'
            />
            <img
              src='icons/risk-management-2.svg'
              className='flex-0 block lg:hidden'
              alt=''
            />
            <p className='font-primary max-w-sm text-base font-normal text-[#647073] lg:text-2xl'>
              <span className='font-semibold'>Lembretes automatizados</span>{' '}
              para suas contas, impostos e rotinas{' '}
            </p>
          </li>
          <li className='flex items-center gap-[30px]'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/icons/focus.svg' alt='' className='hidden lg:block' />
            <img
              src='icons/focus-2.svg'
              className='flex-0 block lg:hidden'
              alt=''
            />
            <p className='font-primary max-w-sm text-base font-normal text-[#647073] lg:text-2xl'>
              Acompanhe e gerencie suas finanças com{' '}
              <span className='font-semibold'> menos burocracias</span>
            </p>
          </li>

          <li className='flex items-center gap-[30px]'>
            {/* eslint-disable-next-line @next/next/no-img-element */}

            <img
              src='/icons/team-management.svg'
              alt=''
              className='hidden lg:block'
            />
            <img
              src='icons/team-management-2.svg'
              className='flex-0 block lg:hidden'
              alt=''
            />
            <p className='font-primary max-w-sm text-base font-normal text-[#647073] lg:text-2xl'>
              <span className='font-semibold'>Treinamento personalizado </span>{' '}
              para atender a sua equipe{' '}
            </p>
          </li>
        </ul>
      </section>

      {/*/////////////// call to action section  ///////////////////*/}

      <section
        id='action'
        className='m-auto flex w-full max-w-7xl flex-col px-6 pt-[100px] lg:gap-10'
      >
        <div className='flex items-center justify-center gap-14 scroll-smooth lg:gap-24'>
          <h2 className='pointer  text-[#757575] lg:text-base'>
            <a
              onClick={() => moveBack()}
              className={`${
                !isIntersecting ? null : 'font-normal text-[#40494C]'
              } hidden text-xs font-medium lg:block`}
            >
              {' '}
              Quero abrir minha empresa
            </a>
            <a
              onClick={() => moveBack()}
              className={`${
                !isIntersecting ? null : 'font-normal text-[#40494C]'
              } block text-xs font-medium  lg:hidden`}
            >
              {' '}
              Abrir empresa
            </a>
            <span
              className={`mt-2 h-1 ${
                isIntersecting ? 'block w-0' : 'block w-full'
              } bg-[#F7C027] transition-all`}
            ></span>
          </h2>
          <h2 className='pointer text-[#757575] lg:text-base'>
            <a
              onClick={() => moveTo()}
              className={`${
                isIntersecting ? 'font-medium text-[#40494C]' : null
              } hidden text-xs font-normal lg:block`}
            >
              {' '}
              Quero trocar de contador
            </a>
            <a
              onClick={() => moveTo()}
              className={`${
                isIntersecting ? 'font-medium text-[#40494C]' : null
              } block text-xs font-normal lg:hidden`}
            >
              {' '}
              Trocar de contador
            </a>
            <span
              className={`mt-2 h-1 ${
                !isIntersecting ? 'block w-0' : 'block w-full'
              } bg-[#1D81A2] transition-all`}
            ></span>
          </h2>
        </div>

        {/* slider */}

        <div
          id='scroll-area'
          className='flex snap-x snap-mandatory gap-32 overflow-x-auto overflow-y-hidden scroll-smooth'
        >
          <div
            className={`flex-0 mt-11 w-full flex-shrink-0 snap-center  lg:mt-0 `}
            id='abrir-empresa'
          >
            <h2 className='font-primary  text-center text-3xl font-normal  text-[#F7C027] lg:text-4xl'>
              {' '}
              Abrir sua empresa{' '}
              <span className='text-[#40494C]'>
                {' '}
                é fácil, rápido e de graça!{' '}
              </span>
            </h2>
            <h3 className='font-primary pt-5 text-center text-lg font-normal text-[#647073] lg:text-xl'>
              {' '}
              Planejamento empresarial personalizado para você com zero
              burocracia.{' '}
            </h3>
            <div className='mt-11 flex flex-col items-center gap-10'>
              <ol className='flex flex-col items-center gap-10 lg:flex-row lg:gap-12'>
                <li className='flex max-w-xs flex-col items-center gap-2 lg:gap-5'>
                  <img
                    src='/images/empresa-illustration-1.png'
                    alt=''
                    className='hidden lg:block'
                  />
                  <div className='flex flex-col items-center gap-4 lg:flex-row lg:items-start'>
                    <div className='flex-grow-0'>
                      <img src='/icons/square-1.svg' alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary text-center text-base font-semibold text-[#40494C] lg:text-left'>
                        Faça seu cadastro
                      </h4>
                      <p className='font-primary m-auto w-[90%] pt-2 text-center text-sm text-[#303030] lg:w-full lg:pt-4 lg:text-left'>
                        Em menos de 2 minutos você terá se cadastrado para
                        iniciar o processo.
                      </p>
                    </div>
                  </div>
                </li>

                <li className='flex max-w-sm flex-col items-start gap-2 lg:gap-5'>
                  <img
                    src='/images/empresa-illustration-2.png'
                    alt=''
                    className='hidden lg:block'
                  />
                  <div className='flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-5'>
                    <div className='flex-grow-0'>
                      <img src='/icons/square-2.svg' alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary whitespace-nowrap text-center text-base font-semibold text-[#40494C] lg:text-left'>
                        Fale com nossos especialistas
                      </h4>
                      <p className='font-primary m-auto w-[90%] pt-2 text-center text-sm text-[#303030] lg:w-full lg:pt-4 lg:text-left'>
                        Vamos juntos planejar as melhores decisões para sua
                        empresa.
                      </p>
                    </div>
                  </div>
                </li>

                <li className='flex max-w-sm flex-col items-start gap-2 lg:gap-5'>
                  <div className='pl-16'>
                    {' '}
                    <img
                      src='/images/empresa-illustration-3.png'
                      alt=''
                      className='hidden flex-grow-0 lg:block '
                    />
                  </div>

                  <div className='flex flex-1 flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-5'>
                    <div className=''>
                      <img src='/icons/square-3.svg' alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary text-center text-base font-semibold text-[#40494C] lg:text-left'>
                        Fazemos tudo para você
                      </h4>
                      <p className=' font-primary m-auto w-[80%] pt-2 text-center text-sm text-[#303030] lg:w-full lg:pt-4 lg:text-left'>
                        Envie suas informações e documentos, e nossa equipe
                        cuidará de todo o processo para você.
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
              <button className='w-full max-w-sm rounded-2xl bg-[#1D81A2] px-6 py-4 text-xl font-medium text-white'>
                Abrir empresa
              </button>
            </div>
          </div>

          <div
            className={`flex-0 mt-8 w-full flex-shrink-0 snap-center `}
            ref={ref}
          >
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
                        Em menos de 2 minutos você terá se cadastrado para
                        iniciar o processo.
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
              <button className='w-full max-w-sm rounded-2xl bg-[#1D81A2] px-6 py-4 text-xl font-medium text-white'>
                Trocar de contador
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='font-primary relative mt-28 h-full rounded-l-[80px] rounded-r-[80px] bg-[#FFFFFF]'>
        <img
          src='/svg/patterns_MCD-02.svg'
          alt=''
          className='absolute bottom-0 right-0'
        />
        <div className='m-auto my-28 w-full max-w-7xl px-6 lg:px-0'>
          <h2 className='font-primary text-3xl  font-medium text-[#40494C]  lg:text-4xl'>
            Há mais de 10 anos ajudando empresários
          </h2>
          <h3 className='font-primary pt-3 text-lg font-normal text-[#647073] lg:text-xl'>
            Somos um escritório de contabilidade digital especializado em
            assessoria empresarial completa <br />a empresários e
            empreendedores.{' '}
          </h3>

          <ul className='flex flex-col gap-14 py-10'>
            <li className='flex flex-col gap-2 '>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src='/svg/customer-rev.svg' alt='' className=' ' />
              </div>
              <h3 className=' text-lg font-medium text-[#40494C] lg:text-xl'>
                Time especialista para te atender
              </h3>
              <p className=' max-w-xl text-base text-[#647073] lg:text-base '>
                A MCD está comprometida a acompanhar a jornada do seu negócio e
                garantir o seu sucesso.
              </p>
            </li>
            <li className='flex flex-col gap-2'>
              <div>
                <img src='/svg/cooperation.svg' alt='' />
              </div>
              <h3 className='text-lg font-medium text-[#40494C] lg:text-xl'>
                Um caminho de sucesso
              </h3>
              <p className='max-w-xl text-base text-[#647073] lg:text-base'>
                Nossos clientes são nossos parceiros. Juntos elaboramos um
                projeto único pra você economizar seu dinheiro e chegar mais
                longe.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className='h-full bg-[#BBD9E3] py-10 lg:h-[560px]'>
        <div className='relative m-auto flex h-full w-full max-w-7xl flex-col gap-5 px-6 lg:block lg:px-0'>
          {/* <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'> */}
          {/* <div className='flex '> */}
          <div className='flex h-full flex-col justify-center gap-4 '>
            <h2 className='font-primary text-left text-3xl font-normal text-[#40494C] lg:w-3/4 lg:text-5xl'>
              {' '}
              Solicite uma proposta{' '}
            </h2>
            <h4 className='text-xl font-semibold text-white lg:text-3xl'>
              É rápido e prático!
            </h4>
            <h3 className='font-primary pt-0 text-lg font-normal text-[#647073] lg:w-1/3 lg:pt-3 lg:text-xl'>
              {' '}
              Fale com a gente e saiba como podemos te ajudar com a sua empresa
            </h3>
          </div>
          <div className='right-[5%] top-[20%] flex w-full max-w-lg flex-col justify-center gap-4 rounded-[30px] bg-white px-8 py-8 lg:absolute'>
            <div>
              <h2 className='text-base font-normal text-black lg:text-2xl'>
                Entre em contato conosco
              </h2>
              <h3 className='pt-4 text-sm font-normal lg:text-lg'>
                Preencha com suas informações abaixo
              </h3>
            </div>
            <div className='relative'>
              <input
                type='text'
                id='nome'
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

            <div>
              <button className='w-full rounded-2xl bg-[#1D81A2] px-6 py-4 text-xl font-medium text-white'>
                Entrar em contato
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>

      <section>
        <div className='m-auto my-28 w-full max-w-7xl px-6 lg:px-0'>
          <div>
            <h2 className='font-primary text-3xl  font-medium text-[#40494C]  lg:text-4xl'>
              Conheça nosso blog
            </h2>
            <h3 className='font-primary pt-3 text-lg font-normal text-[#647073] lg:text-xl'>
              Aqui você encontra conteúdo útil e prático para você aplicar no
              dia a dia da sua empresa.{' '}
            </h3>
          </div>

          <div className='mt-10 hidden w-full items-center justify-center gap-16 lg:flex'>
            {' '}
            <Card
              theme={customCard}
              className='max-w-[320px] rounded-3xl'
              imgSrc='/images/blog-foto-1.svg'

              // renderImage={() => (
              //   <Image width={330} height={270} src={blog1.src} alt='image 1' />
              // )}
            >
              <h5 className='text-2xl font-normal tracking-tight text-[#40494C] dark:text-white'>
                Confira aqui algumas estratégias que vão te ajudar a gerir
                melhor o seu negócio.
              </h5>
              <div>
                <a
                  href='#'
                  className='flex items-center justify-between text-[#1C81A2]'
                >
                  {' '}
                  Saiba mais <img src='/icons/arrow-right.svg' alt='' />
                </a>{' '}
              </div>
            </Card>
            <Card
              theme={customCard}
              className=' max-w-[320px] rounded-3xl'
              imgSrc='/images/blog-foto-2.svg'

              // renderImage={() => (
              //   <Image width={330} height={270} src={blog2.src} alt='image 1' />
              // )}
            >
              <h5 className='text-2xl font-normal tracking-tight text-[#40494C] dark:text-white'>
                Quero abrir uma empresa. O que fazer?
              </h5>
              <div>
                <a
                  href='#'
                  className='flex items-center justify-between text-[#1C81A2]'
                >
                  {' '}
                  Saiba mais <img src='/icons/arrow-right.svg' alt='' />
                </a>{' '}
              </div>
            </Card>
            <Card
              theme={customCard}
              className='rounded-3xls max-w-[320px] '
              imgSrc='/images/blog-foto-3.svg'

              // renderImage={() => (
              //   <Image width={330} height={270} src={blog3.src} alt='image 1' />
              // )}
            >
              <h5 className='text-2xl font-normal tracking-tight text-[#40494C] dark:text-white'>
                Saúde financeira: como fazer minha empresa crescer? Confira aqui
                5 dicas.
              </h5>
              <div>
                <a
                  href='#'
                  className='flex items-center justify-between text-[#1C81A2]'
                >
                  {' '}
                  Saiba mais <img src='/icons/arrow-right.svg' alt='' />
                </a>{' '}
              </div>
            </Card>
          </div>

          <div className='h-[600px] w-full lg:hidden'>
            <Carousel theme={customTheme}>
              <Card
                theme={customCard}
                className='max-w-[320px] rounded-3xl'
                imgSrc='/images/blog-foto-1.svg'
                // renderImage={() => (
                //   <Image
                //     width={330}
                //     height={270}
                //     src={blog1.src}
                //     alt='image 1'
                //   />
                // )}
              >
                <h5 className='text-2xl font-normal tracking-tight text-[#40494C] dark:text-white'>
                  Confira aqui algumas estratégias que vão te ajudar a gerir
                  melhor o seu negócio.
                </h5>
                <div>
                  <a
                    href='#'
                    className='flex items-center justify-between text-[#1C81A2]'
                  >
                    {' '}
                    Saiba mais <img src='/icons/arrow-right.svg' alt='' />
                  </a>{' '}
                </div>
              </Card>
              <Card
                theme={customCard}
                className=' max-w-[320px] rounded-3xl'
                imgSrc='/images/blog-foto-2.svg'
                // renderImage={() => (
                //   <Image
                //     width={330}
                //     height={270}
                //     src={blog2.src}
                //     alt='image 1'
                //   />
                // )}
              >
                <h5 className='text-2xl font-normal tracking-tight text-[#40494C] dark:text-white'>
                  Quero abrir uma empresa. O que fazer?
                </h5>
                <div>
                  <a
                    href='#'
                    className='flex items-center justify-between text-[#1C81A2]'
                  >
                    {' '}
                    Saiba mais <img src='/icons/arrow-right.svg' alt='' />
                  </a>{' '}
                </div>
              </Card>
              <Card
                theme={customCard}
                className='rounded-3xls max-w-[320px] '
                imgSrc='/images/blog-foto-3.svg'
                // renderImage={() => (
                //   <Image
                //     width={330}
                //     height={270}
                //     src={blog3.src}
                //     alt='image 1'
                //   />
                // )}
              >
                <h5 className='text-2xl font-normal tracking-tight text-[#40494C] dark:text-white'>
                  Saúde financeira: como fazer minha empresa crescer? Confira
                  aqui 5 dicas.
                </h5>
                <div>
                  <a
                    href='#'
                    className='flex items-center justify-between text-[#1C81A2]'
                  >
                    {' '}
                    Saiba mais <img src='/icons/arrow-right.svg' alt='' />
                  </a>{' '}
                </div>
              </Card>
            </Carousel>
          </div>
        </div>
      </section>

      <CustomFooter />
    </main>
  );
}
