'use client';
import Head from 'next/head';
import React from 'react';

import CustomFooter from '@/components/Footer/CustomFooter';
import NavBar from '@/components/navbar/Navbar';
import BlogSection from '@/components/sections/blogSection';
import ContactSection from '@/components/sections/contactSection';
import SolutionsSection from '@/components/sections/solutionsSections';

export default function SolutionsPage() {
  return (
    <main className='m-0 flex flex-col bg-[#F2F2F2] '>
      <Head>
        <title>MCD Contabilidade Consultiva</title>
      </Head>

      <section className='flex h-[400px] w-full rounded-b-[30px] lg:relative lg:h-[600px] lg:px-8'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/icons/investment-data-panal.svg'
          alt=''
          className='absolute bottom-0 z-40 hidden lg:bottom-8 lg:right-[5%] lg:block 2xl:right-[10%] '
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/images/bg-solutions.png'
          alt=''
          className='hididen absolute left-0 top-[-50px] block h-[450px] w-full lg:top-[-30px]  lg:block lg:h-full '
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/images/bg-hero-mobile.png'
          alt=''
          className='absolute left-0 top-[-50px] block h-[450px] w-full lg:top-[-30px]  lg:hidden lg:h-full '
        />
        <NavBar />
        <div className='z-[80] flex h-full max-w-7xl flex-col justify-center gap-4 px-6 lg:absolute lg:left-16 lg:top-[20px] lg:items-start lg:gap-8 lg:pl-5 lg:pt-0  xl:max-w-7xl'>
          {/* <h3 className='font-primary m-0 text-sm font-normal text-[#647073] lg:text-2xl'>
            Contabilidade pensada para o seu negócio
          </h3> */}
          <h1 className='font-primary w-full text-3xl font-semibold text-[#40494C] lg:mt-0 lg:w-[60%] lg:text-left lg:text-[50px] lg:font-normal lg:leading-[60.51px] '>
            Entenda como unimos{' '}
            <span className='text-[#1D81A2]'>eficiência</span> com{' '}
            <span className='text-[#1D81A2]'> praticidade</span>
          </h1>
          <h4 className='font-primary bottom-9 w-full text-lg font-normal text-[#647073]  lg:w-[50%] lg:text-2xl xl:w-full'>
            Aqui está seu caminho para o sucesso empresarial
          </h4>
        </div>
      </section>
      <SolutionsSection color='' />
      <section className='relative   flex h-[400px] w-full border-2 border-t-slate-200 bg-white lg:mt-20 lg:h-96 lg:items-center lg:justify-center'>
        <div className='flex h-full w-full max-w-7xl items-center px-6 lg:h-auto lg:px-14'>
          <h3 className='font-primary w-full text-4xl font-normal text-[#40494C] lg:w-[60%]'>
            Nós cuidamos da{' '}
            <span className='font-primary font-semibold '>
              saúde da sua empresa
            </span>{' '}
            para que ela possa{' '}
            <span className='font-primary font-semibold '>prosperar</span>{' '}
          </h3>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/svg/patterns_MCD-02.svg'
          alt=''
          className='absolute bottom-0 right-0 h-[300px] lg:h-full'
        />
      </section>
      <ContactSection />
      <BlogSection />
      <CustomFooter />
    </main>
  );
}
