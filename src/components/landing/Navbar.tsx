import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm flex items-center'>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <Image src={'/logoo.png'} alt='feedbacker' width={120} height={10}/>
        <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
          <Button size='sm'  asChild>
            <Link href='/sign-in'>Login</Link>
          </Button>
          <Button size='sm' variant='outline' asChild>
            <Link href='/sign-up'>Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
