import React from 'react';

import CtaButton from '@/components/button/CtaButton';

const PlanningSection = () => {
  return (
    <div className='relative h-full w-full  bg-black px-6 lg:h-[450px] lg:px-0 '>
      <video
        className='opacity- absolute left-0 top-0 h-full w-full object-cover object-left opacity-40'
        src='https://res.cloudinary.com/dg5yog3gf/video/upload/v1709137986/videos/video-section_zos00z.mp4'
        autoPlay
        muted
        loop
      />
      <div className='sticky z-[99] m-auto flex  max-w-7xl flex-col items-center justify-center gap-10 py-24'>
        <h2 className=' text-center text-3xl font-semibold text-white lg:text-4xl'>
          Planeje pra <span className='text-[#F7C027]'>não</span> virar mais uma
          estatística
        </h2>
        <h3
          className='text-center text-xl
         font-normal text-white  lg:w-[50%] lg:leading-loose'
        >
          Segundo o SEBRAE,{' '}
          <span className='text-[#F7C027] underline'>
            {' '}
            50% das empresas quebram antes de 2 anos.
          </span>{' '}
          <br />
          Falta de planejamento financeiro e fiscal está entre os principais
          fatores.
        </h3>
        <CtaButton target='/#form'>Quero planejar meu negócio</CtaButton>
      </div>
    </div>
  );
};

export default PlanningSection;
