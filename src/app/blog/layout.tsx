import React from 'react';

import NavBar from '@/components/navbar/Navbar';

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {/* className='m-auto max-w-7xl px-6 py-6' */}
      <main className='bg-[#F2F2F2]'>{children}</main>
    </>
  );
}
