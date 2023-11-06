import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NextBreadcrumb from '../NextBreadcrumb';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import FeedbackCard from '../FeedbackCard';
import CommentInput from '../CommentInput';

type Props = {};

const ProductModalContent = (props: Props) => {
  const [tab, setTab] = React.useState('public');

  const searchParams = useSearchParams();

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <>
      <DialogHeader className='text-black'>
        <DialogTitle className='flex  mb-2'>
          <div className='flex-none w-16'>
            <div className='text-center border-2 border-slate-300 rounded-lg font-bold'>
              <span className='text-lg'>12</span>
              <p className='text-xs'>open features</p>
            </div>
          </div>
          <div className='grow'>
            <p className='mt-2.5 ml-2 text-lg'>Twitter Social Media App</p>
          </div>
        </DialogTitle>
        <DialogDescription>Created by Twitter</DialogDescription>
        <NextBreadcrumb />
      </DialogHeader>
      <div className='container max-h-[70vh] overflow-y-auto'>
        <Tabs value={tab} onValueChange={setTab} className='w-full'>
          <TabsList className=' text-black flex justify-center'>
            <TabsTrigger value='public'>Feedbacks</TabsTrigger>
            <TabsTrigger value='private'>Company's other Products</TabsTrigger>
          </TabsList>
          <hr className='mt-4 mb-6' />
          <TabsContent value='public'>
            <Link href={'?' + createQueryString('feedback', 'zort')}>
              <FeedbackCard cardType='feedback' />
            </Link>
          </TabsContent>
          <TabsContent value='private'>
            <Link
              onClick={() => setTab('public')}
              href={'?' + createQueryString('product', 'deneme')}
            >
              <FeedbackCard cardType='product' />
            </Link>
          </TabsContent>
        </Tabs>
      </div>
      <div className='w-full flex justify-center'>
        <CommentInput cardType={'feedback'} />
      </div>
    </>
  );
};

export default ProductModalContent;
