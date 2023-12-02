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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MembersTab from '../../../_components/MembersTab';
import { DataTable } from './data-table';
import { columns, Payment } from './columns';

type Props = {};

const Settings = (props: Props) => {
  const data: Payment[] = [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
  ];
  return (
      <Card className='w-[100%]'>
        <CardContent className='flex h-full'>
          <Tabs defaultValue='account' className='  flex flex-row'>
            <TabsList className='flex-col flex h-full items-center my-2 mr-5'>
              <TabsTrigger value='account'>Members</TabsTrigger>
              <TabsTrigger value='password'>Settings</TabsTrigger>
            </TabsList>
            <TabsContent value='account'>
              <div className='w-[700px] flex justify-center'>

              <DataTable columns={columns} data={data} />
              </div>
            </TabsContent>
            <TabsContent value='password'>
              Change your password here.
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
  );
};

export default Settings;
