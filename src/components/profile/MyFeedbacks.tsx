import React from 'react';
import FeedbackCard from '../FeedbackCard';

type Props = {};

const MyFeedbacks = (props: Props) => {
  return (
    <div className='mt-5 space-y-6'>
      <FeedbackCard cardType='feedback' />

      <FeedbackCard cardType='feedback' />
    </div>
  );
};

export default MyFeedbacks;
