import { Metadata } from 'next';
import Head from 'next/head';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  title: {
    default: 'Contabilidade Digital',
    template: ``,
  },
  description: siteConfig.description,
};

export default function OpenCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <Head>
        <title>MCD Contabilidade Consultiva - Trocar de Contador</title>
      </Head>
      <main>{children}</main>
      <ToastContainer />
    </>
  );
}
