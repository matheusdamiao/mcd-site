// 'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';

import LogOut from '@/components/LogOut/logOut';

import { isProd } from '@/constant/env';

const NavDashboard = ({ user }: { user: any }) => {
  return (
    <>
      <div className='flex w-full justify-between'>
        <div className='flex-0 flex-shrink-0 flex-grow-0'>
          <img
            src='/svg/logo-mob.svg'
            alt=''
            className='w-full max-w-[150px] lg:max-w-[400px]'
          />
        </div>
        <aside className='flex gap-2'>
          <div>
            <img
              src={
                isProd && user?.avatar
                  ? user?.avatar?.url
                  : user?.avatar
                  ? `${process.env.NEXT_PUBLIC_API_URL}${user?.avatar.url}`
                  : '/svg/profile-place.svg'
              }
              alt='avatar'
              className='max-w-[30px] lg:max-w-[50px]'
            />
          </div>
          <div className='flex flex-col justify-center'>
            {user && (
              <p className='font-primary text-xs font-normal text-[#646464] lg:text-base'>
                {user.username}
              </p>
            )}
            <LogOut />
          </div>
        </aside>
      </div>
      <div className='flex h-[20vh] flex-col justify-center'>
        <h2 className='font-primary flex-shrink-0 text-2xl font-normal text-[#5E5E5E] lg:text-5xl'>
          {' '}
          <span className='text-[#A9A9A9]'>Olá,</span>{' '}
          {(user && user.nome) || user?.username}
        </h2>
        <h3 className='font-primary text-xs font-normal text-[#646464] lg:text-lg'>
          Seja bem-vindo a MCD Assessoria Contábil
        </h3>
      </div>
    </>
  );
};

export default NavDashboard;
