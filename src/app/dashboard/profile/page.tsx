'use client';
export const dynamic = 'force-dynamic';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

export default function Profile() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserStrapi>();

  type UserStrapi = {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: Date;
    updatedAt: Date;
    empresas: Array<Empresa>;
  };

  type Empresa = {
    id: number;
    Nome: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };

  async function api<T>(url: string): Promise<T> {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.user.jwt}`,
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = (await res.json()) as Promise<T>;
    const realData = await data;
    return realData;
  }

  const saveUserData = async () => {
    if (session && session.user) {
      const data = await api<UserStrapi>(
        'http://localhost:1337/api/users/me?populate=*'
      );
      setUser(data);
    }
  };

  React.useEffect(() => {
    saveUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const isLoading = status === 'loading';
  if (isLoading) return 'Loading...';

  if (session && session.user) {
    return (
      <div className='flex h-screen flex-col items-center justify-center'>
        <h2>Bem vindo, {session.user.user.email}</h2>
        Signed in as {user ? user.username : null} <br />
        <h2>
          {user
            ? user.empresas.map((a: Empresa) => (
                <div key={a.id}>
                  <div> {a.Nome}</div>
                  <p>{a.id}</p>
                </div>
              ))
            : null}
        </h2>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  if (session === null) {
    <div>Faça o login</div>;
  }
}
