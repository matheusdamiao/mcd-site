import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as React from 'react';
import Markdown from 'react-markdown';

import { excerptFrom, getArtigo, imageUrl, postPath } from '@/lib/strapi';

import JsonLd from '@/components/seo/JsonLd';

import { company } from '@/constant/company';

export const revalidate = 3600;

type PageProps = {
  params: { post: [id: string, title: string] };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const artigo = await getArtigo(params.post[0]);
  if (!artigo) {
    return { title: 'Artigo não encontrado' };
  }

  const description = excerptFrom(artigo);
  const image = imageUrl(artigo);

  return {
    title: artigo.attributes.titulo,
    description,
    alternates: { canonical: postPath(artigo) },
    openGraph: {
      type: 'article',
      title: artigo.attributes.titulo,
      description,
      url: postPath(artigo),
      images: image ? [image] : undefined,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const artigo = await getArtigo(params.post[0]);

  if (!artigo) {
    notFound();
  }

  const attributes = artigo.attributes;
  const description = excerptFrom(artigo);
  const image = imageUrl(artigo);
  const autores = attributes.autors?.data ?? [];
  const path = postPath(artigo);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: attributes.titulo,
    description,
    datePublished: attributes.data || attributes.publishedAt,
    dateModified: attributes.updatedAt || attributes.publishedAt,
    author: autores.length
      ? autores.map((autor) => ({
          '@type': 'Person',
          name: autor.attributes.nome,
          description: autor.attributes.cargo,
        }))
      : { '@type': 'Organization', name: company.name },
    publisher: {
      '@type': 'Organization',
      name: company.name,
      logo: { '@type': 'ImageObject', url: company.logo },
    },
    image: image || undefined,
    mainEntityOfPage: `${company.url}${path}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
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
            {attributes.titulo}
          </h1>
          <h3 className='font-primary max-w-2xl text-center text-lg font-normal text-[#647073]'>
            {' '}
            {attributes.subtitulo}
          </h3>

          <div className='flex flex-wrap items-center justify-center gap-10 lg:flex-nowrap lg:justify-start'>
            {autores.length > 0 ? (
              <div className='flex gap-2'>
                {autores.map((autor) => (
                  <div key={autor.id} className='flex flex-col'>
                    <h4 className='m-0 text-sm text-[#647073]'>
                      {autor.attributes.nome}
                    </h4>
                    <small className='text-[#647073]'>
                      {autor.attributes.cargo}
                    </small>
                  </div>
                ))}
              </div>
            ) : null}

            <p className='text-[#647073]'>
              Publicado em{' '}
              <time dateTime={attributes.data || attributes.publishedAt}>
                {' '}
                {attributes.data}
              </time>
            </p>
          </div>
        </header>

        {image ? (
          <section className='bg-[#E0E0E0] '>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='m-auto mt-12 lg:mt-0'
              alt={attributes.titulo}
              width={616}
              height={503.31}
              src={image}
            />
          </section>
        ) : null}

        <Markdown
          className='m-auto w-full max-w-3xl py-16 text-base'
          skipHtml={false}
        >
          {attributes.texto}
        </Markdown>
      </article>
    </>
  );
}
