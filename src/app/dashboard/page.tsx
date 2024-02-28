/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import React from 'react';

import { authOptions } from '@/constant/authOptions';

export default async function IndexPage() {
  const session = await getServerSession(authOptions);

  if (session && session.user) {
    return (
      <>
        <main>
          <section className=' flex flex-col flex-wrap gap-4 pb-16 lg:flex-row lg:items-start lg:justify-evenly'>
            <Link
              href='/dashboard/profile'
              className='flex h-[100px] w-full max-w-lg cursor-pointer flex-col items-center justify-center gap-1 rounded-[18px] bg-[#E7E7E7] transition-all hover:scale-[1.1] lg:h-[250px]'
            >
              <div>
                <img
                  src='/icons/person.svg'
                  className='lg:w-14'
                  alt='person icon'
                />
              </div>
              <h4 className='font-primary text-xs font-normal text-[#646262] lg:text-xl'>
                {' '}
                Seus dados pessoais
              </h4>
            </Link>
            <Link
              href='/dashboard/company'
              className='flex h-[100px] w-full max-w-lg cursor-pointer flex-col items-center justify-center gap-1 rounded-[18px] bg-[#E7E7E7] transition-all hover:scale-[1.1] lg:h-[250px]'
            >
              <div>
                <img
                  src='/icons/building.svg'
                  className='lg:w-14'
                  alt='person icon'
                />
              </div>
              <h4 className='font-primary text-xs font-normal text-[#646262] lg:text-xl'>
                {' '}
                Sua empresa
              </h4>
            </Link>
            <Link
              href='/dashboard/documents'
              className='flex h-[100px] w-full max-w-lg  cursor-pointer flex-col items-center justify-center gap-1 rounded-[18px]  bg-[#E7E7E7] transition-all hover:scale-[1.1] lg:h-[250px]'
            >
              <div>
                <img
                  src='/icons/documents.svg'
                  className='lg:w-14'
                  alt='person icon'
                />
              </div>
              <h4 className='font-primary text-xs font-normal text-[#646262] lg:text-xl'>
                {' '}
                Seus documentos
              </h4>
            </Link>
            <Link
              href='/dashboard/payments'
              className='flex h-[100px] w-full max-w-lg  cursor-pointer flex-col items-center justify-center gap-1 rounded-[18px]  bg-[#E7E7E7] transition-all hover:scale-[1.1] lg:h-[250px]'
            >
              <div>
                <img
                  src='/icons/payment.svg'
                  className='lg:w-14'
                  alt='person icon'
                />
              </div>
              <h4 className='font-primary text-xs font-normal text-[#646262] lg:text-xl'>
                {' '}
                Seus pagamentos
              </h4>
            </Link>
          </section>
          <a
            href='https://api.whatsapp.com/send?phone=5521965806068'
            className='font-primary fixed bottom-0 left-0 flex h-16 w-full cursor-pointer items-center justify-center gap-2 bg-[#84FE89] text-xs font-bold text-[#202020]'
          >
            {' '}
            <img src='/icons/zap.svg' alt='' />
            <p>CONVERSE COM A GENTE </p>
          </a>
        </main>
      </>
    );
  }
}
