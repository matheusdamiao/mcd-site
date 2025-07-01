'use client';
import autoAnimate from '@formkit/auto-animate';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const TechSolutionsSection = () => {
  const [isOpen, setIsOpen] = useState('');

  const [animationParent] = useAutoAnimate();

  const parent = useRef(null);

  React.useEffect(() => {
    parent.current && autoAnimate(parent.current);
    setIsOpen('Wave ERP');
  }, [parent]);

  const techData = [
    {
      title: 'Wave ERP',
      text: 'É o principal sistema de gestão utilizado pelos clientes da MCD para controlar operações financeiras e administrativas.',
      list: [
        'Automatiza rotinas operacionais',
        'Proporciona clareza sobre o fluxo de caixa',
        'Ajuda na tomada de decisão estratégica com relatórios gerenciais',
        'Reduz tempo com tarefas manuais.',
      ],
    },

    {
      title: 'Painel de B.I MCD',
      text: 'Painel de Inteligência da MCD: Visualize, Analise e Decida com Base em Dados Contábeis e Financeiros em Tempo Real',
      list: [
        'Indicadores econômicos e financeiros atualizados',
        'Balanço Patrimonial',
        'DRE (Demonstração do Resultado do Exercício)',
        'DFC (Demonstração do Fluxo de Caixa)',
        'DMPL (Demonstração das Mutações do Patrimônio Líquido)',
        'EBITDA (Lucros antes de Juros, Impostos, Depreciação e Amortização).',
      ],
    },

    {
      title: 'IOB',
      text: 'IOB é uma plataforma que oferece inteligência fiscal, tributária e trabalhista atualizada diariamente',
      list: [
        'Atualizações legais e fiscais em tempo real',
        'Base de dados para consultas técnicas',
        'Redução de riscos de erros ou multas',
        'Relatórios técnicos',
        'Suporte especializado',
        'Inteligência fiscal para orientar os clientes',
        'Apoio em decisões contábeis com segurança',
        'Garante conformidade com a legislação atualizada',
      ],
    },
  ];

  return (
    <div className='h-full w-full px-6 pt-28 lg:px-0'>
      <div className='m-auto flex w-full max-w-7xl flex-col justify-center px-0 lg:px-6'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-center text-3xl  font-normal text-[#40494C] lg:text-4xl'>
            Integração com{' '}
            <span className=' text-[#1D81A2] '> sistemas inteligentes</span>
          </h2>
          <h3 className='text-center text-xl font-normal text-[#647073] '>
            Tecnologia no seu negócio significa mais controle, agilidade e
            clareza para você administrar seu negócio
          </h3>
        </div>

        <div className='flex w-full flex-wrap !justify-center  gap-4 pt-12 lg:mx-auto lg:flex-nowrap'>
          <div className='flex flex-col gap-5 '>
            <div className='flex flex-row  gap-5'>
              {techData.map((data) => (
                <button
                  key={data.title}
                  className={`rounded-t-lg border-b-4 bg-[#EAEAEA] px-6 py-3 font-semibold text-[#40494C] shadow-md transition-colors ${
                    isOpen === data.title
                      ? 'border-[#1D81A2] bg-white'
                      : 'border-transparent hover:bg-[#e0e0e0]'
                  }`}
                  onClick={() => setIsOpen(data.title)}
                  style={{ outline: 'none' }}
                >
                  {data.title}
                </button>
              ))}
            </div>
            <div className='flex w-full  justify-center '>
              <div
                className='min-h-[80px] w-full max-w-xl rounded-b-lg  py-6 '
                ref={animationParent}
              >
                {techData.map((d) =>
                  isOpen === d.title ? (
                    <div
                      key={d.title}
                      className='font-primary pt-2 text-base font-normal text-[#647073]'
                    >
                      <p>{d.text}</p>
                      {d.list && (
                        <ul className='mt-2 list-disc pl-5'>
                          {d.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
          <Image
            src='/images/foto-tec.png'
            width={517}
            height={543.1}
            alt='Cliente usando um tablet'
            className='max-w-[400px]'
          />
        </div>
      </div>
    </div>
  );
};

export default TechSolutionsSection;
