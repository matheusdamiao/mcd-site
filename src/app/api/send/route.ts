import { NextRequest } from 'next/server';
import { Resend } from 'resend';

import {
  NewLeadTemplate,
  WelcomeTemplate,
} from '@/components/emailTemplates/emailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const name = data.get('nome');
  const email = data.get('email');
  const telefone = data.get('telefone');

  try {
    await resend.emails.send({
      from: 'MCD Contábil - MSG Automática <ti@mcdcontabil.com.br>',
      to: [`${email}`],
      bcc: ['matheus.damiaoliveira@gmail.com', 'eduardo@mcdcontabil.com.br'],
      subject: 'Bem-vindo a MCD Contábil',
      react: WelcomeTemplate({ nome: `${name}` }) as React.ReactElement,
    });

    await resend.emails.send({
      from: 'MCD Contábil - Novo Lead <ti@mcdcontabil.com.br>',
      to: ['eduardo@mcdcontabil.com.br', 'ti@mcdcontabil.com.br'],
      bcc: ['matheus.damiaoliveira@gmail.com'],
      subject: 'Novo lead no site',
      react: NewLeadTemplate({
        nome: `${name}`,
        email: `${email}`,
        telefone: `${telefone}`,
      }) as React.ReactElement,
    });

    return new Response();
  } catch (error) {
    // return Response.json({ error });
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
