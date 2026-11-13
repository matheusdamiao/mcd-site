import * as React from 'react';

export interface OfferLeadProps {
  oferta: string;
  nome: string;
  whatsapp: string;
  email: string;
  cidadeUf: string;
  atividade: string;
  regime: string;
  faturamento: string;
}

export const OfferLeadTemplate: React.FC<Readonly<OfferLeadProps>> = ({
  oferta,
  nome,
  whatsapp,
  email,
  cidadeUf,
  atividade,
  regime,
  faturamento,
}) => (
  <div>
    <h3>Novo lead - {oferta}</h3>
    <p>Seguem as informações enviadas pelo site:</p>
    <p>Nome: {nome}</p>
    <p>WhatsApp: {whatsapp}</p>
    <p>E-mail: {email}</p>
    <p>Cidade/UF: {cidadeUf}</p>
    <p>Atividade da empresa: {atividade}</p>
    <p>Regime atual: {regime}</p>
    <p>Faturamento mensal: {faturamento}</p>
    <p>Oferta: {oferta}</p>
  </div>
);
