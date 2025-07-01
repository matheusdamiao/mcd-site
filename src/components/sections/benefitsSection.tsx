import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import CtaButton from '@/components/button/CtaButton';

const BenefitsSection = () => {
  return (
    <div id='beneficios' className='h-full w-full pt-20 lg:pt-36'>
      <div className='m-auto flex w-full max-w-7xl flex-col px-6 lg:px-0'>
        <h2 className='text-center text-3xl font-normal text-[#40494C] lg:text-4xl'>
          {' '}
          Conheça todos os <span className=' text-[#1D81A2] '>
            benefícios{' '}
          </span>{' '}
          de ser cliente MCD
        </h2>
        <ul className='m-auto flex max-w-3xl flex-col justify-center gap-8 pt-20'>
          {/* <li className='flex items-center  gap-3'>
            <Image
              src='/icons/icon_approval.webp'
              width={44}
              height={44}
              alt=''
              className='self-start'
            />
            <div>
              <h3 className='font-primary font-semibold text-[#647073] lg:text-xl'>
                Serviços contábeis{' '}
                <span className='text-[#1D81A2]'>grátis</span> no primeiro mês
              </h3>
              <h4 className='font-primary pt-2 text-base font-normal text-[#647073]'>
                {' '}
                Fique em dia e legalizado com toda contabilidade da sua empresa.{' '}
                <Link
                  href='/solucoes#solutions'
                  className='underline hover:font-semibold hover:text-[#1D81A2]'
                >
                  Conheça melhor
                </Link>{' '}
              </h4>
            </div>
          </li> */}
          <li className='flex items-center  gap-3'>
            <Image
              src='/icons/icon_approval.webp'
              width={44}
              height={44}
              alt=''
              className='self-start'
            />
            <div>
              <h3 className='font-primary font-semibold text-[#647073] lg:text-xl'>
                <span className='text-[#1D81A2]'>
                  Emissão de nota fiscal de forma ágil e descomplicada
                </span>{' '}
              </h3>
              <h4 className='font-primary pt-2 text-base font-normal text-[#647073]'>
                Ao abrir sua empresa com a gente, formulamos um planejamento
                personalizado para o seu negócio
                <br />
                <Link href='/solucoes#solutions' className='underline'>
                  Conheça melhor
                </Link>{' '}
              </h4>
            </div>
          </li>
          <li className='flex items-center  gap-3'>
            <Image
              src='/icons/icon_approval.webp'
              width={44}
              height={44}
              alt=''
              className='self-start'
            />
            <div>
              <h3 className='font-primary font-semibold text-[#647073] lg:text-xl'>
                Acesso
                <span className='text-[#1D81A2]'> grátis</span> a um sistema de
                gestão <span className='text-[#1D81A2]'> - Wave ERP</span>
              </h3>
              <h4 className='font-primary pt-2 text-base font-normal text-[#647073]'>
                {' '}
                Controle operações financeiras e administrativas, automatize
                rotinas operacionais, tenha clareza no fluxo de caixa e reduza
                seu tempo com tarefas manuais.
                <br />
                <Link
                  href='/solucoes#solutions'
                  className='underline hover:font-semibold hover:text-[#1D81A2]'
                >
                  Conheça melhor
                </Link>{' '}
                {/* <br />
                <small className='text-gray-400'>
                  *Exclusivo para empresas do Simples Nacional e com contrato
                  mínimo de 12 meses.
                </small>
                <br /> */}
              </h4>
            </div>
          </li>
          <li className='flex items-center  gap-3'>
            <Image
              src='/icons/icon_approval.webp'
              width={44}
              height={44}
              alt=''
              className='self-start'
            />
            <div>
              <h3 className='font-primary font-semibold text-[#647073] lg:text-xl'>
                Serviços contábeis
                <span className='text-[#1D81A2]'> grátis</span> no primeiro mês
              </h3>
              <h4 className='font-primary pt-2 text-base font-normal text-[#647073]'>
                {' '}
                Fique em dia e legalizado com toda contabilidade da sua empresa
                <br />
                <Link
                  href='/solucoes#solutions'
                  className='underline hover:font-semibold hover:text-[#1D81A2]'
                >
                  Conheça melhor
                </Link>
              </h4>
            </div>
          </li>

          <li className='flex items-center  gap-3'>
            <Image
              src='/icons/icon_approval.webp'
              width={44}
              height={44}
              alt=''
              className='self-start'
            />
            <div>
              <h3 className='font-primary font-semibold text-[#647073] lg:text-xl'>
                {' '}
                Suporte completo na
                <span className='text-[#1D81A2]'> gestão de RH</span>
              </h3>
              <h4 className='font-primary pt-2 text-base font-normal text-[#647073]'>
                {' '}
                Análise de custos com folha de pagamento, controle de
                absenteísmo e histograma de colaboradores
                <br />
                <Link
                  href='/solucoes#solutions'
                  className='underline hover:font-semibold hover:text-[#1D81A2]'
                >
                  Conheça melhor
                </Link>{' '}
                <br />
                {/* <small className='mt-4 text-gray-400'>
                  *Exclusivo para clientes que contratarem o serviço de
                  consultoria
                </small> */}
              </h4>
            </div>
          </li>
        </ul>

        <CtaButton
          target='/#form'
          margin='mt-10'
          bgcolor='#1D81A2'
          textColor='#FFFF'
        >
          Quero ser cliente MCD{' '}
        </CtaButton>
      </div>
    </div>
  );
};

export default BenefitsSection;
