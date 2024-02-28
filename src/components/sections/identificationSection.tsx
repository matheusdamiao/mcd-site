import Image from 'next/image';
import React from 'react';

const IdentificationSection = () => {
  return (
    <div className='h-full w-full py-40'>
      <div className='grid-cols-0 m-auto grid w-full max-w-5xl flex-col gap-6 px-6 lg:grid-cols-2 lg:gap-10 lg:px-0'>
        <h2 className='order-1 col-span-1 text-3xl font-normal text-[#40494C] lg:text-4xl'>
          {' '}
          MCD é para quem{' '}
          <span className=' text-[#1D81A2] '>não tem tempo a perder</span>{' '}
        </h2>

        <Image
          src='/images/girl-tablet.webp'
          width={517}
          height={543.1}
          className='order-4 row-span-4 m-auto lg:order-2'
          alt='Cliente usando um tablet'
        />
        <h3 className='order-2 text-xl  font-normal text-[#647073] lg:order-3'>
          Atendemos diversos setores econômicos, do micro ao médio empresário
        </h3>

        <ul className='order-3 ml-6 flex list-outside list-disc flex-col gap-4 marker:text-[#F7C027] lg:order-4'>
          <li className='text-lg font-medium text-[#647073]'>Comércio</li>
          <li className='text-lg font-medium text-[#647073]'>Clínicas</li>
          <li className='text-lg font-medium text-[#647073]'>Engenharia</li>
          <li className='text-lg font-medium text-[#647073]'>Indústrias</li>
          <li className='text-lg font-medium text-[#647073]'>Empreendedores</li>
          <li className='text-lg font-medium text-[#647073]'>
            Profissionais Liberais
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IdentificationSection;
