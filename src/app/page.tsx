/* eslint-disable @next/next/no-img-element */
'use client';

import { Button, Card, Carousel, CustomFlowbiteTheme } from 'flowbite-react';
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';

import CustomFooter from '@/components/Footer/CustomFooter';
import NavBar from '@/components/navbar/Navbar';

import arrowRight from './../../public/icons/arrow-right.webp';
import cooperationicon from './../../public/icons/cooperation-1.webp';
import customericon from './../../public/icons/customer-review-1.webp';
import icon3 from './../../public/icons/data-report.png';
import icon2 from './../../public/icons/focus.png';
import icon1 from './../../public/icons/management.png';
import icon5 from './../../public/icons/risk-management.png';
import square1Yellow from './../../public/icons/square-1.png';
import square1 from './../../public/icons/square-1-blue.png';
import square2Yellow from './../../public/icons/square-2.png';
import square2 from './../../public/icons/square-2-blue.png';
import square3Yellow from './../../public/icons/square-3.png';
import square3 from './../../public/icons/square-3-blue.png';
import icon4 from './../../public/icons/team-management.png';
import fotoBg from './../../public/images/bg-hero-desktop3.png';
import blog1 from './../../public/images/blog-foto-1.webp';
import blog2 from './../../public/images/blog-foto-2.webp';
import blog3 from './../../public/images/blog-foto-3.webp';
import contaazul from './../../public/images/contaazul.webp';
import contador1 from './../../public/images/contador-illustration-1.png';
import contador2 from './../../public/images/contador-illustration-2.png';
import contador3 from './../../public/images/contador-illustration-3.png';
import empresa1 from './../../public/images/empresa-illustration-1.png';
import empresa2 from './../../public/images/empresa-illustration-2.png';
import empresa3 from './../../public/images/empresa-illustration-3.png';
import iob from './../../public/images/iob.webp';
import nibo from './../../public/images/nibo.webp';
import bgPattern from './../../public/images/patterns_MCD-01.webp';

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
  // const [isVisible, setIsVisible] = React.useState(false);

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

      <section className='relative flex h-[80vh] rounded-b-[30px] bg-[#1D81A2] lg:h-[80vh] lg:rounded-b-[80px] lg:bg-slate-400 lg:px-8'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={fotoBg.src}
          alt=''
          className='absolute left-0 hidden h-full w-full rounded-b-[80px] object-cover lg:block'
        />
        <NavBar />
        <div className='absolute top-0 z-[80] flex h-full flex-col justify-center gap-4 px-6 pt-14 lg:right-[50px] lg:items-end lg:gap-9 xl:top-[10%]'>
          <h1 className='font-primary leading- w-full text-3xl font-semibold text-white lg:w-[55%] lg:text-right lg:text-5xl'>
            <span className='text-[#F7C027]'>Contabilidade digital</span> e
            <span className='text-[#F7C027]'> assessoria empresarial</span> para
            sua empresa crescer de verdade
          </h1>
          <h3 className='font-primary lg:max-w-4/5 lg:font w-full text-left text-lg font-normal leading-snug text-white lg:max-w-[40%] lg:text-right lg:text-2xl'>
            Cuidamos da sua empresa para você se concentrar no que mais importa:{' '}
            <br />
            <span className='font-bold text-[#F7C027]'>seu negócio</span>
          </h3>
          <Button color='light' className='mt-4 w-full max-w-[200px] lg:mt-0'>
            Saiba mais
          </Button>
        </div>
      </section>

      {/*/////////////// Seção dos serviços ///////////////////*/}

      <section className='m-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-20 lg:gap-32'>
        <div className='flex flex-col gap-6 lg:gap-8'>
          {' '}
          <h2 className='font-primary text-3xl font-normal text-[#40494C] lg:text-5xl'>
            Simplificamos o dia a dia da sua empresa
          </h2>
          <h3 className='font-primary text-lg font-normal text-[#647073] lg:text-3xl'>
            Otimizamos as suas rotinas contábeis e fiscais com uma equipe
            especialista.
          </h3>
        </div>
        <ul className='grid grid-cols-1 flex-wrap gap-6 lg:grid-cols-2 lg:gap-10'>
          <li className='flex items-center gap-[30px]'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={icon1.src} className='flex-0' alt='' />
            <p className='font-primary max-w-sm text-base font-normal text-[#647073] lg:text-2xl'>
              Cuidamos da sua contabilidade com segurança e agilidade
            </p>
          </li>

          <li className='flex items-center gap-[30px]'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={icon2.src} alt='' />
            <p className='font-primary max-w-sm text-base font-normal text-[#647073] lg:text-2xl'>
              Acompanhe e gerencie suas finanças em tempo real
            </p>
          </li>

          <li className='flex items-center gap-[30px]'>
            {/* eslint-disable-next-line @next/next/no-img-element */}

            <img src={icon3.src} alt='' />
            <p className='font-primary max-w-sm text-base font-normal text-[#647073] lg:text-2xl'>
              Receba um plano de negócio estratégico e personalizado{' '}
            </p>
          </li>
          <li className='flex items-center gap-[30px]'>
            {/* eslint-disable-next-line @next/next/no-img-element */}

            <img src={icon4.src} alt='' />
            <p className='font-primary max-w-sm text-base font-normal text-[#647073] lg:text-2xl'>
              Treinamento personalizado para atender a sua equipe{' '}
            </p>
          </li>
          <li className='flex items-center gap-[30px]'>
            {/* eslint-disable-next-line @next/next/no-img-element */}

            <img src={icon5.src} alt='' />
            <p className='font-primary max-w-sm text-base font-normal text-[#647073] lg:text-2xl'>
              Lembretes automatizados para suas contas, impostos e rotinas{' '}
            </p>
          </li>
        </ul>
      </section>

      {/*/////////////// call to action section  ///////////////////*/}

      <section className='m-auto mt-[100px] flex w-full max-w-7xl flex-col px-6 lg:gap-10'>
        <div className='flex items-center justify-center gap-14 scroll-smooth lg:gap-24'>
          <h2 className='pointer text-base font-semibold text-[#757575]'>
            <a
              // href='#!abrir-empresa'
              // onClick={() => setIsVisible(false)}
              onClick={() => moveBack()}
              className={`${isIntersecting ? null : 'text-[#40494C]'}`}
            >
              {' '}
              Quero abrir minha empresa
            </a>
            <span
              className={`mt-2 h-1 ${
                isIntersecting ? 'block w-0' : 'block w-full'
              } bg-[#F7C027] transition-all`}
            ></span>
          </h2>
          <h2 className='pointer text-base font-semibold text-[#757575]'>
            <a
              // href='#contabilidade-1'
              // onClick={() => setIsVisible(true)}
              onClick={() => moveTo()}
              className={`${isIntersecting ? 'text-[#40494C]' : null}`}
            >
              {' '}
              Quero trocar de contador
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
            className={`flex-0 mt-8 w-full flex-shrink-0  snap-center `}
            id='abrir-empresa'
          >
            <h2 className='font-primary  text-center text-2xl font-normal  text-[#F7C027] lg:text-3xl'>
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
            <div className='mt-8 flex flex-col items-center gap-10'>
              <ol className='flex flex-col items-center gap-10 lg:flex-row lg:gap-12'>
                <li className='flex max-w-xs flex-col items-center gap-2 lg:gap-5'>
                  <img src={empresa1.src} alt='' className='hidden lg:block' />
                  <div className='flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-5'>
                    <div className='flex-grow-0'>
                      <img src={square1Yellow.src} alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary text-center text-lg font-semibold lg:text-left'>
                        Faça seu cadastro
                      </h4>
                      <p className=' font-primary pt-2 text-center text-base text-[#303030] lg:pt-4 lg:text-left'>
                        Em menos de 2 minutos você terá se cadastrado para
                        iniciar o processo.
                      </p>
                    </div>
                  </div>
                </li>

                <li className='flex max-w-sm flex-col items-start gap-2 lg:gap-5'>
                  <img src={empresa2.src} alt='' className='hidden lg:block' />
                  <div className='flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-5'>
                    <div className='flex-grow-0'>
                      <img src={square2Yellow.src} alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary whitespace-nowrap text-center text-lg font-semibold lg:text-left'>
                        Fale com nossos especialistas
                      </h4>
                      <p className='font-primary pt-2 text-center text-base text-[#303030] lg:pt-4 lg:text-left'>
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
                      src={empresa3.src}
                      alt=''
                      className='hidden flex-grow-0 lg:block '
                    />
                  </div>

                  <div className='flex flex-1 flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-5'>
                    <div className=''>
                      <img src={square3Yellow.src} alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary text-center text-lg font-semibold lg:text-left'>
                        Fazemos tudo para você
                      </h4>
                      <p className=' font-primary pt-2 text-center text-base text-[#303030] lg:pt-4 lg:text-left'>
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
            <h2 className='font-primary  text-center text-2xl font-normal  text-[#1D81A2] lg:text-3xl'>
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
            <div className='mt-8 flex flex-col items-center gap-10'>
              <ol className=' flex flex-col items-center gap-10 lg:flex-row lg:gap-12'>
                <li className='flex max-w-xs flex-col items-center gap-5'>
                  <img src={contador1.src} alt='' className='hidden lg:block' />
                  <div className='flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-5'>
                    <div className='flex-grow-0'>
                      <img src={square1.src} alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary text-center text-lg font-semibold lg:text-left'>
                        Faça seu cadastro
                      </h4>
                      <p className=' font-primary pt-2 text-center text-base text-[#303030] lg:pt-4 lg:text-left'>
                        Em menos de 2 minutos você terá se cadastrado para
                        iniciar o processo.
                      </p>
                    </div>
                  </div>
                </li>

                <li className='flex max-w-sm flex-col items-start gap-5'>
                  <img src={contador2.src} alt='' className='hidden lg:block' />
                  <div className='flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-5'>
                    <div className='flex-grow-0'>
                      <img src={square2.src} alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary whitespace-nowrap text-center text-lg font-semibold lg:text-left'>
                        Fale com nossos especialistas
                      </h4>
                      <p className='font-primary pt-2 text-center text-base text-[#303030] lg:pt-4 lg:text-left'>
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
                      src={contador3.src}
                      alt=''
                      className='hidden flex-grow-0 lg:block'
                    />
                  </div>

                  <div className='flex flex-1 flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-5'>
                    <div className=''>
                      <img src={square3.src} alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary text-center text-lg font-semibold lg:text-left'>
                        Fazemos tudo para você
                      </h4>
                      <p className=' font-primary pt-2 text-center text-base text-[#303030] lg:pt-4 lg:text-left'>
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

      <section className='font-primary relative mt-28 h-full rounded-l-[80px] rounded-r-[80px] bg-[#F2F2F2]'>
        <img src={bgPattern.src} alt='' className='absolute bottom-0 right-0' />
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
                <img src={customericon.src} alt='' className=' ' />
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
                <img src={cooperationicon.src} alt='' />
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

      <section>
        <div className='m-auto my-28 w-full max-w-7xl px-6 lg:px-0'>
          <h2 className='font-primary text-center text-3xl  font-medium text-[#40494C]  lg:text-4xl'>
            Automatize sua contabilidade com a MCD
          </h2>
          <h3 className='font-primary pt-3 text-center text-lg font-normal text-[#647073] lg:text-xl'>
            Para garantir mais segurança e praticidade para o seu negócio, a MCD
            faz integração com tecnologia de ponta.
          </h3>
          <div className='mt-10 flex w-full flex-wrap items-center justify-center gap-10 lg:mt-20 lg:flex-nowrap lg:gap-20'>
            <div className='w-2/4 lg:w-auto'>
              {' '}
              <img src={nibo.src} alt='' />
            </div>
            <div className='w-2/4 lg:w-auto '>
              {' '}
              <img src={iob.src} alt='' />
            </div>
            <div className='w-2/4 lg:w-auto'>
              <img src={contaazul.src} alt='' />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#F2F2F2]'>
        <div className='m-auto my-28 w-full max-w-7xl px-6 lg:px-0'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
            <div className='col-span-2 flex flex-col justify-start gap-4 lg:pl-16 '>
              <h2 className='font-primary text-left text-3xl font-medium text-[#40494C] lg:w-3/4 lg:text-5xl'>
                {' '}
                Faça um orçamento com a gente{' '}
              </h2>
              <h3 className='font-primary pt-3 text-lg font-normal text-[#647073] lg:w-2/4 lg:text-xl'>
                {' '}
                Fale com um dos nossos especialistas e simplifique a vida da sua
                empresa
              </h3>
            </div>
            <div className=' flex flex-col justify-center gap-4'>
              <div className='relative'>
                <input
                  type='text'
                  id='nome'
                  className='border-1 peer block w-full max-w-sm appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                />
                <label
                  htmlFor='nome'
                  className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500'
                >
                  Nome
                </label>
              </div>
              <div className='relative'>
                <input
                  type='text'
                  id='telefone'
                  className='border-1 peer block w-full max-w-sm appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                />
                <label
                  htmlFor='telefone'
                  className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500'
                >
                  Telefone
                </label>
              </div>
              <div className='relative'>
                <input
                  type='text'
                  id='email'
                  className='border-1 peer block w-full max-w-sm appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                  placeholder=' '
                />
                <label
                  htmlFor='email'
                  className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500'
                >
                  E-mail
                </label>
              </div>
              <div>
                <button className='w-full max-w-sm rounded-2xl bg-[#1D81A2] px-6 py-4 text-xl font-medium text-white'>
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>
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
              renderImage={() => (
                <Image width={330} height={270} src={blog1.src} alt='image 1' />
              )}
            >
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Confira aqui algumas estratégias que vão te ajudar a gerir
                melhor o seu negócio.
              </h5>
              <div>
                <a
                  href='#'
                  className='flex items-center justify-between text-[#1C81A2]'
                >
                  {' '}
                  Saiba mais <img src={arrowRight.src} alt='' />
                </a>{' '}
              </div>
            </Card>
            <Card
              theme={customCard}
              className=' max-w-[320px] rounded-3xl'
              renderImage={() => (
                <Image width={330} height={270} src={blog2.src} alt='image 1' />
              )}
            >
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Quero abrir uma empresa. O que fazer?
              </h5>
              <div>
                <a
                  href='#'
                  className='flex items-center justify-between text-[#1C81A2]'
                >
                  {' '}
                  Saiba mais <img src={arrowRight.src} alt='' />
                </a>{' '}
              </div>
            </Card>
            <Card
              theme={customCard}
              className='rounded-3xls max-w-[320px] '
              renderImage={() => (
                <Image width={330} height={270} src={blog3.src} alt='image 1' />
              )}
            >
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Saúde financeira: como fazer minha empresa crescer? Confira aqui
                5 dicas.
              </h5>
              <div>
                <a
                  href='#'
                  className='flex items-center justify-between text-[#1C81A2]'
                >
                  {' '}
                  Saiba mais <img src={arrowRight.src} alt='' />
                </a>{' '}
              </div>
            </Card>
          </div>

          <div className='h-[600px] w-full lg:hidden'>
            <Carousel theme={customTheme}>
              <Card
                theme={customCard}
                className='max-w-[320px] rounded-3xl'
                renderImage={() => (
                  <Image
                    width={330}
                    height={270}
                    src={blog1.src}
                    alt='image 1'
                  />
                )}
              >
                <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Confira aqui algumas estratégias que vão te ajudar a gerir
                  melhor o seu negócio.
                </h5>
                <div>
                  <a
                    href='#'
                    className='flex items-center justify-between text-[#1C81A2]'
                  >
                    {' '}
                    Saiba mais <img src={arrowRight.src} alt='' />
                  </a>{' '}
                </div>
              </Card>
              <Card
                theme={customCard}
                className=' max-w-[320px] rounded-3xl'
                renderImage={() => (
                  <Image
                    width={330}
                    height={270}
                    src={blog2.src}
                    alt='image 1'
                  />
                )}
              >
                <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Quero abrir uma empresa. O que fazer?
                </h5>
                <div>
                  <a
                    href='#'
                    className='flex items-center justify-between text-[#1C81A2]'
                  >
                    {' '}
                    Saiba mais <img src={arrowRight.src} alt='' />
                  </a>{' '}
                </div>
              </Card>
              <Card
                theme={customCard}
                className='rounded-3xls max-w-[320px] '
                renderImage={() => (
                  <Image
                    width={330}
                    height={270}
                    src={blog3.src}
                    alt='image 1'
                  />
                )}
              >
                <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Saúde financeira: como fazer minha empresa crescer? Confira
                  aqui 5 dicas.
                </h5>
                <div>
                  <a
                    href='#'
                    className='flex items-center justify-between text-[#1C81A2]'
                  >
                    {' '}
                    Saiba mais <img src={arrowRight.src} alt='' />
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
