import Image from 'next/image';
import React from 'react';
import { CreditCard, LogOut, Plus, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { IDropdownData } from '../../../../types';
import SelectOrganization from './atoms/select-organization';
import MobileSidebar from './MobileSidebar';
type Props = {};

const Navbar = (props: Props) => {
  const avatarComponent: IDropdownData[] = [
    {
      title: 'Profile',
      href: '/profile',
      icon: User,
      description: 'You have invited to Mergeflo Feedbackers!',
    },
    {
      title: 'My Feedbacks',
      href: '/feedbacks',
      icon: CreditCard,
      description: 'You have invited to Mergeflo Feedbackers!',
    },
    {
      title: 'Logout',
      href: '/docs/primitives/hover-card',
      icon: LogOut,
      description: 'You have invited to Mergeflo Feedbackers!',
    },
  ];
  return (
    <nav className='fixed z-50 top-0 w-full h-14 border-b shadow-sm   flex items-center'>
      <MobileSidebar/>
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
        <SelectOrganization />
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className='m-auto cursor-pointer'>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='@shadcn'
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
              <DropdownMenuGroup>
                {avatarComponent.map((item, idx) => (
                  <Link href={item.href} key={idx}>
                    <DropdownMenuItem key={idx}>
                      {item.icon && <item.icon className='mr-2 h-4 w-4' />}
                      <span key={idx} className='text-md'>
                        {item.title}
                      </span>
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
