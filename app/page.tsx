"use client"
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className='p-2'>
      <p>Unprotected!</p>
    </div>
  )
}

export default LandingPage