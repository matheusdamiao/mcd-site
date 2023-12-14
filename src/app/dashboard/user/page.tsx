import { UserStrapi } from 'index';
import { getServerSession } from 'next-auth';
import React, { Suspense } from 'react';

import EditData from '@/components/editData/editData';

import Loading from '@/app/dashboard/user/loading';
import { authOptions } from '@/constant/authOptions';
import { isProd } from '@/constant/env';

export default async function User() {
  // const { data: session, status } = useSession();
  const session = await getServerSession(authOptions);
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

  if (session) {
    const res = await api<UserStrapi>(
      `${
        isProd
          ? `${process.env.NEXT_PUBLIC_API_URL}/api/users/me?populate=*`
          : 'http://127.0.0.1:1337/api/users/me?populate=*'
      }`
    );

    return (
      <section>
        <p>hello! {res.nome}</p>
        <Suspense fallback={<Loading />}>
          <EditData userData={res} />
        </Suspense>
      </section>
    );
  }
}
