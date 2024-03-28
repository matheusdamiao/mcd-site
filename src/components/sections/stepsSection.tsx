import Image from 'next/image';
import React from 'react';

import CtaButton from '@/components/button/CtaButton';

const StepsSection = () => {
  return (
    <div className='flex flex-col gap-10 lg:gap-0 '>
      <div className='m-auto flex w-full max-w-7xl flex-col'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-wrap items-center justify-center px-6 lg:flex-nowrap lg:gap-5'>
            {' '}
            <Image
              src='/images/three-steps.webp'
              alt=''
              width={158}
              height={268}
              className='w-[80px] lg:w-[108px]'
            />
            <h2 className='text-center text-3xl  font-normal text-[#40494C] lg:w-[70%] lg:text-left  lg:text-4xl'>
              Passos essenciais para planejar seu negócio
            </h2>
            <h3 className='pt-8 text-center text-xl font-normal text-[#647073] lg:w-[50%] lg:pt-0 lg:text-start  '>
              Nossos especialistas da MCD recomendam três etapas fundamentais
              para todo negócio
            </h3>
          </div>
        </div>
      </div>

      <div className='relative flex h-full w-full flex-col items-center py-20 lg:h-[400px]  '>
        <Image
          src='/images/steps-bg.webp'
          className='absolute top-0 h-full w-full object-cover'
          alt=''
          height={433}
          width={1448}
        />
        <div className='h-full w-full px-6 lg:px-0'>
          <div className='m-auto flex h-full w-full max-w-5xl flex-col gap-8 lg:flex-row'>
            <div className='m-auto flex h-full w-full max-w-[350px] flex-col items-center justify-center gap-4'>
              <Image
                src='/icons/step-one.webp'
                alt='step-one'
                width={78.41}
                height={87.18}
              />
              <h4 className='font-primary  text-center text-2xl font-semibold text-[#40494C]'>
                Plano de negócio
              </h4>
              <p className='text-center'>
                O sucesso dos negócios começa nos estudos iniciais. Antes de
                abrir sua empresa, é muito importante ter um plano de negócios
              </p>
            </div>

            <div className='m-auto flex h-full w-full max-w-[350px] flex-col items-center justify-center gap-4'>
              <Image
                src='/icons/step-two.webp'
                alt='step-two'
                width={78.41}
                height={87.18}
              />
              <h4 className='font-primary  text-center text-2xl font-semibold text-[#40494C]'>
                Orçamento empresarial
              </h4>
              <p className='text-center'>
                Através dos números que servirão de base na aprovação do Plano
                de Negócio, deve ser elaborado o Orçamento empresarial, que
                contém todas as receitas e despesas.
              </p>
            </div>

            <div className='m-auto flex h-full w-full max-w-[350px] flex-col items-center justify-center gap-4'>
              <Image
                src='/icons/step-three.webp'
                alt='step-three'
                width={78.41}
                height={87.18}
              />
              <h4 className='font-primary  text-center text-2xl font-semibold text-[#40494C]'>
                Operação do negócio
              </h4>
              <p className='text-center'>
                Mãos firmes na hora de começar a tocar seu negócio. Despesas só
                se estiverem com previsão orçamentária. Siga as metas planejadas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex h-full w-full items-center justify-center pb-10 lg:h-[150px] lg:pb-0'>
        <CtaButton target='/#form'>Quero planejar meu negócio</CtaButton>
      </div>
    </div>
  );
};

export default StepsSection;
