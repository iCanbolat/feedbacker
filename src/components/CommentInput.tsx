'use client';
import React, { useEffect, useRef, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { FeedbackType } from '../types';
import { MotionValue, motion, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';

type Props = {
  cardType: 'feedback' | 'product';
};
const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),
  title: z.string().optional(),
  feedbackType: z.array(z.nativeEnum(FeedbackType)),
});

const CommentInput = ({ cardType }: Props) => {
  const [toggle, setToggle] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      feedbackType: [FeedbackType.Bug],
      title: '',
    },
  });

  const checkboxes = [
    {
      id: FeedbackType.Feature,
      label: 'Feature',
    },
    {
      id: FeedbackType.Bug,
      label: 'Bug',
    },
  ] as const;

  const sidebar = {
    open: {
      height: '20rem',
      transition: {
        type: 'spring',
        stiffness: 120,
        restDelta: 2,
      },
    },
    closed: {
      height: '3rem',
      transition: {
        type: 'spring',
        stiffness: 60,
      },
    },
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);

    return;
  }
  return (
    <motion.div
      className='w-full flex justify-center text-black'
      initial={false}
      variants={sidebar}
      animate={toggle ? 'open' : 'closed'}
    >
      {!toggle ? (
        <Button
          variant='outline'
          onClick={() => setToggle(!toggle)}
        >
          <ArrowUp className='mr-2' size={22} color='black' strokeWidth={2.25} /> {cardType === 'feedback' ? 'Make Comment' : 'Create Feedback'}
        </Button>
      ) : (
        <>
          <Button
            variant='outline'
            size='icon'
            className='mr-5'
            onClick={() => setToggle(!toggle)}
          >
            <ArrowDown size={22} color='black' strokeWidth={2.25} />
          </Button>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='w-2/3 space-y-6 text-center text-black'
            >
              <FormField
                control={form.control}
                name='title'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='Feedback title..' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='bio'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder='Tell us your feedback...'
                        className='resize-none text-black'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {checkboxes.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name='feedbackType'
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className='flex flex-row items-start space-x-3 space-y-0'
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                            disabled={
                              field.value.length > 0 &&
                              field.value[0] !== item.id
                            }
                          />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <Button type='submit'>Submit</Button>
            </form>
          </Form>
        </>
      )}
    </motion.div>
  );
};

export default CommentInput;
