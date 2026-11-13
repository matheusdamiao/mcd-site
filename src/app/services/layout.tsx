import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Serviços personalizados',
  description:
    'Serviços contábeis, abertura de empresa, consultoria e planejamento tributário para a sua empresa, com atendimento digital em todo o Brasil.',
  alternates: { canonical: '/services' },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
