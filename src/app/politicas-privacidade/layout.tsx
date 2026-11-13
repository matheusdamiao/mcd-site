import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Saiba como a MCD Contabilidade Consultiva trata os seus dados pessoais, conforme a LGPD.',
  alternates: { canonical: '/politicas-privacidade' },
};

export default function PrivacidadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
