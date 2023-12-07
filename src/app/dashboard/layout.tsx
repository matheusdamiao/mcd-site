import { getServerSession } from 'next-auth';
import React, { ReactElement } from 'react';

import 'react-toastify/dist/ReactToastify.css';

export const dynamic = 'force-dynamic';

import { ToastContainer } from 'react-toastify';

import { authOptions } from '@/constant/authOptions';

import Provider from '../context/client-provider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  const session = getServerSession(authOptions);
  return (
    <>
      {/* <NavBar /> */}
      <ToastContainer />
      <Provider session={session}>{children}</Provider>
    </>
  );
}
