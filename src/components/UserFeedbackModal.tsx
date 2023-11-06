'use client';
import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

import CustomVoteButton from './CustomVoteButton';
import CustomSelect from './CustomSelect';
import FeedbackVoters from './FeedbackVoters';
import CommentInput from './CommentInput';
import Comment from './Comment';
import FeedbackCard from './FeedbackCard';
import NextBreadcrumb from './NextBreadcrumb';
import ProductModalContent from './content/ProductModalContent';
import dynamic from 'next/dynamic';

const data = {
  type: 'root',
  comments: [
    {
      user: 'fatih',
      context: 'Lorem ipsum dolor',
      subcomments: [
        {
          user: 'sare',
          context: 'sare yorum',
          subcomments: [],
        },
      ],
    },
    {
      user: 'lokman',
      context: 'Lokman yorm',
      subcomments: [
        {
          user: 'sare',
          context: 'sare yoruma',
          subcomments: [
            {
              user: 'Serdar',
              context: 'Serdar yor',
              subcomments: [],
            },
          ],
        },
      ],
    },
  ],
};

type Props<T> = {
  parentData?: T[];
  cardType: 'product' | 'feedback' | 'profile';
  customOpen?: boolean;
};

const WithCustomLoading = dynamic(
  () => import('./content/ProductModalContent'),
  {
    loading: () => <p>Loading...</p>,
    ssr: true,
  }
);
const FeedbackModal = dynamic(
  () => import('./content/FeedbackModalContent'),
  {
    loading: () => <p>Loading...</p>,
    ssr: true,
  }
);

export function UserFeedbackModal<T>({
  cardType,
  parentData,
  customOpen,
}: Props<T>) {
  const [domLoaded, setDomLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  //const [tab, setTab] = React.useState('public');

  const searchParams = useSearchParams();
  const router = useRouter();

  const productItem = searchParams.get('product');
  const feedbackItem = searchParams.get('feedback');

  useEffect(() => {
    setDomLoaded(true);
    if (feedbackItem || productItem || customOpen) setOpen(true);
  });

  const handleOpen = () => {
    setOpen(false);
    router.replace('/feedbacker');
  };
  //const createQueryString = React.useCallback(
  //  (name: string, value: string) => {
  //    const params = new URLSearchParams(searchParams);
  //    params.set(name, value);

  //    return params.toString();
  //  },
  //  [searchParams]
  //);
  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent className='sm:min-w-[70%] xl:min-w-[50%]'>
        {productItem && !feedbackItem && domLoaded && (
          <WithCustomLoading />
          //<>
          //  <DialogHeader className='text-black'>
          //    <DialogTitle className='flex  mb-2'>
          //      <div className='flex-none w-16'>
          //        <div className='text-center border-2 border-slate-300 rounded-lg font-bold'>
          //          <span className='text-lg'>12</span>
          //          <p className='text-xs'>open features</p>
          //        </div>
          //      </div>
          //      <div className='grow'>
          //        <p className='mt-2.5 ml-2 text-lg'>
          //          Twitter Social Media App
          //        </p>
          //      </div>
          //    </DialogTitle>
          //    <DialogDescription>Created by Twitter</DialogDescription>
          //    <NextBreadcrumb />
          //  </DialogHeader>
          //  <div className='container max-h-[70vh] overflow-y-auto'>
          //    <Tabs value={tab} onValueChange={setTab} className='w-full'>
          //      <TabsList className=' text-black flex justify-center'>
          //        <TabsTrigger value='public'>Feedbacks</TabsTrigger>
          //        <TabsTrigger value='private'>
          //          Company's other Products
          //        </TabsTrigger>
          //      </TabsList>
          //      <hr className='mt-4 mb-6' />
          //      <TabsContent value='public'>
          //        {data.comments.map((item, key) => (
          //          <Link
          //            key={key}
          //            href={'?' + createQueryString('feedback', 'zort')}
          //          >
          //            <FeedbackCard cardType='feedback' />
          //          </Link>
          //        ))}
          //      </TabsContent>
          //      <TabsContent value='private'>
          //        {data.comments.map((item, key) => (
          //          <Link
          //            onClick={() => setTab('public')}
          //            key={key}
          //            href={'?' + createQueryString('product', 'deneme')}
          //          >
          //            <FeedbackCard cardType='product' />
          //          </Link>
          //        ))}
          //      </TabsContent>
          //    </Tabs>
          //  </div>
          //  <div className='w-full flex justify-center'>
          //    <CommentInput cardType={'feedback'} />
          //  </div>
          //</>
        )}
        {feedbackItem && domLoaded && (
          <FeedbackModal/>
          //<>
          //  <DialogHeader className='text-black'>
          //    <DialogTitle className='flex h-[3rem] mb-2'>
          //      <div className='flex-none w-12'>
          //        <CustomVoteButton iconSize={20} deger={1} />
          //      </div>
          //      <div className='grow'>
          //        <p className='mt-2.5 ml-2 text-lg'>Dark Theme</p>
          //      </div>
          //    </DialogTitle>
          //    <div className='flex w-full h-10 items-center text-black'>
          //      <CustomSelect />
          //      <CustomSelect />
          //      <CustomSelect />
          //      <FeedbackVoters />
          //    </div>
          //    <DialogDescription>Created by Mergeflo</DialogDescription>
          //    <NextBreadcrumb />
          //  </DialogHeader>
          //  <div className='container max-h-[70vh] overflow-y-auto'>
          //    <div className='w-full my-4'>
          //      <div className='flex w-full my-2'>
          //        <div className='w-12'>
          //          <Avatar className='m-auto cursor-pointer'>
          //            <AvatarImage
          //              src='https://github.com/shadcn.png'
          //              alt='@shadcn'
          //            />
          //            <AvatarFallback>CN</AvatarFallback>
          //          </Avatar>
          //        </div>
          //        <div className='grow text-black px-2 pt-1'>
          //          <p className=' text-blue-600 font-semibold mb-2'>
          //            John Doe
          //          </p>
          //          <p>
          //            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          //            In commodo est ut felis feugiat placerat. Quisque id sem
          //            rutrum, porttitor tellus id, sagittis lectus. Morbi
          //            hendrerit sem ac nulla mattis, vitae commodo turpis
          //            ultrices.
          //          </p>
          //        </div>
          //      </div>
          //    </div>
          //    {data.comments.map((item, key) => (
          //      <Comment key={key} data={item} indent={0} />
          //    ))}
          //  </div>
          //  <CommentInput cardType={'feedback'} />
          //</>
        )}

        {cardType === 'profile' && domLoaded && (
          <>
            <DialogHeader className='text-black'>
              <DialogTitle className='flex h-[3rem] mb-2'>
                <div className='grow'>
                  <p className='mt-2.5 ml-2 text-lg'>Profile Settings</p>
                </div>
              </DialogTitle>
            </DialogHeader>
            <div className='container max-h-[70vh] overflow-y-auto'>
              <div className='w-full my-4'>
                <div className='flex w-full my-2'>
                  <div className='w-12'>
                    <Avatar className='m-auto cursor-pointer'>
                      <AvatarImage
                        src='https://github.com/shadcn.png'
                        alt='@shadcn'
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className='grow text-black px-2 pt-1'>
                    <p className=' text-blue-600 font-semibold mb-2'>
                      John Doe
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In commodo est ut felis feugiat placerat. Quisque id sem
                      rutrum, porttitor tellus id, sagittis lectus. Morbi
                      hendrerit sem ac nulla mattis, vitae commodo turpis
                      ultrices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
