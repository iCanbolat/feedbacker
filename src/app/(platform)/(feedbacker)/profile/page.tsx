import React from 'react';
import UserFeedbackModal from '@/components/UserFeedbackModal';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProfileSettings from '@/components/profile/ProfileSettings';
import MyFeedbacks from '@/components/profile/MyFeedbacks';

type Props = {};

const Profile = (props: Props) => {
  //pass user nextauth data
  return (
    <>
      <UserFeedbackModal customOpen>
        <>
          <DialogHeader>
            <DialogTitle className='flex h-[3rem] mb-2 text-primary text-center'>
              <div className='grow'>
                <p className='mt-2.5 ml-2 text-lg'>Profile Settings</p>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className='container max-h-[70vh] overflow-y-auto flex   my-2 justify-center'>
            <Tabs defaultValue='account' className='w-full'>
              <TabsList className='justify-center flex'>
                <TabsTrigger value='account'>Account</TabsTrigger>
                <TabsTrigger value='password'>My Feedbacks</TabsTrigger>
              </TabsList>
              <TabsContent
                className='w-[100%] justify-center flex text-center'
                value='account'
              >
                <ProfileSettings />
              </TabsContent>
              <TabsContent className='w-full' value='password'>
                <MyFeedbacks />
              </TabsContent>
            </Tabs>
          </div>
        </>
      </UserFeedbackModal>
    </>
  );
};

export default Profile;
