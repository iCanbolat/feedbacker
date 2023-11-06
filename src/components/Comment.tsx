import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

type Props = {};

const Comment = ({ data, indent }: { data?: any; indent: number }) => {
  //console.log(data);

  return (
    <>
      <div
        className={`w-full my-5 border-2 rounded-lg p-1 bg-slate-200 border-slate-300`}
        style={{ marginLeft: indent * 2 + 'px' }}
      >
        <div className='flex w-full my-2'>
          <div className='w-12'>
            <Avatar className='m-auto cursor-pointer'>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className='grow text-black px-2 pt-1'>
            <div className='flex'>
            <p className=' text-blue-600 font-semibold mb-2'>{data.user}</p>
            <Button variant={'link'} className='h-6'>reply</Button>
            </div>
            <p>{data.context}</p>
          </div>
        </div>

        {data?.subcomments?.map((sub: any, idx:any) => (
          <Comment key={idx} data={sub} indent={indent + 1} />
        ))}

      </div>
    </>
  );
};

export default Comment;
