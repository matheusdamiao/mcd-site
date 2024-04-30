import CustomFooter from '@/components/Footer/CustomFooter';
import NavBar from '@/components/navbar/Navbar';

export default function TermosDeUso() {
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
            Termos de Uso
          </h1>
        </div>
      </section>

      <section className='m-auto flex w-full max-w-3xl flex-col px-6 pt-20'>
        <p>
          {' '}
          <br />O uso desta plataforma digital por Mcd Contabil Ltda ("MCD")
          está condicionado à aceitação e cumprimento aos Termos e Condições de
          Uso (“Termos de Uso”) descritos abaixo, os quais estão adequados às
          exigências contidas na Lei n. 10.406/2002 (“Código Civil Brasileiro”),
          na Lei n. 13.709/2018 (“LGPD”), na Lei n. 12.965/2014 (“Marco Civil da
          Internet”) e em demais legislações pertinentes.
        </p>
        <br />
        <p>
          Estes Termos de Uso, junto de nossas Políticas de Privacidade,
          Constituem o acordo legal realizado entre você e Mcd Contabil Ltda
          ("MCD"),inscrita no CNPJ sob o n.º 23.104.282/0002-53, endereço: Rua
          General Andrade Neves, 9 - Sala 501 Centro, Niterói, CEP 24210-000,
          para utilização e acesso ao site da Mcd Contabil Ltda ("MCD"), bem
          como a qualquer aplicação, produto ou serviço relacionado a esta.
        </p>
        <br />
        <p>
          Nossa empresa poderá lhe fornecer os seguintes serviços: Atividades de
          contabilidade; Atividades de consultoria e auditoria contábil e
          tributária; Atividades de consultoria em gestão empresarial, exceto
          consultoria técnica específica; Serviços combinados de escritório e
          apoio administrativo; Preparação de documentos e serviços
          especializados de apoio administrativo não especificados
          anteriormente; Outras atividades de ensino não especificadas
          anteriormente
        </p>
        <br />
        <p>
          {' '}
          Ao acessar e utilizar nossos serviços, você declara que leu, entendeu
          e concorda com estes Termos de Uso, Políticas de Privacidade e demais
          regras expostas em nosso site.Na hipótese de você não concordar com as
          regras dispostas nestes Termos de Uso, solicitamos, gentilmente, que
          deixe de utilizar nosso site e serviços imediatamente.
        </p>
        <br />
        <p>
          Eventualmente, podemos realizar alterações ou modificações neste
          documento. A versão atualizada dos Termos de Uso sempre será indicada
          com a data da última revisão para sua melhor visualização no início do
          documento. Sendo você o responsável por revisar estes Termos de Uso de
          tempos em tempos, a fim de verificar se ainda está de acordo com todas
          as nossas regras. Para que, na hipótese de você não concordar com as
          alterações ou modificações, você poderá, a qualquer momento, solicitar
          o cancelamento de sua conta ou deixar de utilizar nosso site e
          serviços, conforme previsto.
        </p>
        <br />
        <p className='font-bold text-gray-600'>REGISTRO DE USUÁRIO </p>
        <br />
        <p>
          {' '}
          Para a utilização da plataforma, o Usuário – pessoa física ou jurídica
          que esteja em pleno e total gozo da capacidade civil, bem como esteja
          apto à prática de todo e qualquer ato necessário à validade das
          solicitações de serviços requeridas, nos termos da legislação
          aplicável – deverá realizar seu cadastro na plataforma. Ao se
          cadastrar, o Usuário se compromete a fornecer informações verídicas,
          completas e atualizadas, sob pena das consequências jurídicas e legais
          da apresentação de informações falsas. O login e a senha criados pelo
          Usuário são pessoais e intransferíveis, sendo o Usuário seu único e
          exclusivo responsável por mantê-las em segurança e sigilo, evitando,
          pois, o uso não autorizado de seu Cadastro por terceiros.
        </p>
        <br />
        <p className='font-bold text-gray-600'>SERVIÇOS</p>
        <br />
        <p>
          Fazemos todos os esforços para exibir com a maior precisão possível
          Todas as características, especificações e detalhes dos nossos
          produtos disponíveis no Site e/ou aplicativo. No entanto, não
          garantimos que os recursos estejam atuais ou livres de outros erros.
          Os produtos estão sujeitos a disponibilidade, e não podemos garantir
          que as modalidades de pagamento sempre estarão disponíveis. Por fim,
          nós nos reservamos o direito de descontinuar qualquer produto e/ou
          serviço a qualquer momento por qualquer motivo bem como alterar
          preços.
        </p>
        <br />
        <p className='font-bold text-gray-600'>REGRAS DE UTILIZAÇÃO DO SITE</p>
        <br />
        <p>
          Ao acessar nosso site, você está obrigado a utilizá-lo respeitando e
          observando estes Termos e Condições de Uso, bem como a legislação
          vigente, os costumes e a ordem pública. Desta forma, você concorda que
          não poderá: lesar direitos de terceiros, independentemente de sua
          natureza, em qualquer momento, inclusive no decorrer do uso do site;
          executar atos que limitem ou impeçam o acesso e a utilização do site,
          em condições adequadas, aos demais usuários; acessar ilicitamente o
          site ou sistemas informáticos de terceiros relacionados ao site ou à
          MCD sob qualquer meio ou forma; difundir programas ou vírus
          informáticos suscetíveis de causar danos de qualquer natureza,
          inclusive em equipamentos e sistemas da MCD ou de terceiros; realizar
          quaisquer atos que de alguma forma possam implicar qualquer prejuízo
          ou dano à MCD ou a outros usuários;
        </p>
        <br />
        <p className='font-bold text-gray-600'>MÍDIA SOCIAL</p>
        <br />
        <p>
          Como parte da funcionalidade desta plataforma, você pode se registrar
          através de sua conta de mídia social (“Conta de Terceiro”): (1)
          fornecendo suas informações de login através de nossa plataforma; ou
          (2) permitindo-nos acessar sua conta , conforme autorizado pelos
          termos e condições aplicáveis que regem o uso da mídia social
          utilizada. Você declara e garante que tem o direito de divulgar as
          informações de login da “conta de terceiro” utilizada para nós e/ou
          nos conceder acesso à ela, sem violação de qualquer um dos termos e
          condições que regem o uso dessa mídia social e sem nos obrigar a pagar
          quaisquer taxas ou nos sujeitar a quaisquer limitações de uso impostas
          pelo provedor de serviços terceirizado. Ao nos conceder acesso a
          quaisquer contas de terceiros, você entende que (1) podemos acessar,
          disponibilizar e armazenar (se aplicável) qualquer conteúdo que você
          forneceu e armazenado em sua conta de terceiros para que esteja
          disponível através desta plataforma digital por meio de sua conta,
          incluindo, sem limitação, quaisquer listas de amigos e (2) podemos
          enviar e receber de sua conta de terceiros informações adicionais, na
          medida em que você for notificado quando vinculá-la à nossa
          plataforma. As contas de terceiros utilizadas estão sujeitas às
          configurações de privacidade que você definiu em tais serviços.
        </p>
        <br />

        <br />
        <p className='font-bold text-gray-600'>
          DAS OBRIGAÇÕES E DEVERES DOS USUÁRIOS
        </p>
        <br />
        <p>
          O usuário declara possuir plena ciência de que, ao utilizar os
          serviços da MCD, deverá se comportar em estrita observância a estes
          Termos de Uso e à Política de Privacidade de nossa empresa,
          respeitando a legislação vigente, a moral e os bons costumes. O
          usuário concorda, ainda, em não utilizar os serviços oferecidos em
          nossa plataforma para fins ilícitos, não lesar os direitos e
          interesses da MCD, de outros usuários e/ou terceiros, ou de qualquer
          forma prejudicar, desativar ou sobrecarregar os serviços, impedindo a
          sua normal utilização pela MCD, outros usuários e/ou terceiros,
          devendo preservar as disposições destes Termos de Uso.
        </p>
        <br />
        <p>
          O usuário concorda em abster-se da prática de quaisquer dos atos
          abaixo descritos: Alterar ou violar, de qualquer forma, os sistemas de
          autenticação, verificação de identidade e/ou de segurança dos
          serviços, redes ou cadastros de usuários e/ou administradores
          responsáveis pelos serviços, incluindo, mas não se limitando a
          tentativas de acessos a dados não destinados ao usuário, tentativa de
          acesso aos serviços ou contas sem autorização expressa para fazê-lo,
          ou tentativa de acesso ou alteração, de qualquer maneira e em qualquer
          nível de segurança, à rede da MCD;
        </p>
        <p>
          Promover, de forma proposital, interrupções, mudanças ou cortes nas
          comunicações do site e/ou nos serviços disponibilizados, bem como,
          efetuar ataques cibernéticos ou similares;
        </p>
        <p>
          Efetuar qualquer tipo de monitoramento que envolva a interceptação de
          informações que não se destinem ao usuário, remeter ou transmitir
          arquivos com vírus ou outras características destrutivas, que possam
          afetar de forma prejudicial a operação de um computador e/ou o bom
          funcionamento do site;
        </p>
        <p>
          Utilizar qualquer programa de computador ou qualquer outra forma que
          induza a erro, com o objetivo de obter vantagens patrimoniais ou
          comerciais em favor do usuário ou de terceiros, não autorizadas pela
          MCD ou em desarmonia com estes Termos de Uso;
        </p>
        <p>
          Efetuar ações que limitem, deneguem ou vetem qualquer usuário de
          acessar o site e utilizar os serviços.
        </p>
        <p>
          O usuário será responsável, na esfera cível e criminal, pelos danos
          patrimoniais e extrapatrimoniais, ou por qualquer outro prejuízo que
          venha a causar à MCD, terceiros e outros usuários, em razão de
          descumprimento ou não de qualquer das disposições preconizadas nestes
          Termos de Uso, ou em quaisquer outros avisos, regulamentos de uso,
          instruções, políticas e/ou regulamentos editados e devidamente
          publicados pela MCD em seu site.
        </p>
        <br />
        <p className='font-bold text-gray-600'>
          DOS LIMITES DA RESPONSABILIDADE PELOS SERVIÇOS PRESTADOS PELA MCD
        </p>
        <br />
        <p>
          A MCD possui contrato com acesso à internet e servidores de terceiros
          para o desenvolvimento dos serviços que se dedica, motivo pelo qual o
          usuário reconhece que os mesmos poderão, eventualmente, estar
          indisponíveis em decorrência de problemas técnicos, falhas na internet
          ou provedor, bem como por qualquer outra razão alheia a atos de MCD,
          incluindo, eventos de caso fortuito ou de força maior. Desse modo, a
          MCD não garante a disponibilidade, de forma contínua e ininterrupta,
          do funcionamento dos serviços prestados.
        </p>
        <p>
          MCD fica isenta de qualquer responsabilidade por danos e prejuízos de
          qualquer natureza que sejam decorrentes, de forma direta ou indireta,
          da interrupção ou suspensão, falha, cessação, falta de disponibilidade
          ou da descontinuação do funcionamento dos serviços prestados.
        </p>
        <p>
          O usuário será o único responsável pelas informações remetidas a MCD e
          pelo cumprimento das obrigações dela decorrentes.
        </p>
        <p>
          Sem prejuízo dos demais direitos previstos em lei, a MCD tem
          resguardado o direito de regresso em face do usuário, em razão de
          quaisquer danos materiais e/ou morais que eventualmente vierem a ser
          demandados contra a MCD, em juízo ou fora dele, ou, ainda, que a MCD
          venha a sofrer, em decorrência do descumprimento de obrigações do
          usuário, resultante dos serviços disponibilizados na plataforma
          digital.
        </p>
        <br />
        <p>
          <span className='font-bold text-gray-600'>
            DA PROPRIEDADE INTELECTUAL E DOS DIREITOS RESERVADOS
          </span>
        </p>
        <br />
        <p>
          Ressaltamos que todos os direitos de propriedade intelectual atinentes
          ao nosso site pertencem a MCD, estejam tais direitos registrados ou
          não.
        </p>
        <p>
          Assim, o Usuário concorda em se abster de pleitear ou reclamar, a
          qualquer tempo, tais direitos, como se fossem de sua titularidade.
        </p>
        <p>
          A MCD é a titular de direitos sobre todos os bancos de dados,
          conteúdos, imagens, softwares utilizados no funcionamento do site,
          amparados de acordo com a legislação aplicável à propriedade
          intelectual e proteção de dados.
        </p>
        <p>
          Os usuários estão cientes e concordam que a MCD é a única e exclusiva
          titular de todos os direitos autorais e de propriedade intelectual
          atinentes à plataforma digital e sobre os produtos e serviços
          prestados, abrangendo, neste sentido, nome de domínio, programação,
          banco de dados, conteúdo, arquivo, funcionalidades, design e outras
          características que se fazem necessárias – respectivos direitos nos
          são amparados por lei.
        </p>
        <p>
          A utilização do nome comercial 'MCD Contábil's, bem como nossos
          produtos e serviços associados ao mesmo, de forma não autorizada
          sofrerá as consequências legais, haja vista a exclusiva titularidade
          que recai sobre nós.
        </p>
        <p>
          Os presentes Termos de Uso não acarretam a cessão ou transferência ao
          usuário de quaisquer direitos relativos ao site, ou, então, qualquer
          parte de seu conteúdo. Entretanto, os usuários estão aptos a navegar
          no site apenas nos estritos termos permitidos nos presentes Termos de
          Uso.
        </p>
        <p>
          É expressamente vedado ao Usuário alterar qualquer funcionalidade do
          site, ou ainda, acessar qualquer parte com o fito de criar produto ou
          serviço concorrente, inclusive que contenha características, funções e
          ideias semelhantes das dispostas em nosso site. É proibida, também, a
          utilização de dispositivo, software ou outro instrumento que permita a
          interferência nas atividades e operações do site ou que tenha como
          objetivo o acesso indevido as informações ou banco de dados deste.
        </p>
        <p>
          Reforçamos que qualquer conduta que viole as leis de propriedade
          intelectual bem como as normas aplicáveis e as expressas vedações
          inseridas nestes Termos de Uso sujeitará o agente às consequências
          legais, incluindo indenização por eventual dano causado.
        </p>
        <p>
          Nosso site, eventualmente, poderá expor determinados links que
          direcionarão para outros sites da rede mundial de computadores, o que
          não implica que referidos sites sejam de nossa propriedade. Assim, a
          MCD não se responsabiliza pelos conteúdos, práticas e serviços
          ofertados nesses outros sites, tendo em vista que não possuímos
          controle sobre o conteúdo dos mesmos.
        </p>
        <br />
        <p>
          <span className='font-bold text-gray-600'>
            SUBMISSÕES DE CONTEÚDO{' '}
          </span>{' '}
        </p>
        <p>
          Você reconhece e concorda que quaisquer perguntas, comentários,
          sugestões, ideias, feedback ou outras informações sobre o site ou
          nossos serviços fornecidas por você a nós não são confidenciais e se
          tornarão nossa propriedade exclusiva. Possuiremos direitos exclusivos,
          incluindo todos os direitos de propriedade intelectual, e teremos o
          direito de uso irrestrito e disseminação destas submissões de conteúdo
          para qualquer propósito legal, comercial ou outro, sem reconhecimento
          ou compensação para você. Você, por meio deste, renuncia a todos os
          direitos morais a qualquer um desses envios e garante que esses envios
          são originais ou que você tem o direito de enviá-los. Você concorda
          que não haverá recurso contra nós por qualquer violação alegada ou
          apropriação indevida de qualquer direito de propriedade em seus
          envios.
        </p>

        <br />
        <p>
          <span className='font-bold text-gray-600'>DA VIGÊNCIA</span>{' '}
        </p>
        <br />
        <p>
          Os presentes Termos de Uso permanecerão vigentes desde o início do
          acesso, utilização ou cadastro do usuário em nosso site, a sua
          respectiva utilização, perdurando enquanto tivermos relação comercial
          com você.
        </p>
        <br />
        <p>
          <span className='font-bold text-gray-600'>
            POLÍTICA DE PRIVACIDADE
          </span>{' '}
        </p>
        <p>
          Nós reconhecemos, nos termos da Política de Privacidade e da
          legislação aplicável, a confidencialidade e segurança das informações
          prestadas pelos Usuários, empenhando-nos em resguardar o seu sigilo,
          salvo por força de lei ou ordem judicial.
        </p>
        <br />
        <p>
          <span className='font-bold text-gray-600'>CONSIDERAÇÕES FINAIS</span>{' '}
        </p>
        <br />
        <p>
          A nulidade total ou parcial de qualquer item destes Termos de Uso não
          afastará o cumprimento da obrigação contida nos demais itens aqui
          presentes. Qualquer omissão ou tolerância da MCD em relação às
          disposições desses Termos e Condições não importará em renúncia,
          novação ou modificação das obrigações do Usuário. Caso tenha qualquer
          dúvida em relação ao presente documento, o USUÁRIO poderá entrar em
          contato através do{' '}
          <span className='underline'>eduardo@mcdcontabil.com.br</span>. Os
          presentes Termos de Uso, bem como a utilização da plataforma digital e
          dos serviços da MCD serão regidos pelas leis em vigência na República
          Federativa do Brasil, sendo estipulado, desde já, o foro da cidade de
          Niterói - RJ como o competente para dirimir quaisquer controvérsias ou
          divergências decorrentes destes Termos de Uso, utilização do site e
          serviços.
        </p>
        <br />
        <br />
        <br />
        <br />
      </section>
      <CustomFooter />
    </main>
  );
}
