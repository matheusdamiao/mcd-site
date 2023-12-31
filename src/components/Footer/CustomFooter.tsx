'use client';
import { CustomFlowbiteTheme, Footer } from 'flowbite-react';
import React from 'react';

const CustomFooter = () => {
  const customFooter: CustomFlowbiteTheme['footer'] = {
    root: {
      base: 'w-full rounded-lg bg-[#1C81A2] shadow dark:bg-gray-800 md:flex md:items-center md:justify-between',
      container: 'w-full p-6',
      bgDark: 'bg-gray-800',
    },
    brand: {
      base: 'mb-4 items-center sm:mb-0',
      img: 'h-full',
      span: 'self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white',
    },
  };

  return (
    <Footer theme={customFooter}>
      <section className='m-auto mb-14 mt-20 w-full max-w-7xl px-6 lg:mb-14 lg:mt-28 lg:px-6'>
        <div className='w-full'>
          <div className='grid w-full justify-between gap-7 sm:flex sm:justify-between md:flex md:grid-cols-1'>
            <Footer.Brand
              className='w-full justify-center lg:justify-start [&>img]:h-full'
              href='https://mcdcontabilidade.com.br'
              src='/icons/MCD_logo_branco.svg'
              alt='MCD logo'
            />

            <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
              <div>
                <Footer.Title title='Institucional' className='text-white' />
                <Footer.LinkGroup col>
                  <Footer.Link className='text-white' href='#'>
                    Quem somos
                  </Footer.Link>
                  <Footer.Link className='text-white' href='#'>
                    Blog
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='Serviços' className='text-white' />
                <Footer.LinkGroup col>
                  <Footer.Link className='text-white' href='#'>
                    Abrir uma empresa
                  </Footer.Link>
                  <Footer.Link className='text-white' href='#'>
                    Trocar de contador
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='Portal de Ajuda' className='text-white' />
                <Footer.LinkGroup col>
                  <Footer.Link className='text-white' href='#'>
                    Perguntas Frequentes (FAQ)
                  </Footer.Link>
                  <Footer.Link className='text-white' href='#'>
                    Política de Privacidade
                  </Footer.Link>
                  <Footer.Link className='text-white' href='#'>
                    Termos &amp; Condições
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright
              className='text-white'
              href='#'
              by='MCD Contábil LTDA'
              year={2023}
            />
            <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/svg/insta-icon.svg' alt='' />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/svg/msg-icon.svg' alt='' />
            </div>
          </div>
        </div>
      </section>
    </Footer>
  );
};

export default CustomFooter;
