import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <div id='about' className='h-full w-full py-32'>
      <div className='m-auto flex w-full max-w-7xl flex-col px-6 lg:px-0'>
        <div className='relative flex flex-col items-center justify-center gap-20 '>
          <h2 className='  text-center text-3xl font-normal text-[#40494C] lg:text-4xl'>
            Há mais de 10 anos ajudando empresários
          </h2>
          <Image
            width={444}
            height={231.93}
            src='/images/MCD_logo_amarelo_sem_tg.webp'
            alt=''
            className='absolute left-[30%] top-[-60%] hidden lg:block'
          />
          <h3 className=' text-center text-xl font-normal text-[#647073] lg:w-[50%] '>
            Somos um escritório de contabilidade digital especializado em
            assessoria empresarial completa a empresários e empreendedores
          </h3>
        </div>

        <div className='flex flex-wrap-reverse items-end justify-center gap-10 pt-14 lg:flex-nowrap lg:items-start '>
          <div className='flex w-full flex-col  gap-10 lg:w-min '>
            <div className='flex h-full w-full flex-col gap-3 rounded-3xl bg-[#D9D9D9] bg-opacity-40 px-8 py-8  shadow-lg transition-shadow lg:h-[240px] lg:w-[420px]'>
              <Image
                src='/svg/cooperation.svg'
                alt=''
                width={40}
                height={40}
                className=' flex-0 flex-shrink-0 flex-grow-0'
              />
              <h4 className='font-primary text-xl font-semibold text-[#656565]'>
                {' '}
                Um caminho de sucesso{' '}
              </h4>
              <p className='font-primary text-base font-normal text-[#656565]'>
                {' '}
                Nossos clientes são nossos parceiros. Juntos elaboramos um
                projeto único pra você economizar seu dinheiro e chegar mais
                longe.
              </p>
            </div>

            <div className='flex h-full w-full flex-col gap-3 rounded-3xl bg-[#D9D9D9]  bg-opacity-40 px-8 py-8 shadow-lg transition-shadow lg:h-[240px] lg:w-[420px] '>
              <Image
                src='/svg/customer-rev.svg'
                alt=''
                width={40}
                height={40}
                className=' flex-0 flex-shrink-0 flex-grow-0'
              />
              <h4 className='font-primary text-xl font-semibold text-[#656565]'>
                Time especialista para te atender
              </h4>
              <p className='font-primary text-base font-normal text-[#656565]'>
                A MCD está comprometida a acompanhar a jornada do seu negócio e
                garantir o seu sucesso.
              </p>
            </div>

            <div></div>
          </div>

          <div className='relative h-[400px] w-full max-w-2xl  '>
            <video
              src='https://res.cloudinary.com/dg5yog3gf/video/upload/v1709138234/videos/MCD-introdu%C3%A7%C3%A3o_zuuqzg.mp4'
              controls
              className='absolute left-0 top-0 h-full w-full object-cover  object-center lg:object-top'
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
