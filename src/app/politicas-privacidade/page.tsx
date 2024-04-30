import CustomFooter from '@/components/Footer/CustomFooter';
import NavBar from '@/components/navbar/Navbar';

export default function PoliticasPrivacidade() {
  return (
    <main className='m-0 flex flex-col bg-[#s] '>
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

      <section className='relative flex h-[350px] w-full items-center justify-center bg-[#1C81A2] pt-14 lg:flex lg:h-[350px] lg:px-8'>
        <div className='z-[80] flex h-full max-w-7xl flex-col items-center justify-center gap-4 px-6 lg:left-16 lg:top-[20px] lg:gap-8 lg:pl-5 lg:pt-0  xl:max-w-7xl'>
          <h1 className='font-primary w-full text-center text-3xl font-bold text-white lg:mt-0  lg:text-4xl lg:font-normal lg:leading-[60.51px] '>
            Políticas de Privacidade
          </h1>
        </div>
      </section>

      <section className='m-auto flex w-full max-w-3xl flex-col px-6 pt-20'>
        <p>
          {' '}
          <span className='block font-bold text-gray-600'>
            {' '}
            Olá, seja bem-vindo(a)!
          </span>
          <br />
          Nós da MCD valorizamos a privacidade e queremos contribuir para a
          proteção de dados pessoais. Por essa razão, a seguir apresentamos
          nossa Política de Privacidade, para que você saiba como fazemos uso de
          seus dados pessoais.
        </p>
        <br />
        <p>
          <span className='font-bold text-gray-600'>
            Controladora de Dados:{' '}
          </span>{' '}
          Mcd Contabil Ltda (“MCD”), inscrita no CNPJ sob o n.º
          23.104.282/0002-53, endereço: Rua General Andrade Neves, 9 - Sala 501
          Centro, Niterói, CEP 24210-000.
        </p>
        <br />
        <p className='font-bold text-gray-600'>O que faz a MCD? </p>
        <br />
        <p>
          {' '}
          Somos um escritório de assessoria contábil que ajuda pequenas e médias
          empresas a se regularizarem e a crescerem com qualidade.
        </p>
        <br />
        <p className='font-bold text-gray-600'>
          Como funciona o tratamento de dados por parte da MCD?
        </p>
        <br />
        <p>
          Como toda a empresa, para realizar nossas atividades, precisamos
          coletar e tratar algumas informações que são consideradas pela
          legislação como dados pessoais. Para deixá-lo informado acerca do modo
          como fazemos o tratamento desses dados, preparamos o quadro resumo a
          seguir, com as principais perguntas que você pode ter. Caso queira
          obter maiores informações sobre alguns dos tópicos, basta entrar em
          contato com o responsável técnico cujo e-mail se encontra no final da
          página.
        </p>
        <br />
        <p className='font-bold text-gray-600'>
          Quais Dados Pessoais Coletamos?
        </p>
        <br />
        <p>
          Em síntese, caso você utilize algum de nossos formulários, coletamos
          os seguintes dados pessoais para realização de cadastro, mas não
          restritos a:{' '}
        </p>
        <br />
        <ul>
          <li>Nome</li>
          <li>E-mail</li>
          <li>Número de telefone/celular</li>
        </ul>
        <br />
        <p>
          Para além dessas situações, poderemos utilizar seus dados pessoais de
          forma anonimizada (ou seja, de maneira que não leve à identificação de
          ninguém), com a finalidade de produzir relatórios analíticos de
          inteligência de negócio, a fim de melhorar nossos serviços.
        </p>
        <br />
        <p className='font-bold text-gray-600'>
          Para que utilizamos os Dados Pessoais?
        </p>
        <br />
        <p>
          Em síntese, Em síntese, utilizamos os dados pessoais coletados para
          finalidades ligadas à prestação de nossos serviços e às empresas que
          nos contratam. Nesse contexto, os dados pessoais nos são úteis para:
        </p>
        <br />
        <ul>
          <li>Customizar a experiência do usuário;</li>
          <li>Manutenção e administração de registros de clientes e leads;</li>
          <li>Publicidade e marketing;</li>
          <li>Garantir o acesso ao site;</li>
          <li>Analytics e pesquisa de mercado;</li>
          <li>Compliance & solução de conflitos;</li>
          <li>Contatar os usuários;</li>
        </ul>
        <br />
        <p className='font-bold text-gray-600'>
          Como protegemos os Dados Pessoais?
        </p>
        <br />
        <p>
          A MCD implementa todas as medidas de segurança que estão ao nosso
          alcance para proteger os seus dados pessoais de acessos não
          autorizados e de situações acidentais ou ilícitas de destruição,
          perda, alteração, comunicação ou difusão. Como por exemplo: Temos uma
          política interna de proteção de dados, que se aplica a todos aqueles
          que tratam dados pessoais em nosso nome. Possuímos certificação SSL
          (Security Socket Layer) que garante a proteção por criptografia dos
          dados e chave de segurança utilizando o protocolo SSL de 128 bits.
        </p>
        <br />
        <p className='font-bold text-gray-600'>
          Por quanto tempo guardamos os Dados Pessoais?
        </p>
        <br />
        <p>
          A retenção de dados pessoais pela MCD respeita as seguintes
          diretrizes: Apenas são mantidos dados pessoais estritamente
          necessários para o cumprimento das finalidades do tratamento. Assim,
          nos livramos de dados pessoais desnecessários ou excessivos. Sem
          prejuízo, preservamos as informações necessárias para o cumprimento de
          obrigações legais e regulatórias ou o exercício de nossos direitos em
          demandas administrativas, judiciais ou arbitrais.
        </p>
        <br />
        <p>
          <span className='font-bold text-gray-600'>
            Quais são os direitos relacionados aos Dados Pessoais?{' '}
          </span>
        </p>
        <br />
        <p>
          Nos orgulhamos de ser uma empresa que leva a sério os direitos dos
          titulares de dados pessoais. Por isso, garantimos que os direitos
          sobre seus dados pessoais previstos na lei (art. 18, Lei Federal n.
          13.709/2018) possam ser plenamente exercidos, respeitados os limites
          aplicáveis.
        </p>
        <br />
        <p>
          <span className='font-bold text-gray-600'>Acesso aos dados: </span>{' '}
          qualquer um pode requerer o acesso aos seus dados pessoais armazenados
          por nós, bem como informações sobre possível o compartilhamento com
          terceiros.
        </p>
        <p>
          <span className='font-bold text-gray-600'>Correção: </span> caso os
          dados pessoais estejam incorretos, poderá ser feita uma solicitação de
          correção ou atualização.
        </p>
        <p>
          <span className='font-bold text-gray-600'>Exclusão: </span> dados
          fornecidos mediante consentimento podem ser alvo de exclusão. Contudo,
          é possível que, mesmo após o requerimento de exclusão, alguns dados
          pessoais permaneçam armazenados, devido a obrigações legais ou para a
          proteção de interesses nossos ou de nossos clientes.
        </p>
        <p>
          <span className='font-bold text-gray-600'>Oposição: </span> você pode
          se opor ao tratamento de seus dados pessoais por parte da MCD
        </p>
        <p>
          <span className='font-bold text-gray-600'>Portabilidade: </span> para
          que você possa exercer a portabilidade de seus dados pessoais, podemos
          providenciar a você uma cópia de seus dados pessoais em formato de
          leitura comum.
        </p>
        <br />
        <p>
          <span className='font-bold text-gray-600'> Canais de contato </span>
        </p>
        <br />
        <p>
          Em caso de dúvidas e solicitações, entre em contato com o nosso
          Encarregado pelo Tratamento de Dados Pessoais, pelo e-mail e telefone
          abaixo:
        </p>
        <br />
        <p>CARLOS EDUARDO MORAIS DE OLIVEIRA</p>
        <p>eduardo@mcdcontabil.com.br</p>
        <br />
        <p>Obrigado!</p>
        <br />
        <br />
      </section>
      <CustomFooter />
    </main>
  );
}
