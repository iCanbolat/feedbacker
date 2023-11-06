'use client';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
type Props = {
  children: React.ReactNode;
  triggerComponent: any;
};

const CustomDropdown = ({ children, triggerComponent }: Props) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{triggerComponent}</DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuGroup>{children}</DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CustomDropdown;
