'use client';
import { Button, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import useWindowDimensions from '@/lib/utils';

export default function NavBar() {
  const size = useWindowDimensions();
  const [menuHeight, setMenuHeight] = React.useState(0);
  // const [isBottom, setIsBottom] = React.useState(false);

  const [offTheHero, setIsOfftheHero] = React.useState(false);

  React.useEffect(() => {
    if (size !== undefined) {
      setMenuHeight(size.scrollY);
      if (size?.scrollY >= 500) {
        setIsOfftheHero(true);
        // TODO: add botao de voltar para o topo
        // setIsBottom(true);
      }
      if (size?.scrollY <= 500) {
        // setIsBottom(false);
        setIsOfftheHero(false);
      }
    }

    // console.log(size?.scrollY);
  }, [size?.scrollY, size?.width, size?.height, size]);

  const pathname = usePathname();

  return (
    <div className='text-re fixed left-0 z-[9999] m-auto w-full lg:m-auto lg:mt-3 lg:px-14'>
      <Navbar
        className={`${
          menuHeight > 400 ? 'bg-white' : 'border-none bg-transparent'
        } h-full w-full border-[1px]  bg-opacity-80  px-2 py-3  opacity-90 lg:flex lg:w-full lg:rounded-[34.6px]  lg:bg-white lg:px-6 lg:py-0 lg:shadow-md lg:[&>div]:w-full lg:[&>div]:flex-nowrap lg:[&>div]:gap-6 lg:[&>div]:px-8 `}
        fluid
        rounded
      >
        <Navbar.Brand as={Link} href='/' className=' shrink-0 pl-4'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${
              menuHeight > 400
                ? '/svg/logo-mob.svg'
                : '/svg/logo-branca-mobile.svg'
            }`}
            alt=''
            className='w-full lg:hidden '
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            // src='/svg/mcd-logo-desktop.svg'
            src='/svg/logo-desktop.svg'
            alt=''
            className='hidden lg:block'
          />
        </Navbar.Brand>

        <Navbar.Toggle
          className={`${
            menuHeight > 400 ? 'text-[#40494C]' : 'text-white'
          } px-4  hover:bg-transparent focus:ring-0 `}
        />

        <Navbar.Collapse className='w-full justify-evenly whitespace-nowrap transition-transform lg:flex lg:w-[50%] lg:justify-end [&>ul]:mt-[14px] [&>ul]:h-full [&>ul]:w-full  [&>ul]:max-w-4xl [&>ul]:justify-between [&>ul]:bg-[white] [&>ul]:px-2 [&>ul]:py-4 sm:[&>ul]:mt-[0px]  md:[&>ul]:flex md:[&>ul]:w-fit md:[&>ul]:items-center md:[&>ul]:bg-transparent'>
          <Navbar.Link
            as={Link}
            href='/abrir-empresa'
            className={`text-sm font-normal md:text-black ${
              offTheHero ? 'md:text-black' : 'md:text-white'
            } lg:text-[#40494C]
            
            
            ${
              pathname === '/abrir-empresa'
                ? 'rounded-xl !bg-[#1D81A2] !px-4 !py-2 !text-white hover:!bg-[#3b7a91]'
                : ''
            }`}
          >
            Abrir empresa
          </Navbar.Link>
          <Navbar.Link
            href='/contador'
            className={`text-sm font-normal ${
              offTheHero ? 'md:text-black' : 'md:text-white'
            } lg:text-[#40494C]
            
            ${
              pathname === '/contador'
                ? 'rounded-xl bg-[#1D81A2] !px-4 !py-2 !text-white hover:!bg-[#3b7a91]'
                : ''
            }
            `}
          >
            Trocar de contador
          </Navbar.Link>
          <Navbar.Link
            href='/services'
            className={`text-sm font-normal ${
              offTheHero ? 'md:text-black' : 'md:text-white'
            } lg:text-[#40494C]
            
            ${
              pathname === '/services'
                ? 'rounded-xl bg-[#1D81A2] !px-4 !py-2 !text-white hover:!bg-[#3b7a91]'
                : ''
            }
            
            `}
          >
            Serviços
          </Navbar.Link>
          <Navbar.Link
            href='/solucoes'
            className={`text-sm font-normal ${
              offTheHero ? 'md:text-black' : 'md:text-white'
            } lg:text-[#40494C]
            
            ${
              pathname === '/solucoes'
                ? 'rounded-xl !bg-[#1D81A2] !px-4 !py-2 !text-white hover:!bg-[#3b7a91]'
                : ''
            }
            `}
          >
            Soluções
          </Navbar.Link>
          <div className='flex lg:gap-0 xl:gap-4'>
            <a className='flex py-2 pl-2 md:order-2' href='dashboard'>
              <Button
                pill
                className={`rounded-[15px] border-2 border-[#AFAFAF]  bg-transparent px-4 text-sm font-normal text-[#40494C] hover:!bg-[#1D81A2] hover:text-white ${
                  offTheHero ? 'md:text-black' : 'md:text-white'
                } lg:text-[#40494C]`}
              >
                Minha conta
              </Button>
            </a>
            <div className='flex py-2 pl-2 md:order-2'>
              {/* <Button pill color='light' className='px-4'>
                criar conta
              </Button> */}
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
