import { UserStrapi } from 'index';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import React from 'react';

// export const dynamic = 'force-dynamic';
import NavDashboard from '@/components/NavDashboard/NavDashboard';

import { authOptions } from '@/constant/authOptions';
import { isProd } from '@/constant/env';

import Provider from '../context/client-provider';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect('/login');
  }

  async function api<T>(url: string): Promise<T> {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.user.jwt}`,
      },
    });
    if (!res.ok) {
      // console.log(res);
      throw new Error(res.statusText);
    }
    const data = (await res.json()) as Promise<T>;
    const realData = await data;
    return realData;
  }
  if (session.user) {
    const res = await api<UserStrapi>(
      `${
        isProd
          ? `${process.env.NEXT_PUBLIC_API_URL}/api/users/me?populate=*`
          : 'http://127.0.0.1:1337/api/users/me?populate=*'
      }`
    );
    return (
      <>
        <NavDashboard user={res} />
        <Provider session={session}>{children}</Provider>
      </>
    );
  }
}
