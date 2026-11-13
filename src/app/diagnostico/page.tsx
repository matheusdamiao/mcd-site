import { Metadata } from 'next';

import SimpleFaq, { FaqItem } from '@/components/FAQ/SimpleFaq';
import CustomFooter from '@/components/Footer/CustomFooter';
import LeadForm from '@/components/forms/LeadForm';
import NavBar from '@/components/navbar/Navbar';
import JsonLd from '@/components/seo/JsonLd';

import { company, whatsappLink } from '@/constant/company';

export const metadata: Metadata = {
  title: 'Diagnóstico inicial',
  description:
    'Conversa on-line de 30 minutos para analisar o regime tributário, os principais custos e os pontos de atenção da sua empresa. Sem custo, para empresas de todo o Brasil.',
  alternates: { canonical: '/diagnostico' },
};

const faq: FaqItem[] = [
  {
    q: 'O diagnóstico é realmente sem custo?',
    a: 'Sim. A conversa inicial de 30 minutos e o resumo por escrito não têm custo, para empresas de todo o Brasil.',
  },
  {
    q: 'Preciso ter uma empresa aberta?',
    a: 'Não. Atendemos quem já tem CNPJ e também quem está avaliando abrir a empresa ou trocar de regime.',
  },
  {
    q: 'Como funciona a conversa?',
    a: 'É on-line, com duração de cerca de 30 minutos, para entendermos o regime tributário, os principais custos e os pontos de atenção. Depois você recebe um resumo por escrito.',
  },
  {
    q: 'Vocês prometem redução de impostos?',
    a: 'Não. Nosso trabalho é apresentar cenários e pontos de atenção para você decidir com segurança, respeitando o Código de Ética do CFC.',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Diagnóstico inicial',
  serviceType: 'Diagnóstico contábil e tributário',
  description:
    'Conversa on-line de 30 minutos para analisar o regime tributário, os principais custos e os pontos de atenção da empresa, com resumo por escrito.',
  url: `${company.url}/diagnostico`,
  areaServed: { '@type': 'Country', name: 'Brasil' },
  provider: {
    '@type': 'AccountingService',
    name: company.name,
    url: company.url,
    telephone: company.phone,
  },
};

export default function DiagnosticoPage() {
  return (
    <main className='m-0 flex flex-col bg-[#F2F2F2]'>
      <JsonLd data={serviceJsonLd} />
      <NavBar />

      <section className='w-full bg-[#1C81A2] px-6 pb-16 pt-[120px] lg:pb-24 lg:pt-[170px]'>
        <div className='m-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2 lg:gap-16'>
          <div className='text-white'>
            <p className='text-sm font-semibold uppercase tracking-wide text-[#F7C027]'>
              Diagnóstico inicial
            </p>
            <h1 className='font-primary pt-4 text-3xl font-semibold leading-tight lg:text-5xl'>
              Sua empresa está no regime certo?
            </h1>
            <p className='pt-5 text-base leading-relaxed text-white/90 lg:text-lg'>
              Em uma conversa on-line de 30 minutos, analisamos o regime
              tributário, os principais custos e os pontos de atenção da sua
              empresa. Você recebe um resumo por escrito com o que vale
              aprofundar. Sem custo, para empresas de todo o Brasil.
            </p>
            <a
              href={whatsappLink('Quero agendar o diagnóstico inicial')}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-8 inline-block rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1D81A2] transition-colors hover:bg-[#F2F2F2]'
            >
              Prefiro falar no WhatsApp
            </a>
          </div>

          <LeadForm oferta='Diagnóstico inicial' cta='Agendar diagnóstico' />
        </div>
      </section>

      <SimpleFaq
        items={faq}
        title='Perguntas frequentes'
        subtitle='Sobre o diagnóstico inicial'
      />

      <CustomFooter />
    </main>
  );
}
