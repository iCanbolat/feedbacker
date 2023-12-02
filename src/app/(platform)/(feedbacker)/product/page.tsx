import React from 'react';
import ProductTabFilter from '@/components/ProductTabFilter';
import Link from 'next/link';
import FeedbackCard from '@/components/FeedbackCard';
import dynamic from 'next/dynamic';
import ProductModalContent from '@/components/content/ProductModalContent';
import FeedbackModalContent from '@/components/content/FeedbackModalContent';
import  UserFeedbackModal  from '@/components/UserFeedbackModal';

type Props = {};

const Denem = dynamic(() => import('@/components/content/ProductModalContent'),{ssr:false})
const Deneme = dynamic(() => import('@/components/content/FeedbackModalContent'),{ssr:false})


const Product = ({ searchParams }: { searchParams: any }) => {
  //product + filter func
  return (
    <>
      <div className='w-full flex flex-col items-start'>
        <ProductTabFilter />
        <div className='w-full'>
          <Link href={'?product=merge'}>
            <FeedbackCard cardType='product' />
          </Link>
        </div>
      </div>
      {searchParams?.product && (
        <UserFeedbackModal customOpen>
          {searchParams.product && !searchParams.feedback ? <Denem/> : <Deneme/>}
        </UserFeedbackModal>
      )}
    </>
  );
};

export default Product;


