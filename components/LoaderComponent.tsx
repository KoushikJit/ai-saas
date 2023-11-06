import React from 'react'
import Image from 'next/image';
// import mountain from '@/public/mountain.png'


type Props = {}

const LoaderComponent = (props: Props) => {
  return (
    <div className='flex w-full h-24 animate-pulse items-center justify-center'>
        <Image src={'/mountain.png'} width={30} height={30} alt={''} className='w-10 h-10'/>
    </div>
  )
}

export default LoaderComponent