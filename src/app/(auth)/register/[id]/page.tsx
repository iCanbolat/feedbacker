"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { registerSchema } from '../../../../lib/constants';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../components/ui/form';
import { Input } from '../../../../components/ui/input';
import { Button } from '../../../../components/ui/button';
import * as z from "zod"
import { registerTeamUser } from '../../../helpers/serverActions';
import { signIn } from 'next-auth/react';

const RegisterInvitedMate = ({ params: { id } }: { params: { id: string } }) => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    resetOptions: {
      keepDirtyValues: true
    },
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    const response = await registerTeamUser(values, id)

    if (!response!.success) return null;

    await signIn('credentials', { email: values.email, password: values.password, callbackUrl: '/' });
  }
  return (
    <div className='w-full h-screen justify-center flex items-center'>
      <div className='p-5 rounded-md   w-96 bg-white'>
        <div className='text-black'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-[20rem] ">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className='mt-5'>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className='mt-5'>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='w-full justify-between flex mt-auto'>
                <div className='my-auto'> </div>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>



        </div>
      </div>
    </div>
  )
}

export default RegisterInvitedMate