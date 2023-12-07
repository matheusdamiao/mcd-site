'use client';
export const dynamic = 'force-dynamic';
import { Button, Spinner } from 'flowbite-react';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

const Page = () => {
  const { data: session, status } = useSession();
  const [company, setCompany] = useState<Company>();

  interface Data {
    id: number;
    attributes: Attributes;
  }

  interface Attributes {
    Nome: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    documentos: Documentos;
    dono: Dono;
  }
  interface Dono {
    data: Data2;
  }

  interface Data2 {
    id: number;
    attributes: Attributes3;
  }

  interface Attributes3 {
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
  }
  interface Documentos {
    data: Daum[];
  }

  interface Daum {
    id: number;
    attributes: Attributes2;
  }

  interface Attributes2 {
    name: string;
    alternativeText: any;
    caption: any;
    width: any;
    height: any;
    formats: any;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
  }

  interface Company {
    data: Data;
    meta: object;
  }

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

  const getCompanyDetails = async () => {
    if (session && session.user) {
      const data = await api<Company>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/empresas/1?populate=*`
      );
      setCompany(data);
    }
  };

  React.useEffect(() => {
    getCompanyDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  if (status === 'loading')
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <div className='flex h-screen items-center justify-center'>
      <Button>
        <a
          download='Example-PDF-document'
          target='_blank'
          rel='noreferrer'
          href={`${process.env.NEXT_PUBLIC_API_URL}${company?.data.attributes.documentos.data[0].attributes.url} `}
        >
          {' '}
          Baixar meu contrato
        </a>
      </Button>
    </div>
  );
};

export default Page;
