import { getServerSession } from 'next-auth';
import React, { ReactElement } from 'react';
export const dynamic = 'force-dynamic';
import NavBar from '@/components/navbar/Navbar';

import { authOptions } from '@/constant/authOptions';

import Provider from './../context/client-provider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  const session = getServerSession(authOptions);
  return (
    <>
      <NavBar />
      <Provider session={session}>{children}</Provider>
    </>
  );
}
