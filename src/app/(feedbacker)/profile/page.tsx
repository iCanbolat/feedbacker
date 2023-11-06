import React from 'react'
import { UserFeedbackModal } from '../../../components/UserFeedbackModal'

type Props = {}

const Profile = (props: Props) => {
  //pass user nextauth data
  return (
    <>
      <UserFeedbackModal customOpen={true} cardType='profile'/>
    </>
  )
}

export default Profile