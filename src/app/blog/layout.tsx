import React from 'react';

import CustomFooter from '@/components/Footer/CustomFooter';
import NavBar from '@/components/navbar/Navbar';

// export const metadata: Metadata = {
//   title: {
//     default: 'Blog',
//     template: `%s | ${siteConfig.title}`,
//   },
// };

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='m-0 flex w-full flex-col bg-[#F2F2F2] '>
      <NavBar />
      {/* className='m-auto max-w-7xl px-6 py-6' */}
      <main className='bg-[#F2F2F2]'>{children}</main>
      <CustomFooter />
    </div>
  );
}
