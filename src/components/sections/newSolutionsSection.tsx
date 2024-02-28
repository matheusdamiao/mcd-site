'use-client';
import autoAnimate from '@formkit/auto-animate';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import CtaButton from '@/components/button/CtaButton';

const NewSolutionsSection = () => {
  const [isOpen, setIsOpen] = useState('');

  const [animationParent] = useAutoAnimate();

  const parent = useRef(null);

  React.useEffect(() => {
    parent.current && autoAnimate(parent.current);
    setIsOpen('Cuidamos da sua rotina contábil e fisical');
  }, [parent]);

  const solutionsData = [
    {
      title: 'Cuidamos da sua rotina contábil e fisical',
      iconPath: '/icons/warning.webp',
      text: 'Lembretes automatizados para suas contas, impostos e rotinas, e envios e recebimentos de documentos  através de softwares modernos',
    },

    {
      title: 'BPO Financeiro pra agilizar seu dia-a-dia',
      iconPath: '/icons/project-management.webp',
      text: 'Ganhe eficiência operacional nas suas tarefas financeiras rotineiras e direcione sua energia para atividades essenciais de desenvolvimento e expansão do seu negócio',
    },

    {
      title: 'Assessoria tributária, administrativa e financeira',
      iconPath: '/icons/handshake.webp',
      text: 'Receba assessoria estratégica para impulsionar o crescimento do seu negócio com eficiência e qualidade',
    },
  ];

  const solutionsData2 = [
    {
      title: 'Abertura e legalização de sua empresa',
      iconPath: '/icons/contract.webp',
      text: 'Esse é o primeiro passo para seu negócio evoluir. Deixe a burocracia com nossos especialistas e ainda ganhe um mês de assessoria empresarial',
    },
    {
      title: 'Estudos de viabilidade de negócio',
      iconPath: '/icons/research.webp',
      text: 'Identifique oportunidades de crescimento e avalie potenciais riscos do seu negócio. Fornecemos um estudo holístico para você tomar decisões estratégicas.',
    },

    {
      title: 'Planejamento empresarial',
      iconPath: '/icons/data-report.webp',
      text: 'Receba um plano de negócio personalizado juntamente com um orçamento empresarial completo para seu negócio funcionar com saúde.',
    },
  ];

  return (
    <div className='h-full w-full px-6 py-20 lg:px-0'>
      <div className='m-auto flex w-full max-w-7xl flex-col justify-center px-0 lg:px-6'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-center text-3xl font-normal text-[#40494C] lg:text-4xl'>
            {' '}
            Soluções pra sua empresa crescer saudável{' '}
          </h2>
          <h3 className='text-center text-xl font-normal text-[#647073] '>
            {' '}
            Rotina fiscal, contábil e financeira bem organizada com planejamento
            empresarial completo é a nossa especialidade.{' '}
          </h3>
        </div>

        <div className='flex flex-col gap-5 pt-20 lg:m-auto lg:flex-row'>
          <div className='flex flex-col justify-start gap-5 '>
            {solutionsData.map((data) => (
              <div
                className={`flex w-full cursor-pointer flex-col gap-5 rounded-xl bg-[#EAEAEA] px-8 py-6 shadow-lg lg:w-[500px] ${
                  isOpen === data.title && 'cursor-auto'
                }`}
                key={data.title}
                ref={animationParent}
                onClick={() => setIsOpen(data.title)}
              >
                <div className=' flex items-center  gap-5'>
                  <Image
                    src={data.iconPath}
                    width={40}
                    height={40}
                    alt='icone'
                    className='flex-0 flex-shrink-0 flex-grow-0'
                  />
                  <h3 className='text-lg font-semibold text-[#40494C]'>
                    {data.title}
                  </h3>
                  <span
                    className={` h-0 w-0 border-l-[8px] border-r-[8px] border-t-[15px] border-l-transparent border-r-transparent border-t-slate-600 transition-all ${
                      isOpen === data.title &&
                      'border-b-[15px]  border-t-[0px] border-b-slate-600 border-t-transparent'
                    }`}
                  ></span>
                </div>

                {isOpen === data.title && (
                  <p className='font-normal text-[#647073]'>{data.text}</p>
                )}
              </div>
            ))}
          </div>

          <div className='flex flex-col justify-start gap-5'>
            {solutionsData2.map((data) => (
              <div
                className={` flex w-full cursor-pointer flex-col gap-5 rounded-xl bg-[#EAEAEA] px-8 py-6 shadow-lg lg:w-[500px] ${
                  isOpen === data.title && 'cursor-auto'
                } `}
                key={data.title}
                ref={animationParent}
                onClick={() => setIsOpen(data.title)}
              >
                <div className=' flex items-center gap-5  '>
                  <Image
                    src={data.iconPath}
                    width={40}
                    height={40}
                    alt='icone'
                  />
                  <h3 className='text-lg font-semibold text-[#40494C]'>
                    {data.title}
                  </h3>

                  <span
                    className={` h-0 w-0 border-l-[8px] border-r-[8px] border-t-[15px] border-l-transparent border-r-transparent border-t-slate-600 transition-all ${
                      isOpen === data.title &&
                      'border-b-[15px]  border-t-[0px] border-b-slate-600 border-t-transparent'
                    }`}
                  ></span>
                </div>

                {isOpen === data.title && (
                  <p className='font-normal text-[#647073]'>{data.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <CtaButton target='/solucoes' margin='mt-[50px]'>
          Quero conhecer todas as soluções
        </CtaButton>
      </div>
    </div>
  );
};

export default NewSolutionsSection;
