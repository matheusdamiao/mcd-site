/* eslint-disable @next/next/no-img-element */
import { Card, Carousel, CustomFlowbiteTheme } from 'flowbite-react';
import React from 'react';

const BlogSection = () => {
  const customTheme: CustomFlowbiteTheme['carousel'] = {
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
        'absolute bottom-[-20px] left-1/2 flex -translate-x-1/2 space-x-3',
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

  const customCard: CustomFlowbiteTheme['card'] = {
    root: {
      base: 'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
      children: 'flex h-full min-h-[250px] flex-col justify-between gap-4 p-6',
      horizontal: {
        off: 'flex-col',
        on: 'flex-col md:max-w-xl md:flex-row',
      },
      href: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    },
    img: {
      base: '',
      horizontal: {
        off: 'rounded-t-lg  max-h-[300px] object-cover w-full',
        on: 'h-90 w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg',
      },
    },
  };
  return (
    <section className='px-6 lg:px-14'>
      <div className='m-auto my-28 w-full max-w-7xl lg:px-0'>
        <div>
          <h2 className='font-primary text-3xl  font-medium text-[#40494C]  lg:text-4xl'>
            Conheça nosso blog
          </h2>
          <h3 className='font-primary pt-3 text-lg font-normal text-[#647073] lg:text-xl'>
            Aqui você encontra conteúdo útil e prático para você aplicar no dia
            a dia da sua empresa.{' '}
          </h3>
        </div>

        <div className='mt-10 hidden w-full flex-wrap items-center justify-center gap-16 lg:flex lg:flex-nowrap'>
          {' '}
          <Card
            theme={customCard}
            className='w-full  max-w-[320px] rounded-3xl lg:max-w-[400px]'
            imgSrc='/images/blog-foto-1.svg'
          >
            <h5 className='text-2xl font-normal tracking-tight text-[#40494C] dark:text-white'>
              Confira aqui algumas estratégias que vão te ajudar a gerir melhor
              o seu negócio.
            </h5>
            <div>
              <a
                href='#'
                className='flex items-center justify-between text-[#1C81A2]'
              >
                {' '}
                Saiba mais <img src='/icons/arrow-right.svg' alt='' />
              </a>{' '}
            </div>
          </Card>
          <Card
            theme={customCard}
            className=' w-full  max-w-[320px] rounded-3xl lg:max-w-[400px]'
            imgSrc='/images/blog-foto-2.svg'
          >
            <h5 className='text-2xl font-normal tracking-tight text-[#40494C] dark:text-white'>
              Quero abrir uma empresa. O que fazer?
            </h5>
            <div>
              <a
                href='#'
                className='flex items-center justify-between text-[#1C81A2]'
              >
                {' '}
                Saiba mais <img src='/icons/arrow-right.svg' alt='' />
              </a>{' '}
            </div>
          </Card>
          <Card
            theme={customCard}
            className='rounded-3xls w-full max-w-[320px] lg:max-w-[400px]'
            imgSrc='/images/blog-foto-3.svg'
          >
            <h5 className='text-2xl font-normal tracking-tight text-[#40494C] dark:text-white'>
              Saúde financeira: como fazer minha empresa crescer? Confira aqui 5
              dicas.
            </h5>
            <div>
              <a
                href='#'
                className='flex items-center justify-between text-[#1C81A2]'
              >
                {' '}
                Saiba mais <img src='/icons/arrow-right.svg' alt='' />
              </a>{' '}
            </div>
          </Card>
        </div>

        <div className='h-[600px] w-full lg:hidden'>
          <Carousel pauseOnHover slide={false} theme={customTheme}>
            <Card
              theme={customCard}
              className='w-full rounded-3xl'
              imgSrc='/images/blog-foto-1.svg'
            >
              <h5 className='text-2xl font-normal tracking-tight text-[#40494C] dark:text-white'>
                Confira aqui algumas estratégias que vão te ajudar a gerir
                melhor o seu negócio.
              </h5>
              <div>
                <a
                  href='#'
                  className='flex items-center justify-between text-[#1C81A2]'
                >
                  {' '}
                  Saiba mais <img src='/icons/arrow-right.svg' alt='' />
                </a>{' '}
              </div>
            </Card>
            <Card
              theme={customCard}
              className='w-full rounded-3xl'
              imgSrc='/images/blog-foto-2.svg'
            >
              <h5 className='text-2xl font-normal tracking-tight text-[#40494C] dark:text-white'>
                Quero abrir uma empresa. O que fazer?
              </h5>
              <div>
                <a
                  href='#'
                  className='flex items-center justify-between text-[#1C81A2]'
                >
                  {' '}
                  Saiba mais <img src='/icons/arrow-right.svg' alt='' />
                </a>{' '}
              </div>
            </Card>
            <Card
              theme={customCard}
              className='rounded-3xls w-full'
              imgSrc='/images/blog-foto-3.svg'
            >
              <h5 className='text-2xl font-normal tracking-tight text-[#40494C] dark:text-white'>
                Saúde financeira: como fazer minha empresa crescer? Confira aqui
                5 dicas.
              </h5>
              <div>
                <a
                  href='#'
                  className='flex items-center justify-between text-[#1C81A2]'
                >
                  {' '}
                  Saiba mais <img src='/icons/arrow-right.svg' alt='' />
                </a>{' '}
              </div>
            </Card>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
