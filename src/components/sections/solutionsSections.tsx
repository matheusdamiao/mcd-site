/* eslint-disable @next/next/no-img-element */
import React from 'react';

const GestaoFinanceira: React.FC = (): any => {
  return (
    <div className='grid grid-cols-1 gap-5 pt-6 lg:grid-cols-2 lg:gap-10'>
      <div>
        <h3 className='font-primary text-base font-light text-[#647073] lg:text-lg '>
          Gestao Financeira{' '}
        </h3>
        <p className='pt-5 text-lg text-[#647073] lg:w-[85%] lg:text-2xl'>
          Tenha as finanças do seu negócio otimizadas e planejadas
          estrategicamente para o seu sucesso.{' '}
        </p>
      </div>
      <div className='flex items-center gap-6'>
        <div className='flex-0 flex-shrink-0 flex-grow-0'>
          <img src='/svg/team-management.svg' alt='team management' />
        </div>
        <p className='font-primary text-base font-normal text-[#647073] lg:text-2xl'>
          BPO Financeiro
        </p>
      </div>
    </div>
  );
};

const ContabilidadeDigital: React.FC = (): any => {
  return (
    <div className='grid grid-cols-1 gap-5  pt-6 lg:grid-cols-2 lg:gap-10'>
      <div>
        <h3 className='font-primary text-base font-light text-[#647073] lg:text-lg '>
          Contabilidade Digital{' '}
        </h3>
        <p className='pt-5 text-lg text-[#647073] lg:text-2xl'>
          Vamos levar seu negócio para o digital! A documentação é registrada em
          software, o que facilita o seu trabalho, gera ganho de produtividade,
          segurança dos dados e transparência das informações.
        </p>
      </div>
      <div className='flex flex-col justify-center gap-5'>
        <div className='flex items-center gap-6'>
          <div className='flex-0 flex-shrink-0 flex-grow-0'>
            <img src='/svg/project-management.svg' alt='project management' />
          </div>
          <p className='font-primary text-base font-normal text-[#647073] lg:text-2xl'>
            Emissão de notas fiscais
          </p>
        </div>
        <div className='flex items-center gap-6'>
          <div className='flex-0 flex-shrink-0 flex-grow-0'>
            <img src='/svg/warning.svg' alt='warning' />
          </div>
          <p className='font-primary text-base font-normal text-[#647073] lg:text-2xl'>
            Lembretes de obrigações fiscais
          </p>
        </div>
      </div>
    </div>
  );
};

const AssessoriaAdministrativa: React.FC = (): any => {
  return (
    <div className='grid grid-cols-1 gap-5 pt-6 lg:grid-cols-2 lg:gap-10'>
      <div>
        <h3 className='font-primary text-base font-light text-[#647073] lg:text-lg '>
          Assessoria Administrativa
        </h3>
        <p className='pt-5 text-lg text-[#647073] lg:text-2xl'>
          Fique tranquilo! Nós te ajudamos a controlar e organizar melhor os
          gastos e investimentos no seu negócio. Saiba como tomar as melhores
          decisões para os seus investimentos.
        </p>
      </div>
      <div className='flex items-center gap-6'>
        <div className='flex-0 flex-shrink-0 flex-grow-0'>
          <img src='/svg/focus.svg' alt='focus' />
        </div>
        <p className='font-primary text-base font-normal text-[#647073] lg:text-2xl'>
          Planejamento estratégico
        </p>
      </div>
    </div>
  );
};

const ConsultoriaEmpresarial: React.FC = (): any => {
  return (
    <div className='grid grid-cols-1 gap-5 pt-6 lg:grid-cols-2 lg:gap-10'>
      <div>
        <h3 className='font-primary text-base font-light text-[#647073] lg:text-lg '>
          Consultoria Empresarial
        </h3>
        <p className='w-[90%] pt-5 text-lg text-[#647073] lg:text-2xl'>
          Não sabe o que está dando errado? Nós fazemos o diagnóstico do estado
          da empresa, e também na gestão de pessoas. Estamos empenhados em
          ajudar sua equipe na gestão contábil e financeira.
        </p>
      </div>
      <div className='flex items-center gap-6'>
        <div className='flex-0 flex-shrink-0 flex-grow-0'>
          <img src='/svg/analytics.svg' alt='focus' />
        </div>
        <p className='font-primary text-base font-normal text-[#647073] lg:text-2xl'>
          Diagnóstico contábil e empresarial
        </p>
      </div>
    </div>
  );
};

