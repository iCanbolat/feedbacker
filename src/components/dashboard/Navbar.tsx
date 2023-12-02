import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className='fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center'>
      <div className='flex items-center gap-x-4'>
        <div className='hidden md:flex'>
          <Image src={'/logoo.png'} width={120} height={100} alt='zr' />
        </div>
        <Button className='rounded-sm hidden md:block h-auto py-1.5 px-2'>
          Create
        </Button>
        <Button size='sm' className='rounded-sm md:hidden block'>
          <Plus className='h-4 w-4' />
        </Button>
      </div>
      <div className='items-center gap-x-2 ml-auto flex'>
        {/*<OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={'/dashboard/:id'}
          afterLeaveOrganizationUrl='/select-org'
          afterSelectOrganizationUrl={'/dashboard/:id'}
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              avatarBox: {
                width: 30,
                height: 30,
              },
            },
          }}
        />*/}
      </div>
    </nav>
  );
};

export default Navbar;
