'use client';
import { Button, Navbar } from 'flowbite-react';
import Link from 'next/link';
import * as React from 'react';

export default function NavBar() {
  return (
    <div className='fixed left-0 z-[9999] m-auto w-full  lg:m-auto lg:mt-4 lg:px-14'>
      <Navbar
        className='h-full w-full border-[1px] bg-white bg-opacity-80  px-2 py-3  opacity-90 lg:flex  lg:w-full  lg:rounded-[34.6px] lg:px-6 lg:py-0 lg:shadow-md lg:[&>div]:w-full lg:[&>div]:flex-nowrap lg:[&>div]:gap-6 lg:[&>div]:px-8 '
        fluid
        rounded
      >
        <Navbar.Brand as={Link} href='/' className=' shrink-0 pl-4'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/svg/logo-mob.svg' alt='' className='w-full lg:hidden ' />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/svg/mcd-logo-desktop.svg'
            alt=''
            className='hidden lg:block'
          />
        </Navbar.Brand>

        <Navbar.Toggle className='px-4 hover:bg-transparent focus:ring-0' />

        <Navbar.Collapse className='w-full justify-evenly whitespace-nowrap transition-transform lg:flex lg:w-full lg:justify-end [&>ul]:mt-[14px] [&>ul]:h-full [&>ul]:w-full [&>ul]:max-w-4xl [&>ul]:justify-between [&>ul]:bg-[white] [&>ul]:px-2 [&>ul]:py-4  sm:[&>ul]:mt-[0px] md:[&>ul]:flex md:[&>ul]:items-center md:[&>ul]:bg-transparent'>
          <Navbar.Link
            as={Link}
            href='/abrir-empresa'
            className='font-normal lg:text-[20px] '
          >
            Abrir empresa
          </Navbar.Link>
          <Navbar.Link href='/contador' className='font-normal lg:text-[20px]'>
            Trocar de contador
          </Navbar.Link>
          <Navbar.Link href='/solucoes' className='font-normal lg:text-[20px] '>
            Soluções
          </Navbar.Link>
          <div className='flex lg:gap-0 xl:gap-4'>
            <a className='flex py-2 pl-2 md:order-2' href='dashboard'>
              <Button
                pill
                className='rounded-[15px] border-2  border-[#AFAFAF] bg-transparent px-4 font-normal text-[#40494C] hover:!bg-[#1D81A2] hover:text-white lg:text-[20px]'
              >
                Minha conta
              </Button>
            </a>
            <div className='flex py-2 pl-2 md:order-2'>
              {/* <Button pill color='light' className='px-4'>
                criar conta
              </Button> */}
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
