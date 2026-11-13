'use client';

import * as React from 'react';

import { trackEvent } from '@/lib/analytics';

type LeadFormProps = {
  oferta: string;
  cta?: string;
};

const initialForm = {
  nome: '',
  whatsapp: '',
  email: '',
  cidadeUf: '',
  atividade: '',
  regime: '',
  faturamento: '',
  consent: false,
};

const regimeOptions = [
  'Simples Nacional',
  'Lucro Presumido',
  'Lucro Real',
  'MEI',
  'Ainda não tenho empresa',
  'Não sei',
];

const faturamentoOptions = [
  'Até R$ 10 mil/mês',
  'De R$ 10 mil a R$ 30 mil/mês',
  'De R$ 30 mil a R$ 100 mil/mês',
  'Acima de R$ 100 mil/mês',
  'Prefiro não informar',
];

export default function LeadForm({ oferta, cta = 'Enviar' }: LeadFormProps) {
  const [form, setForm] = React.useState<typeof initialForm>(initialForm);
  const [status, setStatus] = React.useState<
    'idle' | 'loading' | 'sent' | 'error'
  >('idle');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    const nextValue =
      type === 'checkbox'
        ? (event.target as HTMLInputElement).checked
        : value;
    setForm((prev) => ({ ...prev, [name]: nextValue }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, oferta }),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar');
      }

      trackEvent('lead_submit', { oferta });
      setForm(initialForm);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-[#1D81A2] focus:outline-none focus:ring-1 focus:ring-[#1D81A2]';
  const labelClass = 'text-sm font-medium text-[#40494C]';

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full flex-col gap-4 rounded-[24px] bg-white p-6 shadow-md lg:p-8'
    >
      <div>
        <h2 className='text-lg font-semibold text-[#40494C] lg:text-xl'>
          Preencha seus dados
        </h2>
        <p className='pt-1 text-sm text-[#647073]'>
          Entramos em contato para conversar sobre a sua empresa.
        </p>
      </div>

      <div className='flex flex-col gap-1'>
        <label className={labelClass} htmlFor={`${oferta}-nome`}>
          Nome
        </label>
        <input
          id={`${oferta}-nome`}
          name='nome'
          type='text'
          required
          value={form.nome}
          onChange={handleChange}
          className={inputClass}
          autoComplete='name'
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label className={labelClass} htmlFor={`${oferta}-whatsapp`}>
          WhatsApp
        </label>
        <input
          id={`${oferta}-whatsapp`}
          name='whatsapp'
          type='tel'
          required
          value={form.whatsapp}
          onChange={handleChange}
          className={inputClass}
          placeholder='(21) 90000-0000'
          autoComplete='tel'
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label className={labelClass} htmlFor={`${oferta}-email`}>
          E-mail
        </label>
        <input
          id={`${oferta}-email`}
          name='email'
          type='email'
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          autoComplete='email'
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label className={labelClass} htmlFor={`${oferta}-cidade`}>
          Cidade/UF
        </label>
        <input
          id={`${oferta}-cidade`}
          name='cidadeUf'
          type='text'
          required
          value={form.cidadeUf}
          onChange={handleChange}
          className={inputClass}
          placeholder='Ex.: Niterói/RJ'
          autoComplete='address-level2'
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label className={labelClass} htmlFor={`${oferta}-atividade`}>
          Atividade da empresa
        </label>
        <input
          id={`${oferta}-atividade`}
          name='atividade'
          type='text'
          required
          value={form.atividade}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label className={labelClass} htmlFor={`${oferta}-regime`}>
          Regime atual
        </label>
        <select
          id={`${oferta}-regime`}
          name='regime'
          value={form.regime}
          onChange={handleChange}
          className={inputClass}
        >
          <option value=''>Selecione</option>
          {regimeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-col gap-1'>
        <label className={labelClass} htmlFor={`${oferta}-faturamento`}>
          Faixa de faturamento mensal
        </label>
        <select
          id={`${oferta}-faturamento`}
          name='faturamento'
          value={form.faturamento}
          onChange={handleChange}
          className={inputClass}
        >
          <option value=''>Selecione</option>
          {faturamentoOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <label className='flex items-start gap-2 text-xs text-[#647073]'>
        <input
          type='checkbox'
          name='consent'
          required
          checked={form.consent}
          onChange={handleChange}
          className='mt-0.5'
        />
        <span>
          Autorizo o uso dos meus dados para contato sobre esta solicitação,
          conforme a{' '}
          <a
            className='underline'
            href='/politicas-privacidade'
            target='_blank'
            rel='noopener noreferrer'
          >
            Política de Privacidade
          </a>
          .
        </span>
      </label>

      <button
        type='submit'
        disabled={status === 'loading'}
        className='w-full rounded-2xl bg-[#1D81A2] px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-[#3b7a91] disabled:opacity-70'
      >
        {status === 'loading' ? 'Enviando...' : cta}
      </button>

      {status === 'sent' ? (
        <p className='text-center text-sm font-medium text-[#1D81A2]'>
          Recebemos seus dados. Em breve entraremos em contato.
        </p>
      ) : null}
      {status === 'error' ? (
        <p className='text-center text-sm font-medium text-red-600'>
          Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.
        </p>
      ) : null}
    </form>
  );
}
