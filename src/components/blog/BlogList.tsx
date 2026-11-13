'use client';
import { Carousel, CustomFlowbiteTheme } from 'flowbite-react';
import Link from 'next/link';
import * as React from 'react';

import type { BlogPostView } from '@/lib/strapi';

const customCaroussel: CustomFlowbiteTheme['carousel'] = {
  root: {
    base: 'relative h-full w-full',
    leftControl:
      'absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none',
    rightControl:
      'absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none',
  },
  indicators: {
    active: {
      off: 'bg-slate-400 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800',
      on: 'bg-[#1C81A2] dark:bg-gray-800',
    },
    base: 'h-3 w-3 rounded-full',
    wrapper:
      'absolute bottom-[-40px] lg:bottom-[-20px] left-1/2 flex -translate-x-1/2 space-x-3',
  },
  item: {
    base: 'absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2',
    wrapper: 'w-full flex-shrink-0 transform cursor-grab snap-center',
  },
  control: {
    base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
    icon: 'h-5 w-5 text-black dark:text-gray-800 sm:h-6 sm:w-6',
  },
  scrollContainer: {
    base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg gap-4 ',
    snap: 'snap-x',
  },
};

export default function BlogList({ posts }: { posts: BlogPostView[] }) {
  const lastPosts = posts.slice(0, 3);

  return (
    <div>
      <div className='flex h-full w-full flex-col items-center justify-center pt-20 text-black lg:h-[700px] lg:pt-40'>
        <span className='absolute top-0 block h-[70px] w-full bg-[#1C81A2] sm:h-[100px] lg:hidden' />
        <div className='m-auto h-full max-w-7xl py-10 lg:h-[100px] '>
          <h1 className='font-primary text-center text-3xl  font-semibold text-[#647073]  lg:text-[40px]'>
            Últimos artigos
          </h1>
        </div>
        {lastPosts.length > 0 ? (
          <Carousel theme={customCaroussel} indicators pauseOnHover>
            {lastPosts.map((post) => (
              <div
                key={post.id}
                className='relative mx-2 flex h-full max-w-[1200px] flex-shrink-0 flex-col flex-wrap items-center gap-9 rounded-[30px] border-[1px] bg-white px-11 lg:h-[400px] lg:flex-row lg:flex-nowrap'
              >
                <div className='flex max-h-[250px] w-full items-center justify-center object-cover pt-6'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image ?? '/images/blog-foto-1.svg'}
                    alt={post.title}
                    loading='lazy'
                    className='h-full  w-full object-cover lg:max-h-[350px]'
                  />
                </div>
                <div className='flex flex-col gap-4 px-4 pb-6 lg:gap-7'>
                  <h2 className='font-body text-2xl font-normal text-[#40494C] lg:text-4xl'>
                    {post.title}
                  </h2>
                  <h4 className='font-body text-base font-normal text-[#647073] lg:text-xl'>
                    {post.subtitle}
                  </h4>
                  <small>{post.date}</small>
                </div>
                <Link
                  href={post.href}
                  className='animated-underline absolute bottom-7 right-7 z-[865] flex h-16 w-16 items-center justify-center rounded-full bg-[#1D81A2] font-bold text-white'
                  aria-label={`Ler artigo: ${post.title}`}
                >
                  <span className='block h-[4px] w-5 translate-x-1 translate-y-[-4px] rotate-45 bg-white after:block after:h-[4px] after:w-5 after:translate-x-[8px] after:translate-y-[10px] after:rotate-90 after:bg-white'></span>
                </Link>
              </div>
            ))}
          </Carousel>
        ) : (
          <p className='text-center text-[#647073]'>
            Nenhum artigo publicado ainda.
          </p>
        )}
      </div>
      <div className='px-6 py-24'>
        <h2 className='font-primary py-10 text-center  text-3xl font-semibold  text-[#647073] lg:text-[40px]'>
          Todos os artigos
        </h2>

        <section className='m-auto flex max-w-7xl flex-wrap justify-center gap-14 pt-8'>
          {posts.map((post) => (
            <div
              key={post.id}
              className='relative flex h-[450px] w-[300px] flex-col flex-nowrap items-start gap-8 rounded-[25px] border-2 '
            >
              <div className='self-start '>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className='rounded-t-[25px]'
                  src={post.image ?? '/images/blog-foto-1.svg'}
                  alt={post.title}
                  loading='lazy'
                />
              </div>
              <div className='flex h-full flex-col justify-between'>
                <h2 className='font-primary px-4 py-0 text-xl font-normal text-[#40494C]'>
                  {post.title}
                </h2>
                <div className='flex items-center justify-between px-4 pb-4'>
                  <small className='text-xs text-[#647073]'>{post.date}</small>
                  <Link
                    href={post.href}
                    aria-label={`Ler artigo: ${post.title}`}
                  >
                    <span className='relative block h-[3px] w-[16px] rounded-md bg-[#1C81A2] before:absolute before:right-0 before:top-[3px] before:h-[3px] before:w-[9px] before:rotate-[-45deg] before:rounded-md before:bg-[#1C81A2] after:absolute after:bottom-[3px] after:right-0 after:h-[3px] after:w-[9px] after:rotate-45 after:rounded-md after:bg-[#1C81A2] '></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
