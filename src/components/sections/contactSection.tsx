import React from 'react';

const ContactSection = () => {
  return (
    <section className='h-full bg-[#BBD9E3] px-6 py-10 lg:h-[560px] lg:px-14'>
      <div className='relative m-auto flex h-full w-full max-w-7xl flex-col items-center gap-5 lg:block lg:px-0'>
        <div className='flex h-full flex-col justify-center gap-4 '>
          <h2 className='font-primary text-left text-3xl font-normal text-[#40494C] lg:w-3/4 lg:text-5xl'>
            {' '}
            Solicite uma proposta{' '}
          </h2>
          <h4 className='text-xl font-semibold text-white lg:text-3xl'>
            É rápido e prático!
          </h4>
          <h3 className='font-primary pt-0 text-lg font-normal text-[#647073] lg:w-1/3 lg:pt-3 lg:text-xl'>
            {' '}
            Fale com a gente e saiba como podemos te ajudar com a sua empresa
          </h3>
        </div>
        <div className='right-[5%] top-[20%] flex w-full max-w-md flex-col justify-center gap-4 rounded-[30px] bg-white px-8 py-8 lg:absolute lg:max-w-[400px] xl:max-w-lg'>
          <div>
            <h2 className='text-base font-normal text-black lg:text-2xl'>
              Entre em contato conosco
            </h2>
            <h3 className='pt-4 text-sm font-normal lg:text-lg'>
              Preencha com suas informações abaixo
            </h3>
          </div>
          <div className='relative'>
            <input
              type='text'
              id='nome'
              className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
              placeholder=' '
            />
            <label
              htmlFor='nome'
              className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900 dark:text-gray-400'
            >
              Nome
            </label>
          </div>
          <div className=' flex w-full flex-wrap justify-between gap-3 lg:flex-nowrap'>
            <div className='relative w-full'>
              <input
                type='text'
                id='email'
                className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 lg:max-w-xs'
                placeholder=' '
              />
              <label
                htmlFor='email'
                className='absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900 dark:text-gray-400 '
              >
                E-mail
              </label>
            </div>
            <div className='relative w-full'>
              <input
                type='text'
                id='telefone'
                className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-black focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                placeholder=' '
              />
              <label
                htmlFor='telefone'
                className='dark:text-gray-40 absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black dark:bg-gray-900'
              >
                Telefone
              </label>
            </div>
          </div>

          <div>
            <button className='w-full rounded-2xl bg-[#1D81A2] px-6 py-4 text-xl font-medium text-white'>
              Entrar em contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
