import { NextRequest, NextResponse } from 'next/server';
import * as React from 'react';
import { Resend } from 'resend';

import { OfferLeadTemplate } from '@/components/emailTemplates/offerLeadTemplate';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

type LeadBody = {
  oferta?: string;
  nome?: string;
  whatsapp?: string;
  email?: string;
  cidadeUf?: string;
  atividade?: string;
  regime?: string;
  faturamento?: string;
  consent?: boolean;
};

export async function POST(request: NextRequest) {
  let body: LeadBody;

  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }

  const {
    oferta,
    nome,
    whatsapp,
    email,
    cidadeUf,
    atividade,
    regime,
    faturamento,
    consent,
  } = body ?? {};

  if (!nome || !whatsapp || !email || !consent) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 });
  }

  if (!resend) {
    return NextResponse.json(
      { error: 'email_not_configured' },
      { status: 500 }
    );
  }

  try {
    await resend.emails.send({
      from: 'MCD Contabilidade Consultiva <ti@mcdcontabil.com.br>',
      to: ['ti@mcdcontabil.com.br', 'eduardo@mcdcontabil.com.br'],
      bcc: ['matheus.damiaoliveira@gmail.com'],
      subject: `Novo lead - ${oferta || 'Site MCD'}`,
      react: OfferLeadTemplate({
        oferta: oferta || 'Site MCD',
        nome,
        whatsapp,
        email,
        cidadeUf: cidadeUf || '',
        atividade: atividade || '',
        regime: regime || '',
        faturamento: faturamento || '',
      }) as React.ReactElement,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return NextResponse.json({ error: 'send_failed' }, { status: 500 });
  }
}
