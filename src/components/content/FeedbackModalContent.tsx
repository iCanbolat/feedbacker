import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import CustomSelect from '../CustomSelect';
import CustomVoteButton from '../CustomVoteButton';
import NextBreadcrumb from '../NextBreadcrumb';
import FeedbackVoters from '../FeedbackVoters';
import Comment from '../Comment';
import CommentInput from '../CommentInput';
type Props = {}

const FeedbackModalContent = (props: Props) => {
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
  return (
    <>
    <DialogHeader>
      <DialogTitle className='flex h-[3rem] mb-2'>
        <div className='flex-none w-12'>
          <CustomVoteButton iconSize={20} deger={1} />
        </div>
        <div className='grow'>
          <p className='mt-2.5 ml-2 text-lg text-secondary-foreground'>Dark Theme</p>
        </div>
      </DialogTitle>
      <div className='flex w-full h-10 items-center'>
        <CustomSelect />
        <CustomSelect />
        <CustomSelect />
        <FeedbackVoters />
      </div>
      <DialogDescription>Created by Mergeflo</DialogDescription>
      <NextBreadcrumb />
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
          <div className='grow px-2 pt-1'>
            <p className=' text-primary font-semibold mb-2'>
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
      {data.comments.map((item, key) => (
        <Comment key={key} data={item} indent={0} />
      ))}
    </div>
    <CommentInput cardType={'feedback'} />
  </>
  )
}

export default FeedbackModalContent