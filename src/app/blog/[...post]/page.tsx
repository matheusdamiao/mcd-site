import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';

import { isProd } from '@/constant/env';

export default async function Page({
  params,
}: {
  params: { post: [id: string, title: string] };
}) {
  const res = await fetch(
    `${
      isProd
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/artigos/${params.post[0]}?populate=*`
        : `http://127.0.0.1:1337/api/artigos/${params.post[0]}?populate=*`
    }`,
    {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();

  const autor = data.data.attributes.autors.data[0].id;
  // fetch the author
  const author = await fetch(
    `${
      isProd
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/autors/${autor}?populate=*`
        : `http://127.0.0.1:1337/api/autors/${autor}?populate=*`
    }`,
    {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const authorData = await author.json();

  return (
    <>
      <span className='absolute top-0 block h-[70px] w-full bg-[#1C81A2] sm:h-[100px] lg:hidden' />

      <article className='m-auto w-full max-w-7xl px-6 pt-[100px] lg:pt-[150px]'>
        <header className=' relative flex h-full flex-col items-center gap-10 lg:h-[400px] '>
          <Link
            href='/blog'
            className='absolute left-0 flex flex-nowrap items-center gap-3 text-[#647073]'
          >
            <span className='relative block h-[3px] w-[16px] rounded-md bg-[#647073] before:absolute before:left-0 before:top-[3px] before:h-[3px] before:w-[9px] before:rotate-[45deg] before:rounded-md before:bg-[#647073] after:absolute after:bottom-[3px] after:left-0 after:h-[3px] after:w-[9px] after:rotate-[-45deg] after:rounded-md after:bg-[#647073] '></span>
            <p>Voltar para Blog</p>{' '}
          </Link>

          <h1 className='font-primary  max-w-4xl pt-16  text-center text-4xl font-normal text-[#40494C] lg:pt-8 '>
            {data.data.attributes.titulo}
          </h1>
          <h3 className='font-primary max-w-2xl text-center text-lg font-normal text-[#647073]'>
            {' '}
            {data.data.attributes.subtitulo}
          </h3>

          <div className='flex flex-wrap items-center justify-center gap-10 lg:flex-nowrap lg:justify-start'>
            <div className='flex gap-2'>
              <div className='flex flex-col'>
                <h4 className='m-0 text-sm text-[#647073]'>
                  {authorData.data.attributes.nome}
                </h4>
                <small className='text-[#647073]'>
                  {authorData.data.attributes.cargo}
                </small>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt='avatar'
                width={50}
                height={50}
                className={`${
                  !authorData.data.attributes.avatar.data && `hidden`
                }`}
                src={`${
                  isProd &&
                  authorData.data.attributes.avatar.data.attributes.url
                    ? authorData.data.attributes.avatar.data.attributes.url
                    : authorData.data.attributes.avatar.data
                    ? `http://localhost:1337${authorData.data.attributes.avatar.data.attributes.url}`
                    : null
                }`}
              />
            </div>

            <p className='text-[#647073]'>
              Publicado em{' '}
              <time dateTime={data.data.attributes.publishedAt}>
                {' '}
                {data.data.attributes.data}
              </time>
            </p>
          </div>
        </header>

        <section className='bg-[#E0E0E0] '>
          <Image
            className='m-auto mt-12 lg:mt-0'
            alt='algo'
            width={616}
            height={503.31}
            src={`${
              isProd
                ? data.data.attributes.image.data.attributes.url
                : `http://127.0.0.1:1337${data.data.attributes.image.data.attributes.url}`
            } `}
          />
        </section>

        <Markdown
          className='m-auto w-full max-w-3xl py-16 text-base'
          skipHtml={false}
        >
          {data.data.attributes.texto}
        </Markdown>
      </article>
    </>
  );
}
