import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeedbackCard from '../../../components/FeedbackCard';
import UserCardFilter from '../../../components/UserCardFilter';
import Link from 'next/link';
import { UserFeedbackModal } from '../../../components/UserFeedbackModal';

type Props = {};

const Dashboard = ({
  searchParams,
}: {
  [key: string]: string | string[] | any;
}) => {
  //fetch public and private feedbacks
  return (
    <>
      <div className='h-[90vh] w-full'>
        <Tabs defaultValue='public' className='w-full'>
          <TabsList className='bg-transparent text-white flex justify-center'>
            <TabsTrigger value='public'>Feedbacks</TabsTrigger>
            <TabsTrigger value='private'> Products</TabsTrigger>
          </TabsList>
          <hr className='mt-4 mb-6' />
          <TabsContent value='public'>
            <div className='grid grid-cols-3 '>
              <UserCardFilter />
              <div className=' col-span-2   flex justify-center'>
                <Link className='h-1' href={'?feedback=testfeed'}>
                  <FeedbackCard cardType='feedback' />
                </Link>
              </div>
            </div>
          </TabsContent>
          <TabsContent value='private'>
            <div className='w-full flex justify-center flex-col items-start'>
              <Link href={'?product=merge'}>
                <FeedbackCard cardType='product' />
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {searchParams?.product && <UserFeedbackModal cardType={'product'} />}
      {/*{searchParams?.feedback && <UserFeedbackModal cardType={'feedback'} />}*/}
    </>
  );
};

export default Dashboard;

//export const generateStaticParams = async () => {
//  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//  const data = await res.json();
//  return {
//    props: {
//      todos: data.slice(0, 5),
//    },
//  };
//};