import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type Props = {}

const AiAvatar = (props: Props) => {
    return <Avatar className='m-1'>
        <AvatarImage src='/mountain.png' />
        <AvatarFallback>AI</AvatarFallback>
    </Avatar>;
}

export default AiAvatar