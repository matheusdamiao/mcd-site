'use client';
import { signOut } from 'next-auth/react';
import React from 'react';

const LogOut = () => {
  return (
    <a
      className='cursor-pointer rounded-none text-xs font-normal text-[#A9A9A9] hover:underline lg:text-base'
      onClick={() => signOut()}
    >
      Sair
    </a>
  );
};
export default LogOut;
