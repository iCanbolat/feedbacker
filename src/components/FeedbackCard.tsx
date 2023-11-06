import React from 'react';
import { MessageCircle } from 'lucide-react';
import CustomVoteUp from './CustomVoteButton';

type Props = {
  cardType: 'feedback' | 'product';
};

const FeedbackCard = ({ cardType }: Props) => {
  return (
    <>
      <div className='w-full px-3 bg-white rounded-lg text-black font-semibold  my-2 flex flex-row py-3 justify-center cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-10 duration-300'>
        <div className=' w-16 flex-none h-14'>
          {cardType === 'feedback' ? (
            <CustomVoteUp iconSize={24} deger={1} />
          ) : (
            <div className='text-center border-2 border-slate-300 rounded-lg font-bold'>
              <span className='text-lg'>12</span>
              <p className='text-xs'>open features</p>
            </div>
          )}
        </div>
        <div className={`flex ${cardType === 'product' ? 'ml-2' : 'ml-0'}`}>
          <div className='grow'>
            <p className='text-xl'>Dark Theme</p>
            <p className='text-base text-green-500'>Completed</p>
            <p className='text-sm text-light'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque laoreet ante ex. Ut vitae rutrum purus, in cursus
              lorem. Vestibulum vel urna lorem. Aliquam lacinia sit amet orci
              non varius.
            </p>
          </div>
          <div className='flex-none w-10'>
            <div className='flex'>
              <MessageCircle strokeWidth={2} className='mr-1' />4
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;