type SolutionsProps = {
  color: string;
};

const SolutionsSection = (props: SolutionsProps) => {
  const [isSelected, setIsSelected] = React.useState('gestao');

  return (
    <section
      id='solucoes'
      className='m-auto h-full w-full max-w-7xl px-6 py-12 sm:py-20 lg:h-full lg:px-14 lg:py-32  '
    >
      <div className='h-full w-full'>
        <div>
          <h2 className='font-primary text-center text-3xl font-normal text-[#40494C] lg:text-left lg:text-5xl  '>
            Soluções para o seu negócio
          </h2>
          <p className='font-primary m-auto w-[90%] pt-7 text-center text-lg font-normal text-[#647073]  lg:w-full lg:text-left lg:text-2xl'>
            Ajudamos você a economizar tempo e dinheiro tomando as decisões
            certas.
          </p>
        </div>
        <div className='flex h-[200px] w-[90vw] gap-10 overflow-auto px-6 py-8 lg:h-[300px] lg:w-full lg:pt-20'>
          <div
            className={`h-[100px] w-36 flex-shrink-0 cursor-pointer  rounded-[22.83px] px-5 py-7 shadow-2xl lg:h-32 lg:w-44 ${
              isSelected === 'gestao'
                ? !props.color
                  ? 'bg-[#1D81A2]'
                  : `bg-[${props.color}]`
                : 'bg-[#F2F2F2]'
            }
            `}
            onClick={() =>
              isSelected === 'gestao'
                ? setIsSelected('')
                : setIsSelected('gestao')
            }
          >
            <h3
              className={`font-primary text-base font-medium lg:text-xl ${
                isSelected === 'gestao' ? 'text-white' : 'text-[#40494C]'
              } `}
            >
              Gestão Financeira
            </h3>
          </div>
          <div
            className={`h-[100px] w-36 flex-shrink-0 cursor-pointer rounded-[22.83px]  px-5 py-7 shadow-2xl lg:h-32 lg:w-44 ${
              isSelected === 'digital'
                ? !props.color
                  ? 'bg-[#1D81A2]'
                  : `bg-[${props.color}]`
                : 'bg-[#F2F2F2]'
            }`}
            onClick={() =>
              isSelected === 'digital'
                ? setIsSelected('')
                : setIsSelected('digital')
            }
          >
            <h3
              className={`font-primary text-base font-medium lg:text-xl ${
                isSelected === 'digital' ? 'text-white' : 'text-[#40494C]'
              } `}
            >
              Contabilidade Digital
            </h3>
          </div>
          <div
            className={`h-[100px] w-36 flex-shrink-0 cursor-pointer rounded-[22.83px]  px-5 py-7 shadow-2xl lg:h-32 lg:w-44 ${
              isSelected === 'adm'
                ? !props.color
                  ? 'bg-[#1D81A2]'
                  : `bg-[${props.color}]`
                : 'bg-[#F2F2F2]'
            }`}
            onClick={() =>
              isSelected === 'adm' ? setIsSelected('') : setIsSelected('adm')
            }
          >
            <h3
              className={`font-primary text-base font-medium lg:text-xl ${
                isSelected === 'adm' ? 'text-white' : 'text-[#40494C]'
              } `}
            >
              Assessoria Administrativa
            </h3>
          </div>
          <div
            className={`h-[100px] w-36 flex-shrink-0 cursor-pointer  rounded-[22.83px]  px-5 py-7 shadow-2xl lg:h-32 lg:w-44 ${
              isSelected === 'company'
                ? !props.color
                  ? 'bg-[#1D81A2]'
                  : `bg-[${props.color}]`
                : 'bg-[#F2F2F2]'
            }`}
            onClick={() =>
              isSelected === 'company'
                ? setIsSelected('')
                : setIsSelected('company')
            }
          >
            <h3
              className={`font-primary text-base font-medium lg:text-xl ${
                isSelected === 'company' ? 'text-white' : 'text-[#40494C]'
              } `}
            >
              Consultoria Empresarial
            </h3>
          </div>
        </div>
        <div className='px-8'>
          {isSelected === 'gestao' && <GestaoFinanceira />}
          {isSelected === 'digital' && <ContabilidadeDigital />}
          {isSelected === 'adm' && <AssessoriaAdministrativa />}
          {isSelected === 'company' && <ConsultoriaEmpresarial />}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
