"use client"
import React, { useState } from 'react'
import { AirVent, LucideMessagesSquare, SendHorizonal, SquareCodeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import axios, { isCancel, AxiosError } from 'axios';
import { ChatCompletionMessage } from 'openai/resources/index.mjs';
import LoaderComponent from './LoaderComponent';
import Image from 'next/image'
import { useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import UserAvatar from './UserAvatar';
import AiAvatar from './AiAvatar';
import { cn } from '@/lib/utils';


type Props = {}



const FormSectionCode = (props: Props) => {
    // session

    //state
    const [prompt, setPrompt] = useState("");
    const [aiResponse, setAiResponse] = useState<ChatCompletionMessage[]>([])
    const [loading, setLoading] = useState(false)

    //effect

    return (
        <section>
            <form >
                <div className='flex flex-col items-end'>
                    <div id="text-box-user" className="flex flex-row h-24 w-full border border-stone-300 rounded-md">
                        <span className="h-full w-10 flex-none bg-stone-300 border border-stone-300 flex flex-col items-center p-2 rounded-l-md">
                            <SquareCodeIcon />
                        </span>
                        <div className='w-full'>
                            <textarea className='p-2 w-full h-full border border-gray-300 rounded-r-md focus:outline-stone-600'
                                placeholder='simple html page with a sidebar...' onChange={(ev) => {
                                    setPrompt(ev.target.value)
                                }}>
                            </textarea>
                        </div>
                    </div>
                    <Button onClick={(params) => { onSubmitHandler(params); }} variant={'default'} className='mt-1 max-w-sm justify-end'>
                        Generate <SendHorizonal className='pl-2' />
                    </Button>
                </div>

            </form>

            {/* loader */}
            <div className="w-full">
                {loading && <LoaderComponent />}
            </div>


            {/* // content */}
            <div className='flex justify-end'>
                <div className='bg-gray-600'></div>
                <div className='flex flex-col-reverse mt-2 gap-4 max-w-6xl w-full'>
                    {aiResponse.map((message: ChatCompletionMessage, index) => {
                        return <ChatBoxComponent key={JSON.stringify(message) + index} message={message} index={index} />
                    })}
                </div>
            </div>
        </section>
    );

    //handler functions
    function onSubmitHandler(params: any) {
        params.preventDefault();// very important. otherwise the form closes, along with the fetch request.
        const userMessage: ChatCompletionMessage = { role: 'user', content: prompt }

        setLoading(true);
        axios.post("api/codegen", {
            prompt: prompt
        }, { timeout: 10000 }).then((response) => {
            setLoading(false);
            console.log(response);
            setAiResponse([...aiResponse, userMessage, response.data]);
        });
    }

}


export default FormSectionCode


function ChatBoxComponent({ message, index }: { message: ChatCompletionMessage, index: number, }) {
    //session
    const { data: session, status } = useSession();

    const { role, content } = message;
    const isUser = role === 'user' ? true : false;

    const alignment = isUser ? 'end' : 'start';
    const bgCol = isUser ? 'bg-stone-400 ' : 'bg-stone-200 ';

    return (
        <div className={'flex justify-' + alignment}>
            <div
                className={cn(bgCol, 'max-h-80 w-full overflow-y-scroll p-2 rounded-sm border-2 border-stone-400',
                    'flex flex-row')}>
                {isUser && <UserAvatar userImage={session?.user?.image as string} userName={session?.user?.name as string} />}
                {!isUser && <AiAvatar />}
                <p className='ml-2'>
                    {content}
                </p>
            </div>
        </div>
    );
}
