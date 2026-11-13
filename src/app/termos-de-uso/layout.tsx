import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Termos de uso do site e dos serviços da MCD Contabilidade Consultiva.',
  alternates: { canonical: '/termos-de-uso' },
};

export default function TermosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
