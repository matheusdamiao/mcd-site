import { Metadata } from 'next';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  title: {
    default: 'Abra sua empresa com a gente',
    template: ``,
  },
  description: siteConfig.description,
  alternates: { canonical: '/abrir-empresa' },
};

export default function OpenCompanyLayout({
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
