import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type Props = {
    userImage?: string,
    userName: string
}

const UserAvatar = ({userImage, userName}: Props) => {

    return <Avatar className='m-1'>
        <AvatarImage src={userImage} />
        <AvatarFallback>{userName?.charAt(0)}</AvatarFallback>
    </Avatar>;

}

export default UserAvatar