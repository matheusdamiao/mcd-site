import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description:
    'Entenda como a MCD Contabilidade Consultiva utiliza cookies neste site.',
  alternates: { canonical: '/politicas-cookies' },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
