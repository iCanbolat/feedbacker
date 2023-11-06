"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  const { data: session } = useSession()
  console.log(session);
  
  return (
    <div>HomePage</div>
  )
}

export default HomePage