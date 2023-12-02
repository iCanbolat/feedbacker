import React from 'react';
import Sidebar from './_components/Sidebar';
import Navbar from './_components/Navbar';

const CompanyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto'>
        <div className='flex gap-x-7'>
          <div className='w-64 shrink-0 hidden md:block'>
            <Sidebar />
          </div>
          <div className='w-full flex justify-center'>{children}</div>
        </div>
      </main>
    </>
  );
};

export default CompanyLayout;
