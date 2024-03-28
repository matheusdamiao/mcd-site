'use-client';
import Head from 'next/head';
import Image from 'next/image';

import CustomFooter from '@/components/Footer/CustomFooter';
import NavBar from '@/components/navbar/Navbar';
import ContactSection from '@/components/sections/contactSection';

export default function ServicesPage() {
  return (
    <main className='m-0 flex flex-col  '>
      <Head>
        <title>MCD Contabilidade Consultiva - Serviços</title>
      </Head>
      <NavBar />

      <a
        className='font-primary fixed bottom-2 right-2 z-[888888888] flex w-[200px] items-center justify-center gap-2 rounded-3xl  bg-[#5ECC66] px-2 py-2 font-semibold text-white lg:bottom-10 lg:right-10 lg:w-[250px] lg:gap-4 lg:px-4 lg:py-3'
        href='https://api.whatsapp.com/send?phone=5521965806068'
        target='_blank'
      >
        {/* <Image src='icons/zap.svg' alt='' width={30} height={30} /> */}
        <svg
          width='25'
          height='25'
          viewBox='0 0 20 20'
          fill='white'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17 2.91006C16.0832 1.98399 14.9912 1.24973 13.7876 0.750111C12.5841 0.250494 11.2931 -0.00448012 9.99 5.95696e-05C4.53 5.95696e-05 0.0800002 4.45006 0.0800002 9.91006C0.0800002 11.6601 0.54 13.3601 1.4 14.8601L0 20.0001L5.25 18.6201C6.7 19.4101 8.33 19.8301 9.99 19.8301C15.45 19.8301 19.9 15.3801 19.9 9.92006C19.9 7.27006 18.87 4.78006 17 2.91006ZM9.99 18.1501C8.51 18.1501 7.06 17.7501 5.79 17.0001L5.49 16.8201L2.37 17.6401L3.2 14.6001L3 14.2901C2.17775 12.977 1.74114 11.4593 1.74 9.91006C1.74 5.37006 5.44 1.67006 9.98 1.67006C12.18 1.67006 14.25 2.53006 15.8 4.09006C16.5675 4.85402 17.1757 5.76272 17.5894 6.76348C18.0031 7.76425 18.214 8.83717 18.21 9.92006C18.23 14.4601 14.53 18.1501 9.99 18.1501ZM14.51 11.9901C14.26 11.8701 13.04 11.2701 12.82 11.1801C12.59 11.1001 12.43 11.0601 12.26 11.3001C12.09 11.5501 11.62 12.1101 11.48 12.2701C11.34 12.4401 11.19 12.4601 10.94 12.3301C10.69 12.2101 9.89 11.9401 8.95 11.1001C8.21 10.4401 7.72 9.63006 7.57 9.38006C7.43 9.13006 7.55 9.00006 7.68 8.87006C7.79 8.76006 7.93 8.58006 8.05 8.44006C8.17 8.30006 8.22 8.19006 8.3 8.03006C8.38 7.86006 8.34 7.72006 8.28 7.60006C8.22 7.48006 7.72 6.26006 7.52 5.76006C7.32 5.28006 7.11 5.34006 6.96 5.33006H6.48C6.31 5.33006 6.05 5.39006 5.82 5.64006C5.6 5.89006 4.96 6.49006 4.96 7.71006C4.96 8.93006 5.85 10.1101 5.97 10.2701C6.09 10.4401 7.72 12.9401 10.2 14.0101C10.79 14.2701 11.25 14.4201 11.61 14.5301C12.2 14.7201 12.74 14.6901 13.17 14.6301C13.65 14.5601 14.64 14.0301 14.84 13.4501C15.05 12.8701 15.05 12.3801 14.98 12.2701C14.91 12.1601 14.76 12.1101 14.51 11.9901Z'
            fill='#FFFFF'
          />
        </svg>
        ENTRE EM CONTATO
      </a>
      <section className='relative flex h-[650px] w-full items-center justify-center bg-black  pt-14 lg:flex lg:h-[700px] lg:px-8'>
        <video
          className='absolute left-0 top-0 h-full w-full object-cover object-center opacity-50 lg:object-top'
          src='https://res.cloudinary.com/dg5yog3gf/video/upload/v1709137985/videos/video-services_d45cak.mp4'
          autoPlay
          muted
          loop
        />

        <div className='relative z-[80] flex h-full max-w-7xl flex-col items-center justify-center gap-4 px-6 lg:top-[20px] lg:items-start lg:gap-8 lg:pl-5 lg:pt-0  xl:max-w-7xl'>
          <h1 className='font-primary w-full text-center text-3xl font-bold text-white lg:mt-0  lg:text-6xl lg:font-normal lg:leading-[60.51px] '>
            Entenda como unimos{' '}
            <span className='text-[#F7C027]'>eficiência</span> com{' '}
            <span className='text-[#F7C027]'> praticidade</span>
          </h1>
          <h4 className='font-primary bottom-9 w-full  text-center text-lg  font-normal text-white lg:text-2xl xl:w-full'>
            Aqui está seu caminho para o sucesso empresarial
          </h4>

          <div className='absolute bottom-0 left-0 right-0 mx-auto my-0 flex flex-col items-center lg:mb-8'>
            <a
              className='font-primary rounded-xl bg-transparent pb-3 text-center text-sm tracking-widest text-white transition-all hover:scale-105 lg:py-3'
              href='#services'
            >
              CONHEÇA NOSSOS SERVIÇOS
            </a>
            <a href='#services' className='pointer'>
              <svg
                className='animate-bounce'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path
                  d='M20.9994 5.00002L2.99943 5.00002C2.81718 5.00059 2.63855 5.05085 2.48275 5.1454C2.32695 5.23994 2.19988 5.37518 2.11523 5.53657C2.03058 5.69796 1.99154 5.87938 2.00232 6.0613C2.01311 6.24322 2.0733 6.41876 2.17643 6.56902L11.1764 19.569C11.5494 20.108 12.4474 20.108 12.8214 19.569L21.8214 6.56902C21.9256 6.41907 21.9867 6.24345 21.9981 6.06122C22.0094 5.879 21.9706 5.69714 21.8859 5.53541C21.8012 5.37368 21.6738 5.23826 21.5175 5.14387C21.3612 5.04948 21.182 4.99973 20.9994 5.00002Z'
                  fill='white'
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section
        id='services'
        className='h-full w-full px-6 py-20 lg:px-0 lg:pt-36'
      >
        <div className='m-auto flex w-full max-w-7xl flex-col justify-center px-0 lg:px-6'>
          <div className='flex flex-col gap-6'>
            <h2 className='text-center text-3xl font-normal text-[#40494C] lg:text-4xl'>
              {' '}
              Nossos serviços <span className='text-[#1C81A2]'>
                sob medida
              </span>{' '}
              pro seu negócio
            </h2>
            <h3 className='m-auto text-center text-xl font-normal text-[#647073] lg:w-[50%] '>
              {' '}
              Conheça melhor todos os serviços que a MCD oferece a sua empresa.
              Da contabilidade completa à assessoria, somos especialistas em
              cuidar de empresas
            </h3>
          </div>
        </div>
      </section>

      <section className='h-full w-full px-6 py-10 lg:py-20 xl:px-0 '>
        <div className='m-auto flex max-w-6xl flex-wrap-reverse gap-5 pb-10 lg:flex-nowrap lg:pb-32'>
          <div className='flex flex-col gap-5'>
            <h3 className='font-primary text-xl font-medium text-[#647073] lg:text-2xl'>
              Abertura e Legalização de Empresas
            </h3>
            <p className='w-full text-base  text-[#647073] lg:w-[80%] lg:text-lg'>
              A Abertura e Legalização de Empresas é o primeiro passo para o
              empresário formalizar o seu negócio. Optando pela MCD para abrir a
              sua nova empresa e firmando um contrato para prestações de
              serviços contábeis, você já vai estar economizando quase R$ 1.000
              reais.
            </p>
          </div>
          <Image
            src='/images/services-1.webp'
            alt=''
            height={243}
            width={609}
            className='object-cover'
          />
        </div>

        {/* //////////////////////////////////////// */}

        <div className='m-auto flex max-w-6xl flex-wrap gap-5 py-14 lg:flex-nowrap lg:py-0'>
          <Image
            src='/images/services-2.webp'
            alt=''
            height={243}
            width={609}
          />
          <div className='flex flex-col items-end gap-5'>
            <h3 className='font-primary text-right text-xl font-medium text-[#647073] lg:text-2xl'>
              Contabilidade
            </h3>
            <p className='w-full text-right text-base text-[#647073] lg:w-[80%] lg:text-lg'>
              Os serviços de contabilidade, que compreendem as áreas Contábil,
              Fiscal e de Pessoal, são processados rigorosamente dentro dos
              cronogramas previamente contratados, combinados e alinhados com os
              clientes. As remessas de documentação e os prazos são registrados
              através de software especifico que facilita os trabalhos, gera
              ganho de produtividade, segurança dos dados e transparência das
              informações
            </p>
          </div>
        </div>

        {/* /////////////// */}

        <div className='m-auto flex max-w-6xl flex-wrap-reverse gap-5 py-14 lg:flex-nowrap lg:py-32'>
          <div className='flex flex-col gap-5'>
            <h3 className='font-primary text-xl font-medium text-[#647073] lg:text-2xl'>
              Assessoria Administrativa e Financeira
            </h3>
            <p className='w-full text-base text-[#647073] lg:w-[80%] lg:text-lg'>
              No portfólio da MCD disponibilizamos serviços de Assessoria
              Administrativa e financeira visando a importância para os
              controles e tomadas de decisões mais assertivas. Lembramos que
              pesquisas apontam que mais de 50% das novas empresas morrem nos
              dois primeiros anos e uma das causas dessa tragédia é a falta de
              planejamento e controles eficazes. Não se deixe entrar nessa
              estatística. A MCD pode te ajudar nessas tarefas.
            </p>
          </div>
          <Image
            src='/images/services-3.webp'
            alt=''
            height={243}
            width={609}
            className='object-cover'
          />
        </div>

        {/* /////////////// */}

        <div className='m-auto flex max-w-6xl flex-wrap gap-5 py-14 lg:flex-nowrap lg:py-0'>
          <Image
            src='/images/services-4.webp'
            alt=''
            height={243}
            width={609}
          />
          <div className='flex flex-col items-end gap-5'>
            <h3 className='font-primary text-right text-xl font-medium text-[#647073] lg:text-2xl'>
              Consultoria Empresarial
            </h3>
            <p className='w-full text-right text-base text-[#647073] lg:w-[80%] lg:text-lg'>
              A consultoria empresarial desempenha o papel de diagnósticos,
              análises, avaliações, orientações e recomendações em relação às
              questões que possam estar prejudicando os negócios, afetando
              diretamente a geração dos lucros desejados pelos investimentos.
              Cuide da saúde da sua empresa para que ela possa continuar
              prosperando.
            </p>
          </div>
        </div>

        {/* /////////////// */}

        <div className='m-auto flex max-w-6xl flex-wrap-reverse gap-5 py-14 lg:flex-nowrap lg:py-32'>
          <div className='flex flex-col gap-5'>
            <h3 className='font-primary text-xl font-medium text-[#647073] lg:text-2xl'>
              Planejamento Estratégico
            </h3>
            <p className='w-full text-base text-[#647073] lg:w-[80%] lg:text-lg'>
              Com base nos indicadores econômico-financeiros, ajudamos o
              empresário a realizar Planejamentos estratégicos visando a
              melhoria dos resultados e crescimento da sua empresa.
            </p>
          </div>
          <Image
            src='/images/services-5.webp'
            alt=''
            height={243}
            width={609}
            className='object-cover'
          />
        </div>

        {/* /////////////// */}

        <div className='m-auto flex max-w-6xl flex-wrap gap-5 py-14 lg:flex-nowrap lg:py-0'>
          <Image
            src='/images/services-6.webp'
            alt=''
            height={243}
            width={609}
          />
          <div className='flex flex-col items-end gap-5'>
            <h3 className='font-primary text-right text-xl font-medium text-[#647073] lg:text-2xl'>
              BPO Financeiro
            </h3>
            <p className='text-bas e w-full  text-right text-[#647073] lg:w-[80%] lg:text-lg'>
              O dia a dia do Micro e Pequeno empresário não é fácil. Conhecendo
              essas dificuldades desenhamos um modelo de ajuda-lo nas tarefas
              rotineiras par aotimização do seu tempo e economia de custos
              indiretos. Podemos realizar todas as rotinas de Contas a Pagar,
              Receber, emissão de Notas Fiscais, Boletos; disponibilização de
              fluxo de caixa em tempo real e online; diversos indicadores
              financeiros para o acompanhamento do seu negócio.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <CustomFooter />
    </main>
  );
}
