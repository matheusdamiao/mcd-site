import * as React from 'react';

interface WelcomeTemplateProps {
  nome: string;
}

export const WelcomeTemplate: React.FC<Readonly<WelcomeTemplateProps>> = ({
  nome,
}) => (
  <div className='text-white'>
    <h3>Bem vindo, {nome}!</h3>
    <p>Obrigado por procurar a MCD Contábil.</p>
    <p>
      Somos especialistas em ajudar empresários a manterem sua empresa saúdavel
      e forte
    </p>
    <p>Em breve um membro da nossa equipe entrará em contato com você</p>
    <p>Equipe MCD</p>
  </div>
);

interface EmailTemplateProps {
  nome: string;
  email: string;
  telefone: string;
}

export const NewLeadTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nome,
  email,
  telefone,
}) => (
  <div className='text-white'>
    <h3>Novo Lead no site</h3>
    <p>Seguem suas informações:</p>
    <p>Nome: {nome || ''}</p>
    <p>Email: {email || ''}</p>
    <p>Telefone: {telefone || ''}</p>
  </div>
);
