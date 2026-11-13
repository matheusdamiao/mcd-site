import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Soluções',
  description:
    'Soluções contábeis e de assessoria empresarial para PMEs, MEIs e profissionais liberais, com atendimento digital em todo o Brasil.',
  alternates: { canonical: '/solucoes' },
};

export default function SolucoesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
