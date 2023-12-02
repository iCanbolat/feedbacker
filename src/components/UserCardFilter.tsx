'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DatePickerWithRange } from './DatePicker';
import { useForm } from 'react-hook-form';
import { feedbackFilterSchema } from '../lib/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import * as z from 'zod';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Input } from './ui/input';

const UserCardFilter = () => {
  const today = new Date();
  const form = useForm<z.infer<typeof feedbackFilterSchema>>({
    resolver: zodResolver(feedbackFilterSchema),
    defaultValues: {
      status: ['inProgress', 'open'],
      feedbackType: '',
      date: {
        from: new Date(today.getFullYear(), today.getMonth() - 1, 1),
        to: undefined,
      },
    },
    resetOptions: {
      keepDirtyValues: true,
      keepDirty: true,
    },
  });

  function onSubmit(data: z.infer<typeof feedbackFilterSchema>) {
    console.log(data);

    return;
  }
  const checkboxes = [
    {
      id: 'complete',
      label: 'Completed',
    },
    {
      id: 'inProgress',
      label: 'In Progress',
    },
    {
      id: 'open',
      label: 'Open',
    },
  ] as const;

  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle>Filter Last Feedbacks</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex flex-col space-y-1.5'>
              <FormLabel>Date Range</FormLabel>
              <FormField
                control={form.control}
                name='date'
                render={({ field }) => (
                  <FormItem>
                    <DatePickerWithRange
                      setDate={field.onChange}
                      date={field.value}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <FormField
                control={form.control}
                name='feedbackType'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Feedback Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={'all'}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select feedback type..' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={'all'}>All</SelectItem>
                        <SelectItem value={'bug'}>Bug</SelectItem>
                        <SelectItem value={'feature'}>Feature</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <FormItem>
                <div className='my-4'>
                  <FormDescription>Select the feedback status.</FormDescription>
                </div>
                {checkboxes.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name='status'
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
                <FormMessage />
              </FormItem>
            </div>
            <div className='flex justify-center mt-7'>
              <Button>Filter</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default UserCardFilter;
