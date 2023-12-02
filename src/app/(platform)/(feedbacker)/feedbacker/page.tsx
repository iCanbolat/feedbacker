import React from 'react';
 import FeedbackCard from '@/components/FeedbackCard';
import UserCardFilter from '@/components/UserCardFilter';
import Link from 'next/link';
 
import FeedbackModalContent from '@/components/content/FeedbackModalContent';
 
import dynamic from 'next/dynamic';

type Props = {};

const Modal = dynamic(() => import('@/components/UserFeedbackModal'), {
  ssr: false,
  loading: () => <h1 className='text-white'>Loading...</h1>,
});

const Dashboard = async ({
  searchParams,
}: {
  [key: string]: string | string[] | any;
}) => {
  //fetch public and private feedbacks
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    next: { tags: ['todos'] },
    cache: 'force-cache',
  });
  const data = await res.json().then((v) => v.slice(0, 3));

  return (
    <>
      <div className='grid md:grid-cols-3 lg:grid-cols-3 md:gap-4 xl:gap-2 space-y-6 md:space-y-0'>
        <UserCardFilter />
        <div className=' md:col-span-2 lg:col-span-2  h-max flex-col flex justify-center items-start'>
          <Link passHref className='w-full' href={'?feedback=testfeed'}>
            <FeedbackCard cardType='feedback' />
          </Link>
        </div>
      </div>

      {searchParams?.feedback && !searchParams?.product && (
        <Modal customOpen>
          <FeedbackModalContent />
        </Modal>
      )}
    </>
  );
};

export default Dashboard;
