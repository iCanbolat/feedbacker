'use client';
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  customOpen: boolean;
  children: React.ReactNode;
};

export default function UserFeedbackModal({ customOpen, children }: Props) {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (customOpen) setOpen(true);
  });

  const handleOpen = () => {
    setOpen(false);
    router.replace(pathname === '/profile' ? '/feedbacker' : pathname);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent className='sm:min-w-[70%] xl:min-w-[50%]'>
        {children}
      </DialogContent>
    </Dialog>
  );
}
