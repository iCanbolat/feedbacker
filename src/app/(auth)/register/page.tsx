"use client"
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { registerSchema } from '@/lib/constants'
import { register } from '../../helpers/serverActions'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { signIn } from 'next-auth/react'

const Register = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    resetOptions: {
      keepDirtyValues: true
    },
    defaultValues: {
      email: "",
      password: "",
      companyName: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    const { success, email } = await register(values);

    if (!success) return null;

    await signIn('credentials', { email, password: values.password, callbackUrl: '/' })
  }

  return (
    <div className='w-full h-screen justify-center flex items-center'>
      <div className='p-5 rounded-md   w-96 bg-white'>
        <div className='text-black'>
          <Tabs defaultValue="company" className="w-full flex justify-center flex-col">
            <TabsList>
              <TabsTrigger value="company">Product Owner</TabsTrigger>
              <TabsTrigger value="costumer">Feedbacker</TabsTrigger>
            </TabsList>
            <TabsContent value="company">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-[20rem] ">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                    <div className='my-auto'>I have account</div>
                    <Button type="submit">Submit</Button>
                  </div>
                </form>
              </Form>
            </TabsContent>
            <TabsContent value="costumer">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-[20rem] ">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
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
                          <Input type='password' placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className='w-full justify-between flex mt-auto'>
                    <div className='my-auto'>I have account</div>
                    <Button type="submit">Submit</Button>
                  </div>
                </form>
              </Form>
            </TabsContent>
          </Tabs>


        </div>
      </div>
    </div>
  )
}

export default Register