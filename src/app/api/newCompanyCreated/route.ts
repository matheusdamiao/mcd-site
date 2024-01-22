import { Resend } from 'resend';

import {
  NewCompanyEmailProps,
  NewCompanyTemplate,
} from '@/components/emailTemplates/newCompanyTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data: NewCompanyEmailProps = await request.json();

  try {
    await resend.emails.send({
      from: 'MCD Contábil - MSG Automática <ti@mcdcontabil.com.br>',
      to: ['eduardo@mcdcontabil.com.br'],
      bcc: ['matheus.damiaoliveira@gmail.com'],
      subject: 'Nova empresa cadastrada na MCD Contábil',
      react: NewCompanyTemplate(data) as React.ReactElement,
    });

    return new Response();
  } catch (error) {
    // return Response.json({ error });
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
