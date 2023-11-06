import Image from 'next/image';
import React from 'react';
import { IoNotifications } from 'react-icons/io5';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../components/ui/avatar';
import { IDropdownData, INotification } from '../../types';
import { CreditCard, LogOut, User, SendHorizontal } from 'lucide-react';
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const notifications: INotification[] = [
    {
      title: 'Your Theme Color Ticket has a comment!',
      feedback: 'Theme Color',
      description: 'You have invited to Mergeflo Feedbackers!',
      type: 'feedback',
      icon: CreditCard,
    },
    {
      title: 'Invite to Apple product!',
      feedback: 'Apples product',
      description: 'You have invited to Apple product Feedbacker!',
      type: 'invite',
      icon: User,
    },
  ];
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
    <div className='h-screen overflow-y-hidden container'>
      <div className='h-24 flex flex-row items-center w-full px-4'>
        <div className='grow w-20  h-14'>
          <Image
            width={120}
            height={10}
            src='/logo-no-background.png'
            alt={'feedbacker'}
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className='flex-none mt-auto w-20 h-14 relative'>
              <IoNotifications className='w-[23px] h-3/4 right-2 absolute cursor-pointer top-0.5' />
              <span className='right-1 absolute bg-red-500 rounded-lg px-1 top-0.5 text-xs'>
                {notifications.length}
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuGroup>
              {notifications.map((item, idx) => (
                <DropdownMenuItem key={idx}>
                  {item.icon && (
                    <div className='w-14'>
                      <item.icon className='mr-2 h-4 w-full' />
                    </div>
                  )}
                  <span key={idx} className='text-md ml'>
                    {item.title}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className='flex-none mt-auto w-20 h-14'>
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
      <div className='items-center w-full h-full flex'>{children}</div>
    </div>
  );
};

export default Layout;
