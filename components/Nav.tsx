"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react'
import { User, LogOut } from 'lucide-react'

type Props = {}

const Nav = (props: Props) => {

  // session 
  const { data: session, status } = useSession();
  //state
  const [dropDownShown, setDropDownShown] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)

  // effect
  useEffect(() => {
    if (session && session.user) {
      console.log(session)
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [status])


  return (
    <div>
      <div className='h-14 z-30 flex justify-end items-center pr-2'>
        <SignInOut />
      </div>
    </div>
  )

  //function sub components
  function SignInOut() {
    if (loggedIn) {
      return (
        <div>
          <SignOutWithDropdown />
        </div>
      );
    }
    if (!loggedIn) {
      return <Button id="sign-in-button" onClick={() => signIn()}>Sign In</Button>
    }

  }
  function SignOutWithDropdown() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image id="profile-image" width={50} height={50} className='cursor-pointer h-10 w-10 ring-2 ring-gray-600 p-1 rounded-full' src={session?.user?.image as string} alt={''} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            <span className='text-xs'>
              {session?.user?.name}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={''}><User className='inline' /> Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button variant={'ghost'} onClick={() => { signOut(); }}
            className='p-1'>
              <LogOut className='inline mr-2' /> Log Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}

export default Nav

