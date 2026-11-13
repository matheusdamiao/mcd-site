import { Metadata } from 'next';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Trocar de contador',
  description:
    'Troque de contador sem burocracia. Atendimento digital para empresas de todo o Brasil, com sede no Centro do Rio de Janeiro.',
  alternates: { canonical: '/contador' },
};

export default function ContadorLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <main>{children}</main>
      <ToastContainer />
    </>
  );
}
