import { Metadata } from 'next';

import SimpleFaq, { FaqItem } from '@/components/FAQ/SimpleFaq';
import CustomFooter from '@/components/Footer/CustomFooter';
import LeadForm from '@/components/forms/LeadForm';
import NavBar from '@/components/navbar/Navbar';
import JsonLd from '@/components/seo/JsonLd';

import { company, whatsappLink } from '@/constant/company';

export const metadata: Metadata = {
  title: 'Simulação Simples Nacional 2027',
  description:
    'Empresas do Simples escolhem como recolher IBS e CBS no 1º semestre de 2027, com opção de cancelamento de 3/11 a 20/12/2026. Simulamos os dois cenários para a sua empresa.',
  alternates: { canonical: '/simulacao-simples-2027' },
};

const faq: FaqItem[] = [
  {
    q: 'O que é a simulação do Simples 2027?',
    a: 'Comparamos os dois cenários de recolhimento de IBS e CBS dentro ou fora do DAS para a sua empresa e mostramos o que muda em preço, créditos e clientes.',
  },
  {
    q: 'Até quando a decisão pode ser feita?',
    a: 'Empresas do Simples puderam escolher o modelo para o 1º semestre de 2027, e essa opção pode ser cancelada de 3/11 a 20/12/2026. A simulação ajuda a decidir dentro desse período.',
  },
  {
    q: 'A simulação garante economia?',
    a: 'Não. Apresentamos cenários e pontos de atenção. Os resultados dependem da realidade de cada empresa, respeitando o Código de Ética do CFC.',
  },
  {
    q: 'Preciso ser cliente da MCD?',
    a: 'Não. A simulação está aberta a empresas do Simples Nacional de todo o Brasil.',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Simulação Simples Nacional 2027 - IBS e CBS',
  serviceType: 'Simulação tributária',
  description:
    'Simulação dos cenários de recolhimento de IBS e CBS no Simples Nacional para o 1º semestre de 2027, comparando preço, créditos e clientes.',
  url: `${company.url}/simulacao-simples-2027`,
  areaServed: { '@type': 'Country', name: 'Brasil' },
  provider: {
    '@type': 'AccountingService',
    name: company.name,
    url: company.url,
    telephone: company.phone,
  },
};

export default function SimulacaoSimplesPage() {
  return (
    <main className='m-0 flex flex-col bg-[#F2F2F2]'>
      <JsonLd data={serviceJsonLd} />
      <NavBar />

      <section className='w-full bg-[#1C81A2] px-6 pb-16 pt-[120px] lg:pb-24 lg:pt-[170px]'>
        <div className='m-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2 lg:gap-16'>
          <div className='text-white'>
            <span className='inline-block rounded-full bg-[#F7C027] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#40494C]'>
              Por tempo limitado
            </span>
            <h1 className='font-primary pt-4 text-3xl font-semibold leading-tight lg:text-5xl'>
              Simples Nacional em 2027: IBS e CBS dentro ou fora do DAS?
            </h1>
            <p className='pt-5 text-base leading-relaxed text-white/90 lg:text-lg'>
              Empresas do Simples escolheram como recolher IBS e CBS no 1º
              semestre de 2027, e essa opção pode ser cancelada de 3/11 a
              20/12/2026. Simulamos os dois cenários para a sua empresa e
              mostramos o que muda em preço, créditos e clientes.
            </p>
            <a
              href={whatsappLink('Quero a simulação do Simples 2027')}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-8 inline-block rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1D81A2] transition-colors hover:bg-[#F2F2F2]'
            >
              Prefiro falar no WhatsApp
            </a>
          </div>

          <LeadForm
            oferta='Simulação Simples 2027'
            cta='Quero a simulação'
          />
        </div>
      </section>

      <SimpleFaq
        items={faq}
        title='Perguntas frequentes'
        subtitle='Sobre a simulação do Simples 2027'
      />

      <CustomFooter />
    </main>
  );
}
