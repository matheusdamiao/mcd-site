'use client';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import CustomFooter from '@/components/Footer/CustomFooter';
import NavBar from '@/components/navbar/Navbar';
import BlogSection from '@/components/sections/blogSection';
import ContactSection from '@/components/sections/contactSection';

export default function SolutionsPage() {
  return (
    <main className='m-0 flex flex-col bg-[#s] '>
      <Head>
        <title>MCD Contabilidade Consultiva</title>
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

      <section className='relative flex h-[650px] w-full items-center justify-center bg-black pt-14 lg:flex lg:h-[700px] lg:px-8'>
        <video
          className='absolute left-0 top-0 h-full w-full object-cover object-center opacity-50 lg:object-top'
          src='https://res.cloudinary.com/dg5yog3gf/video/upload/v1709137988/videos/video-solutions_uy9emr.mp4'
          autoPlay
          muted
          loop
        />

        <div className='z-[80] flex h-full max-w-7xl flex-col items-center justify-center gap-4 px-6 lg:left-16 lg:top-[20px] lg:gap-8 lg:pl-5 lg:pt-0  xl:max-w-7xl'>
          <h1 className='font-primary w-[80%] text-center text-3xl font-bold text-white lg:mt-0  lg:text-6xl lg:font-normal lg:leading-[60.51px] '>
            Soluções completas pro seu negócio{' '}
            <span className='text-[#F7C027]'>evoluir</span>
          </h1>
          <h4 className='font-primary bottom-9 w-full  text-center text-lg  font-normal text-white lg:text-2xl xl:w-full'>
            Aqui está seu caminho para o sucesso empresarial
          </h4>

          <div className='absolute bottom-0 left-0 right-0 mx-auto my-0 flex flex-col items-center lg:mb-8'>
            <a
              className='font-primary rounded-xl bg-transparent pb-3 text-center text-sm tracking-widest text-white transition-all hover:scale-105 lg:py-3'
              href='#solutions'
            >
              CONHEÇA NOSSAS SOLUÇÕES
            </a>
            <a href='#solutions' className='pointer'>
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
        id='solutions'
        className='h-full w-full px-6 py-20 lg:px-0 lg:pt-36'
      >
        <div className='m-auto flex w-full max-w-7xl flex-col justify-center px-0 lg:px-6'>
          <div className='flex flex-col gap-6'>
            <h2 className='text-center text-3xl font-normal text-[#40494C] lg:text-4xl'>
              {' '}
              Comece <span className='text-[#1C81A2]'>de graça</span> e evolua
              com a MCD
            </h2>
            <h3 className='m-auto text-center text-xl font-normal text-[#647073] lg:w-[50%] '>
              {' '}
              Nossos honorários{' '}
              <span className='hover:font-semibold hover:text-[#1C81A2]'>
                gratuitos{' '}
              </span>
              refletem nosso compromisso em apoiar empreendedores desde o
              início, fortalecendo parcerias duradouras baseadas em confiança e
              transparência. Ao contratar a MCD, você ganha muitas vantagens
            </h3>
          </div>

         

          <div className=' flex flex-wrap justify-evenly gap-10 py-16 '>

            <div className=' flex max-w-[350px] flex-col gap-6 bg-[#EAEAEA] px-10 py-10'>
              <Image
                src='/icons/give-money.webp'
                width={53}
                height={53}
                alt='icon'
                className='flex-0 flex-shrink-0 flex-grow-0'
              />
              <h4 className='text-xl font-medium text-[#40494C] lg:text-xl '>
                Abertura de Empresa com honorários gratuitos*
               </h4>
              <p className='text-base text-[#647073]'>
                Simplificamos o processo de abertura de empresas ao oferecer
                honorários gratuitos, permitindo que empreendedores iniciem seus
                negócios sem preocupações financeiras adicionais.
              </p>
            </div>

            <div className=' flex max-w-[350px] flex-col gap-6 bg-[#EAEAEA] px-10 py-10'>
              <Image
                src='/icons/savings.webp'
                width={53}
                height={53}
                alt='icon'
                className='flex-0 flex-shrink-0 flex-grow-0'
              />
              <h4 className='text-xl font-medium text-[#40494C] lg:text-xl '>
                Primeira Mensalidade de Serviços Contábeis Gratuita*
              </h4>
              <p className='text-base text-[#647073]'>
                Incentivamos uma transição suave para nossos serviços contábeis
                ao oferecer a primeira mensalidade gratuitamente, garantindo
                qualidade e economia desde o primeiro dia de colaboração.
              </p>
            </div>

            <div className=' flex max-w-[350px] flex-col gap-6 bg-[#EAEAEA] px-10 py-10'>
              <Image
                src='/icons/data-analysis.webp'
                width={53}
                height={53}
                alt='icon'
                className='flex-0 flex-shrink-0 flex-grow-0'
              />
              <h4 className='text-xl font-medium text-[#40494C] lg:text-xl '>
                Diagnóstico Preliminar Gratuito* para Consultorias
              </h4>
              <p className='text-base text-[#647073]'>
                Nosso processo de consultoria começa com um diagnóstico
                preliminar gratuito, fornecendo uma avaliação inicial detalhada
                dos desafios e oportunidades específicos enfrentados por cada
                cliente.
              </p>
            </div>
          </div>
        </div>

        <small className='flex items-center justify-center py-8 text-gray-500'>
          *Todas as gratuidades oferecidas no site são para empresas do Simples
          Nacional com contrato de prestação de serviços com a MCD de no mínimo
          12 meses.
        </small>

      </section>

      {/* /////////////////////// */}

      <section className='h-full w-full px-6 pb-16 lg:px-0'>
        <div className='m-auto flex w-full  max-w-7xl flex-col justify-center  px-0 lg:px-6 '>
          <div className='flex flex-col gap-6'>
            <h2 className='text-center text-3xl font-normal text-[#40494C] lg:text-4xl'>
              <span className='text-[#1C81A2]'>Agilidade </span> na gestão e{' '}
              <span className='text-[#1C81A2]'>zero burocracia </span> pra sua
              empresa
            </h2>
            <h3 className='m-auto text-center text-xl font-normal text-[#647073] lg:w-[70%] '>
              {' '}
              Usamos sistemas de ponta para agilizar e organizar toda a papelada
              contábil, fiscal e financeira. Assim você não precisa encher sua
              agenda de burocracia e tem mais tempo pra cuidar do seu negócio.
            </h3>
          </div>
        </div>

        <div className='m-auto flex w-full max-w-7xl flex-wrap items-start justify-center gap-6 pt-20 sm:flex-nowrap'>
          <div className='flex max-w-[500px] flex-col'>
            <div className=' flex w-full flex-col gap-6  px-10 py-10'>
              <Image
                src='/icons/dashboard.webp'
                width={53}
                height={53}
                alt='icon'
                className='flex-0 flex-shrink-0 flex-grow-0'
              />
              <h4 className='text-xl font-medium text-[#40494C] lg:text-xl '>
                Envio e Recebimento de Documentação Através de Softwares
                Modernos
              </h4>
              <p className='text-base text-[#647073]'>
                Facilitamos o fluxo de trabalho de nossos clientes por meio de
                softwares modernos que possibilitam o envio e recebimento de
                documentação de forma rápida, segura e eficiente, já que reduz
                significativamente o tempo necessário para tarefas
                administrativas.
              </p>
            </div>
            <div className=' flex  flex-col gap-6  px-10 py-10'>
              <Image
                src='/icons/growth-chart.webp'
                width={53}
                height={53}
                alt='icon'
                className='flex-0 flex-shrink-0 flex-grow-0'
              />
              <h4 className='text-xl font-medium text-[#40494C] lg:text-xl '>
                BPO Financeiro para Destravar o Empresário da Burocracia do
                Dia-a-Dia
              </h4>
              <p className='text-base text-[#647073]'>
                Oferecemos serviços de BPO Financeiro que liberam os empresários
                das tarefas burocráticas do dia-a-dia, permitindo-lhes focar em
                áreas estratégicas e impulsionar o crescimento de seus negócios.
              </p>
            </div>
            <div className=' flex flex-col gap-6  px-10 py-10'>
              <Image
                src='/icons/warning.webp'
                width={53}
                height={53}
                alt='icon'
                className='flex-0 flex-shrink-0 flex-grow-0 '
              />
              <h4 className='text-xl font-medium text-[#40494C] lg:text-xl '>
                Lembretes automatizados para seus compromissos
              </h4>
              <p className='text-base text-[#647073]'>
                Por meio de softwares, você receberá avisos diretamente no seu
                e-mail para manter todas as burocracias fiscais e tributárias
                rotineiras em dia. Cliente da MCD não precisa se preocupar com
                um monte de datas e listas de documentos, nós organizamos e te
                lembramos de tudo.
              </p>
            </div>
          </div>
          <Image
            width={538}
            height={806}
            alt=''
            src='/images/foto-solutions-1.webp'
            className='max-w-[250px] lg:sticky  lg:top-0 lg:max-w-[400px] lg:pt-28'
          />
        </div>
      </section>

      {/* ////////////// */}

      <section
        id='assessoria'
        className='h-full w-full px-6 py-20 pt-36 lg:px-0'
      >
        <div className='m-auto flex w-full  max-w-7xl flex-col justify-center  px-0 lg:px-6 '>
          <div className='flex flex-col gap-6'>
            <h2 className='text-center text-3xl font-normal text-[#40494C] lg:text-4xl'>
              <span className='text-[#1C81A2]'>Assessoria especializada </span>{' '}
              para sua empresa ir mais longe
            </h2>
            <h3 className='m-auto text-center text-xl font-normal text-[#647073] lg:w-[70%] '>
              {' '}
              Com mais de 10 anos de experiência de mercado, a MCD ajuda
              empresários a evitar armadilhas comuns e maximizar as chances de
              crescimento sustentável.
            </h3>
          </div>
        </div>

        <div className='m-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 '>
          <div className='order-1 col-span-1 row-span-1 m-auto flex max-w-[500px]   flex-col gap-6 px-10 py-10'>
            <Image
              src='/icons/research.webp'
              width={53}
              height={53}
              alt='icon'
              className='flex-0 flex-shrink-0 flex-grow-0 '
            />
            <h4 className='text-xl font-medium text-[#40494C] lg:text-xl '>
              Estudos de Viabilidade
            </h4>
            <p className='text-base text-[#647073]'>
              Nossos estudos de viabilidade são elaborados de forma minuciosa,
              fornecendo análises detalhadas que permitem uma tomada de decisão
              embasada e segura em relação a investimentos e empreendimentos.
            </p>
          </div>

          <div className='order-3 col-span-1 row-span-1 m-auto flex max-w-[500px] flex-col gap-6  px-10 py-10'>
            <Image
              src='/icons/handshake.webp'
              width={53}
              height={53}
              alt='icon'
              className='flex-0 flex-shrink-0 flex-grow-0 '
            />
            <h4 className='text-xl font-medium text-[#40494C] lg:text-xl '>
              Assessoria Tributária, Administrativa e Financeira
            </h4>
            <p className='text-base text-[#647073]'>
              Oferecemos uma assessoria completa que abrange aspectos
              tributários, administrativos e financeiros, fornecendo insights
              estratégicos para otimizar recursos e garantir conformidade legal.
            </p>
          </div>

          <div className='order-4 col-span-1 row-span-1 m-auto flex max-w-[500px] flex-col gap-6  px-10 py-10'>
            <Image
              src='/icons/growth.webp'
              width={53}
              height={53}
              alt='icon'
              className='flex-0 flex-shrink-0 flex-grow-0 '
            />
            <h4 className='text-xl font-medium text-[#40494C] lg:text-xl '>
              Conhecimento de Medidas Governamentais que Possam Impactar seu
              Negócio
            </h4>
            <p className='text-base text-[#647073]'>
              Mantemo-nos atualizados sobre as medidas governamentais
              relevantes, fornecendo orientações proativas para ajudar nossos
              clientes a entender e se adaptar às mudanças regulatórias que
              possam afetar seus negócios.
            </p>
          </div>

          <div className=' order-5 col-span-1 row-span-1 m-auto flex max-w-[500px] flex-col gap-6 px-10 py-10'>
            <Image
              src='/icons/team-management.webp'
              width={53}
              height={53}
              alt='icon'
              className='flex-0 flex-shrink-0 flex-grow-0 '
            />
            <h4 className='text-xl font-medium text-[#40494C] lg:text-xl '>
              Recomendação de Parcerias Especializadas
            </h4>
            <p className='text-base text-[#647073]'>
              Expandimos o leque de soluções disponíveis para nossos clientes
              por meio de recomendações de parcerias especializadas, garantindo
              acesso a expertise diversificada e altamente qualificada.
            </p>
          </div>

          <div className='order-2 row-span-2 m-auto'>
            <Image
              src='/images/foto-solutions-2.webp'
              width={660}
              height={547}
              alt=''
            />
          </div>
        </div>
      </section>

      {/* ////////////////////// */}

      <section className='h-full w-full px-6 pt-20 lg:px-0'>
        <div className='m-auto flex w-full  max-w-7xl flex-col justify-center  px-0 lg:px-6 '>
          <div className='flex flex-col gap-6'>
            <h2 className='text-center text-3xl font-normal text-[#40494C] lg:text-4xl'>
              <span className='text-[#1C81A2]'>
                Nossos especialistas recomendam{' '}
              </span>{' '}
            </h2>
            <h3 className='m-auto text-center text-xl font-normal text-[#647073] lg:w-[70%] '>
              {' '}
              Três recomendações empresariais cruciais para o sucesso de
              qualquer empreendimento são a elaboração de um plano de negócios
              abrangente, um planejamento financeiro sólido e uma eficaz gestão
              do negócio.
            </h3>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center py-20 lg:py-32'>
          <div className='flex flex-wrap justify-center gap-16 lg:flex-nowrap'>
            <div className='flex flex-col items-center'>
              <Image
                src='/icons/step-one.webp'
                alt='step-one'
                width={78.41}
                height={87.18}
              />
              <h4 className='font-primary  text-center text-2xl font-semibold text-[#40494C]'>
                Plano de negócio
              </h4>
            </div>

            <div className='flex max-w-[600px] flex-col gap-4 text-base text-[#647073]'>
              {' '}
              <p>
                O sucesso dos negócios começa nos{' '}
                <span className='font-semibold text-[#1C81A2]'>
                  estudos iniciais
                </span>{' '}
                , antes da abertura da empresa–- denominado{' '}
                <span className='font-semibold text-[#1C81A2]'>
                  Plano de Negócio
                </span>
                , todo empreendedor deve elaborar. Se você quer abrir uma
                empresa e ainda não fez nenhum estudo, a MCD pode te ajudar.
                <br />
                <br />
                Não seja vítima das emoções ou muito menos do “achismo”. Todo
                investimento tem que preceder de estudos para analise e
                avalições de sua viabilidade para tornar se realidade.
              </p>
              <p>
                Através do{' '}
                <span className='font-semibold text-[#1C81A2]'>
                  Plano de Negócio
                </span>
                , você vai analisar e avaliar o cenário onde seu dinheiro será
                investido e se os lucros serão satisfatórios. Você tem que
                conhecer previamente algumas variáveis do negócio, como:{' '}
              </p>
              <ul className='list-outside list-disc flex-col gap-4 marker:text-[#F7C027]'>
                <li className=''>
                  Nível de demanda dos seus produtos ou serviços na região
                  pretendida
                </li>
                <li>Fatia de mercado pretendida</li>
                <li>
                  Comportamento da concorrência; fornecedores e suas práticas de
                  mercado;
                </li>
                <li>
                  Valor ideal dos investimentos a ser aplicado e tempo de
                  retorno
                </li>
                <li>Disponibilidade e custo da mão de obra necessária, etc.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-wrap justify-center  gap-16 lg:flex-nowrap'>
            <div className=' flex w-[198px] flex-col items-center'>
              <Image
                src='/icons/step-two.webp'
                alt='step-one'
                width={78.41}
                height={87.18}
              />
              <h4 className='font-primary text-center text-2xl font-semibold text-[#40494C]'>
                Planejamento empresarial
              </h4>
            </div>

            <div className='flex max-w-[600px] flex-col gap-4 text-base text-[#647073]'>
              {' '}
              <p className=''>
                Através dos números que servirão de base na aprovação do Plano
                para abrir o Negócio, deve ser elaborado{' '}
                <span className='font-semibold text-[#1C81A2]'>
                  Orçamento empresarial
                </span>
              </p>
              <p>
                Todas as receitas e todas as despesas devem ser registradas. A
                revisão deve ser feita de acordo com novas metas ou quando
                houver impactos por alguma causa. O período deve ser de dois
                anos.
              </p>
              <p>
                A movimentação financeira da empresa deve ser registrada em
                sistemas que permitam o acompanhamento em tempo real através dos
                seguintes indicadores: Fluxo de caixa; Contas a pagar/receber e
                DRE gerencial.
              </p>
              <p>
                No mercado há inúmeros sistemas, mas recomendamos a{' '}
                <a
                  href='https://www.nibo.com.br/'
                  target='_blank'
                  className='font-semibold text-[#1C81A2] hover:underline'
                >
                  Nibo
                </a>{' '}
                por se tratar de um parceiro e de simples operação.
              </p>
              <br />
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center pt-20 lg:pt-32'>
          <div className='flex flex-wrap justify-center  gap-16 lg:flex-nowrap'>
            <div className='flex w-[200px] flex-col items-center'>
              <Image
                src='/icons/step-three.webp'
                alt='step-one'
                width={78.41}
                height={87.18}
              />
              <h4 className='font-primary  text-center text-2xl font-semibold text-[#40494C]'>
                Operação do negócio
              </h4>
            </div>

            <div className='flex max-w-[600px] flex-col gap-4 text-base text-[#647073]'>
              {' '}
              <p className=''>
                Primeira atitude, mãos firmes na engrenagem. Nenhuma despesa
                deve ser contratada ou realizada se não houver previsão
                orçamentaria. Caso surja algo sem previsão, tem que avaliar o
                custo/benefício, do contrário, não faça, não gaste.
              </p>
              <p>
                Segundo, seja justo, nada de “bonzinho”. O mercado não tem
                coração, ele é cruel, não perdoa falhas. Faça cumprir as regras
                e os procedimentos – os dirigentes tem que ser exemplos. Todo
                resultado, é o resultado das ações dos dirigentes.
              </p>
              <p>
                Intercorrências devem ser investigadas, analisadas, avaliadas e
                tomada as ações imediatas. Seja ágil, o mercado não espera, seu
                concorrente te afunda e clientes não pagam por incompetências.
              </p>
              <p>
                Seja determinado nas avaliações do cumprimento de metas.
                Acompanhamentos diários, fechamentos mensais, análises e
                avaliações dos indicadores devem ser tratados em reuniões com
                todos os níveis. Faça isso rigorosamente nos prazos certos e
                veja o crescimento da sua empresa.
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>

      {/* /////////////// */}
      <section className='relative   flex h-[400px] w-full border-2 border-t-slate-200 bg-white lg:mt-20 lg:h-96 lg:items-center lg:justify-center'>
        <div className='flex h-full w-full max-w-7xl items-center px-6 lg:h-auto lg:px-14'>
          <h3 className='font-primary w-full text-4xl font-normal text-[#40494C] lg:w-[60%]'>
            Nós cuidamos da{' '}
            <span className='font-primary font-semibold '>
              saúde da sua empresa
            </span>{' '}
            para que ela possa{' '}
            <span className='font-primary font-semibold '>prosperar</span>{' '}
          </h3>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/svg/patterns_MCD-02.svg'
          alt=''
          className='absolute bottom-0 right-0 h-[300px] lg:h-full'
        />
      </section>
      <ContactSection />
      <BlogSection />
      <CustomFooter />
    </main>
  );
}
