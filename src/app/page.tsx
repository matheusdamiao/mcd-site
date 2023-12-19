/* eslint-disable @next/next/no-img-element */
'use client';

import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';

import CustomFooter from '@/components/Footer/CustomFooter';
import NavBar from '@/components/navbar/Navbar';
import BlogSection from '@/components/sections/blogSection';
import ContactSection from '@/components/sections/contactSection';
import SolutionsSection from '@/components/sections/solutionsSections';

// const nibo = './images/nibo.webp';

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
    <main className='m-0 flex flex-col bg-[#F2F2F2] '>
      <Head>
        <title>MCD Contabilidade Consultiva</title>
      </Head>

      {/*/////////////// hero section ///////////////////*/}
      <NavBar />

      <section className='relative flex h-[650px] flex-col items-center justify-center lg:h-[900px] lg:bg-[#F2F2F2] lg:px-8'>
        <Image
          src='/images/bg-hero-home.webp'
          alt='Empresário usando o computador'
          className='absolute left-0 top-0 h-full w-full object-cover object-top'
          priority={true}
          fill={true}
          // placeholder='blur'
        />
        <div className='z-[80] flex h-full flex-col items-center justify-center gap-4 px-6 pt-14 lg:left-16 lg:gap-9 lg:pl-5 xl:max-w-7xl'>
          <h1 className='font-primary leading- w-full text-center text-3xl font-semibold text-white  lg:max-w-3xl lg:text-5xl'>
            Contabilidade digital para você gerir melhor o seu negócio
          </h1>
          <h3 className='font-primary lg:font t w-full pt-2  text-center text-base font-normal leading-snug text-[#FFFF] lg:max-w-[70%] lg:text-2xl'>
            Cuidamos da sua empresa para você se concentrar no que mais importa:{' '}
            <br className='block lg:hidden' />
            <span className='font-bold text-[#1D81A2]'>seu negócio</span>
          </h3>
          <a
            color='light'
            href='/#solucoes'
            className='font-primary my-0 mt-4 flex h-12 w-[100%] max-w-[350px] items-center justify-center whitespace-nowrap rounded-[15px] bg-white text-base font-medium  text-[#40494C] lg:m-0 lg:mt-0 lg:h-[70px] lg:w-full lg:text-[20px]'
          >
            Saiba como podemos te ajudar
          </a>
        </div>
      </section>

      {/*/////////////// Seção dos serviços ///////////////////*/}

      <section className='m-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-20 lg:gap-32'>
        <div className='flex flex-col gap-6 lg:gap-8'>
          {' '}
          <h2 className='font-primary text-center text-3xl font-normal text-[#40494C] lg:text-left lg:text-5xl'>
            Contabilidade descomplicada para a sua empresa
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

          {/* <li className='flex items-center gap-[30px]'> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}

          {/* <img
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
            </p> */}
          {/* </li> */}
        </ul>
      </section>

      {/*/////////////// call to action section  ///////////////////*/}

      <section
        id='action'
        className='m-auto flex w-full max-w-7xl flex-col px-6 py-20 pt-[100px] lg:gap-14'
      >
        <div className='flex items-center justify-center gap-14 scroll-smooth lg:gap-24'>
          <h2 className='pointer  w-full text-[#757575] lg:text-base'>
            <a
              onClick={() => moveBack()}
              className={`${
                !isIntersecting ? null : 'font-normal text-[#40494C]'
              } hidden cursor-pointer text-xl  font-medium lg:block lg:text-right `}
            >
              {' '}
              Quero abrir minha empresa
            </a>
            <a
              onClick={() => moveBack()}
              className={`${
                !isIntersecting ? null : 'font-normal text-[#40494C]'
              } block cursor-pointer whitespace-nowrap text-right text-base font-medium lg:hidden`}
            >
              {' '}
              Abrir empresa
            </a>
            <span
              className={`mt-2 h-[3px] ${
                isIntersecting ? 'block w-0' : 'block w-full'
              } bg-[#F7C027] transition-all`}
            ></span>
          </h2>
          <h2 className='pointer w-full text-[#757575] lg:text-base'>
            <a
              onClick={() => moveTo()}
              className={`${
                isIntersecting ? 'font-medium text-[#40494C]' : null
              } hidden cursor-pointer text-xl font-normal lg:block`}
            >
              {' '}
              Quero trocar de contador
            </a>
            <a
              onClick={() => moveTo()}
              className={`${
                isIntersecting ? 'font-medium text-[#40494C]' : null
              } block cursor-pointer whitespace-nowrap text-base font-normal lg:hidden`}
            >
              {' '}
              Trocar de contador
            </a>
            <span
              className={`mt-2 h-[3px] ${
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
              <a
                href='abrir-empresa'
                className='w-full max-w-sm rounded-2xl bg-[#F7C027] px-6 py-4 text-center text-xl font-medium text-[#493602]'
              >
                Abrir empresa
              </a>
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
                        Preencha nosso formulário para conhecermos melhor o
                        perfil da sua empresa.
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
                        Nossa equipe vai conversar com você e vamos fazer uma
                        revisão do atual cenário contábil e fiscal da sua
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
              <a
                href='contador'
                className=' w-full max-w-sm rounded-2xl bg-[#1D81A2] px-6 py-4 text-center text-xl font-medium text-white'
              >
                Trocar de contador
              </a>
            </div>
          </div>
        </div>
      </section>

      <SolutionsSection color='' />

      {/* ///////////////////  About Section /////////// */}
      <section className='font-primary relative mt-28 h-full rounded-l-[30px] rounded-r-[30px] bg-[#FFFFFF] lg:rounded-l-[80px] lg:rounded-r-[80px]'>
        <img
          src='/svg/patterns_MCD-02.svg'
          alt=''
          className='absolute bottom-0 right-0 h-44 lg:h-[500px] '
        />
        <div className='m-auto my-28 mt-16 w-full max-w-7xl px-6 lg:px-0'>
          <h2 className='font-primary text-center text-[29px] font-medium leading-10 text-[#40494C] lg:text-left  lg:text-4xl'>
            Há mais de 10 anos ajudando empresários
          </h2>
          <h3 className='font-primary pt-10 text-center text-lg font-normal text-[#647073] lg:text-left lg:text-xl'>
            Somos um escritório de contabilidade digital especializado em
            assessoria empresarial completa <br />a empresários e
            empreendedores.{' '}
          </h3>

          <ul className='flex flex-col gap-14 py-10 pt-20 lg:pt-20'>
            <li className='flex flex-col gap-2 '>
              <div className='flex items-center gap-4'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='/svg/customer-rev.svg'
                  alt=''
                  className=' flex-0 w-[40px] flex-shrink-0 flex-grow-0 lg:w-[80px]'
                />
                <h3 className=' text-lg font-medium text-[#40494C] lg:text-3xl'>
                  Time especialista para te atender
                </h3>
              </div>

              <p className=' max-w-2xl text-base text-[#647073] lg:text-xl '>
                A MCD está comprometida a acompanhar a jornada do seu negócio e
                garantir o seu sucesso.
              </p>
            </li>
            <li className='flex flex-col gap-2'>
              <div className='flex items-center gap-4'>
                <img
                  src='/svg/cooperation.svg'
                  alt=''
                  className=' flex-0 w-[40px] flex-shrink-0  flex-grow-0 lg:w-[80px] '
                />
                <h3 className='text-lg font-medium text-[#40494C] lg:text-3xl'>
                  Um caminho de sucesso
                </h3>
              </div>

              <p className='max-w-2xl text-base text-[#647073] lg:text-xl'>
                Nossos clientes são nossos parceiros. Juntos elaboramos um
                projeto único pra você economizar seu dinheiro e chegar mais
                longe.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* /////////////// Contact Section //////////////////// */}
      <ContactSection />

      {/* ///////////// Blog Section  //////////// */}

      <BlogSection />
      <CustomFooter />
    </main>
  );
}
