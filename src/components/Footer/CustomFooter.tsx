'use client';
import { CustomFlowbiteTheme, Footer } from 'flowbite-react';
import * as React from 'react';

import { company, fullAddress, whatsappLink } from '@/constant/company';

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
          <div className='md:flsex grid w-full justify-between gap-7 sm:flex sm:justify-between md:grid-cols-1'>
            <Footer.Brand
              className='w-full justify-center lg:justify-start [&>img]:h-full'
              href='/'
              src='/icons/MCD_logo_branco.svg'
              alt='MCD Contabilidade Consultiva'
            />

            <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
              <div>
                <Footer.Title title='Institucional' className='text-white' />
                <Footer.LinkGroup col>
                  <Footer.Link className='text-white' href='/#about'>
                    Quem somos
                  </Footer.Link>
                  <Footer.Link className='text-white' href='/blog'>
                    Blog
                  </Footer.Link>
                  <Footer.Link className='text-white' href='/services'>
                    Serviços
                  </Footer.Link>
                  <Footer.Link className='text-white' href='/solucoes'>
                    Soluções
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='Serviços' className='text-white' />
                <Footer.LinkGroup col>
                  <Footer.Link className='text-white' href='/abrir-empresa'>
                    Abrir uma empresa
                  </Footer.Link>
                  <Footer.Link className='text-white' href='/contador'>
                    Trocar de contador
                  </Footer.Link>
                  <Footer.Link
                    className='text-white'
                    href='/solucoes#assessoria'
                  >
                    Assessoria Empresarial
                  </Footer.Link>
                  <Footer.Link className='text-white' href='/diagnostico'>
                    Diagnóstico inicial
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='Portal de Ajuda' className='text-white' />
                <Footer.LinkGroup col>
                  <Footer.Link className='text-white' href='/abrir-empresa#faq'>
                    Perguntas Frequentes (FAQ)
                  </Footer.Link>
                  <Footer.Link
                    className='text-white'
                    href='/politicas-privacidade'
                  >
                    Política de Privacidade
                  </Footer.Link>
                  <Footer.Link className='text-white' href='/termos-de-uso'>
                    Termos de Uso
                  </Footer.Link>
                  <Footer.Link className='text-white' href='/politicas-cookies'>
                    Política de Cookies
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>

          <div className='mt-10 grid gap-4 text-sm text-white sm:grid-cols-2'>
            <div className='space-y-1'>
              <p className='font-semibold'>{company.legalName}</p>
              <p>CNPJ {company.cnpj}</p>
              <p>{fullAddress}</p>
              {company.crc ? <p>CRC-RJ {company.crc}</p> : null}
            </div>
            <div className='space-y-1 sm:text-right'>
              <p>
                <a className='hover:underline' href={`tel:${company.phoneHref}`}>
                  {company.phone}
                </a>
              </p>
              <p>
                <a
                  className='hover:underline'
                  href={whatsappLink('Olá! Vim pelo site da MCD.')}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  WhatsApp {company.phone}
                </a>
              </p>
              <p>
                <a
                  className='hover:underline'
                  href={`mailto:${company.email}`}
                >
                  {company.email}
                </a>
              </p>
            </div>
          </div>

          <Footer.Divider />
          <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright
              className='text-white'
              href='/'
              by={company.legalName}
              year={2026}
            />
            <div className='mt-4 flex items-center space-x-6 sm:mt-0 sm:justify-center'>
              <a
                href={company.socials.instagram}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram da MCD'
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='/svg/insta-icon.svg'
                  alt=''
                  width='24'
                  height='24'
                  loading='lazy'
                />
              </a>
              <a
                href={company.socials.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn da MCD'
                className='text-white'
              >
                <svg
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z' />
                </svg>
              </a>
              <a
                href={whatsappLink('Olá! Vim pelo site da MCD.')}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='WhatsApp da MCD'
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='/svg/msg-icon.svg'
                  alt=''
                  width='24'
                  height='24'
                  loading='lazy'
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Footer>
  );
};

export default CustomFooter;
