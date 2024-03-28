/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CallToActionSection = () => {
  React.useEffect(() => {
    if (window && window.document) {
      const options = {
        root: document.querySelector('#scroll-area'),
        rootMargin: '200px',
        threshold: 1.0,
      };

      const callback = () => {
        // console.log('to na tela!');
      };

      const observer = new IntersectionObserver(callback, options);
      const openCompany = document.querySelector('#contabilidade-1');
      if (openCompany) {
        observer.observe(openCompany);
      }
    }
  }, []);

  const [isIntersecting, setIsIntersecting] = React.useState(false);

  const ref = React.useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    if (ref.current) {
      // console.log(isIntersecting);
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isIntersecting]);

  const moveTo = () => {
    if (window && window.document) {
      const openCompany = document.querySelector('#scroll-area');
      openCompany?.scrollTo(1000, 0);
    }
  };

  const moveBack = () => {
    if (window && window.document) {
      const openCompany = document.querySelector('#scroll-area');
      openCompany?.scrollTo(0, 0);
    }
  };

  return (
    <div>
      <section
        id='action'
        className='m-auto flex w-full max-w-7xl flex-col px-6 py-20 pt-[100px] lg:gap-14'
      >
        <div className='flex items-center justify-center gap-14 scroll-smooth lg:gap-24'>
          <h2 className='pointer  w-full text-[#757575] lg:text-base'>
            <a
              onClick={() => moveBack()}
              className={`${
                !isIntersecting ? null : 'font-normal text-[#40494C]'
              } hidden cursor-pointer text-xl  font-medium lg:block lg:text-right `}
            >
              {' '}
              Quero abrir minha empresa
            </a>
            <a
              onClick={() => moveBack()}
              className={`${
                !isIntersecting ? null : 'font-normal text-[#40494C]'
              } block cursor-pointer whitespace-nowrap text-right text-base font-medium lg:hidden`}
            >
              {' '}
              Abrir empresa
            </a>
            <span
              className={`mt-2 h-[3px] ${
                isIntersecting ? 'block w-0' : 'block w-full'
              } bg-[#F7C027] transition-all`}
            ></span>
          </h2>
          <h2 className='pointer w-full text-[#757575] lg:text-base'>
            <a
              onClick={() => moveTo()}
              className={`${
                isIntersecting ? 'font-medium text-[#40494C]' : null
              } hidden cursor-pointer text-xl font-normal lg:block`}
            >
              {' '}
              Quero trocar de contador
            </a>
            <a
              onClick={() => moveTo()}
              className={`${
                isIntersecting ? 'font-medium text-[#40494C]' : null
              } block cursor-pointer whitespace-nowrap text-base font-normal lg:hidden`}
            >
              {' '}
              Trocar de contador
            </a>
            <span
              className={`mt-2 h-[3px] ${
                !isIntersecting ? 'block w-0' : 'block w-full'
              } bg-[#1D81A2] transition-all`}
            ></span>
          </h2>
        </div>

        {/* slider */}

        <div
          id='scroll-area'
          className='flex snap-x snap-mandatory gap-32 overflow-x-auto overflow-y-hidden scroll-smooth'
        >
          <div
            className={`flex-0 mt-11 w-full flex-shrink-0 snap-center  lg:mt-0 `}
            id='abrir-empresa'
          >
            <h2 className='font-primary  text-center text-3xl font-normal  text-[#F7C027] lg:text-4xl'>
              {' '}
              Abrir sua empresa{' '}
              <span className='text-[#40494C]'>
                {' '}
                é fácil, rápido e de graça!{' '}
              </span>
            </h2>
            <h3 className='font-primary pt-5 text-center text-lg font-normal text-[#647073] lg:text-xl'>
              {' '}
              Planejamento empresarial personalizado para você com zero
              burocracia.{' '}
            </h3>
            <div className='mt-11 flex flex-col items-center gap-10'>
              <ol className='flex flex-col items-center gap-10 lg:flex-row lg:gap-12'>
                <li className='flex max-w-xs flex-col items-center gap-2 lg:gap-5'>
                  <img
                    src='/images/empresa-illustration-1.png'
                    alt=''
                    className='hidden lg:block'
                  />
                  <div className='flex flex-col items-center gap-4 lg:flex-row lg:items-start'>
                    <div className='flex-grow-0'>
                      <img src='/icons/square-1.svg' alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary text-center text-base font-semibold text-[#40494C] lg:text-left'>
                        Faça seu cadastro
                      </h4>
                      <p className='font-primary m-auto w-[90%] pt-2 text-center text-sm text-[#303030] lg:w-full lg:pt-4 lg:text-left'>
                        Em menos de 2 minutos você terá se cadastrado para
                        iniciar o processo.
                      </p>
                    </div>
                  </div>
                </li>

                <li className='flex max-w-sm flex-col items-start gap-2 lg:gap-5'>
                  <img
                    src='/images/empresa-illustration-2.png'
                    alt=''
                    className='hidden lg:block'
                  />
                  <div className='flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-5'>
                    <div className='flex-grow-0'>
                      <img src='/icons/square-2.svg' alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary whitespace-nowrap text-center text-base font-semibold text-[#40494C] lg:text-left'>
                        Fale com nossos especialistas
                      </h4>
                      <p className='font-primary m-auto w-[90%] pt-2 text-center text-sm text-[#303030] lg:w-full lg:pt-4 lg:text-left'>
                        Vamos juntos planejar as melhores decisões para sua
                        empresa.
                      </p>
                    </div>
                  </div>
                </li>

                <li className='flex max-w-sm flex-col items-start gap-2 lg:gap-5'>
                  <div className='pl-16'>
                    {' '}
                    <img
                      src='/images/empresa-illustration-3.png'
                      alt=''
                      className='hidden flex-grow-0 lg:block '
                    />
                  </div>

                  <div className='flex flex-1 flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-5'>
                    <div className=''>
                      <img src='/icons/square-3.svg' alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary text-center text-base font-semibold text-[#40494C] lg:text-left'>
                        Fazemos tudo para você
                      </h4>
                      <p className=' font-primary m-auto w-[80%] pt-2 text-center text-sm text-[#303030] lg:w-full lg:pt-4 lg:text-left'>
                        Envie suas informações e documentos, e nossa equipe
                        cuidará de todo o processo para você.
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
              <a
                href='abrir-empresa'
                className='w-full max-w-sm rounded-2xl bg-[#F7C027] px-6 py-4 text-center text-xl font-medium text-[#493602]'
              >
                Abrir empresa
              </a>
            </div>
          </div>

          <div
            className={`flex-0 mt-8 w-full flex-shrink-0 snap-center `}
            ref={ref}
          >
            <h2 className='font-primary  text-center text-3xl font-normal  text-[#1D81A2]  lg:text-4xl'>
              {' '}
              Sua contabilidade{' '}
              <span className='text-[#40494C]'>
                {' '}
                na MCD de forma econômica e segura
              </span>
            </h2>
            <h3
              className='font-primary pt-5 text-center text-lg font-normal text-[#647073] lg:text-xl'
              id='contabilidade-1'
            >
              {' '}
              Ajudamos empresas a simplificar suas contabilidades e economizar
              tempo.
            </h3>
            <div className='mt-11 flex flex-col items-center gap-10'>
              <ol className=' flex flex-col items-center gap-10 lg:flex-row lg:gap-12'>
                <li className='flex max-w-xs flex-col items-center gap-5'>
                  <img
                    src='/images/contador-illustration-1.png'
                    alt=''
                    className='hidden lg:block'
                  />
                  <div className='flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-5'>
                    <div className='flex-grow-0'>
                      <img src='/icons/square-1-blue.svg' alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary text-center text-base font-semibold text-[#40494C]  lg:text-left'>
                        Faça seu cadastro
                      </h4>
                      <p className=' font-primary m-auto w-[90%] pt-2 text-center text-sm text-[#303030] lg:w-full lg:pt-4 lg:text-left'>
                        Preencha nosso formulário para conhecermos melhor o
                        perfil da sua empresa.
                      </p>
                    </div>
                  </div>
                </li>

                <li className='flex max-w-sm flex-col items-start gap-5'>
                  <img
                    src='/images/contador-illustration-2.png'
                    alt=''
                    className='hidden lg:block'
                  />
                  <div className='flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-5'>
                    <div className='flex-grow-0'>
                      <img src='/icons/square-2-blue.svg' alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary whitespace-nowrap text-center text-base font-semibold  text-[#40494C] lg:text-left'>
                        Fale com nossos especialistas
                      </h4>
                      <p className='font-primary m-auto  w-[90%] pt-2 text-center text-sm text-[#303030] lg:w-full lg:pt-4 lg:text-left'>
                        Nossa equipe vai conversar com você e vamos fazer uma
                        revisão do atual cenário contábil e fiscal da sua
                        empresa.
                      </p>
                    </div>
                  </div>
                </li>

                <li className='flex max-w-sm flex-col items-start gap-5'>
                  <div className='pl-16'>
                    {' '}
                    <img
                      src='/images/contador-illustration-3.png'
                      alt=''
                      className='hidden flex-grow-0 lg:block'
                    />
                  </div>

                  <div className='flex flex-1 flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-5'>
                    <div className=''>
                      <img src='/icons/square-3-blue.svg' alt='' />
                    </div>
                    <div className='w-full lg:w-2/3'>
                      <h4 className='font-primary text-center text-base  font-semibold text-[#40494C] lg:text-left'>
                        Fazemos tudo para você
                      </h4>
                      <p className=' font-primary m-auto w-[90%] pt-2  text-center text-sm text-[#303030] lg:w-full lg:pt-4 lg:text-left'>
                        Envie suas informações e documentos, e nossa equipe
                        cuidará de todo o processo para você.
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
              <a
                href='contador'
                className=' w-full max-w-sm rounded-2xl bg-[#1D81A2] px-6 py-4 text-center text-xl font-medium text-white'
              >
                Trocar de contador
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToActionSection;
