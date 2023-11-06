"use client"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card'
import React from 'react'
import { ChevronsRight, CodeIcon, LucideImagePlus, MessageSquare, Music3, VideoIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

type Props = {}

const AiTools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "",
        bgColor: "",
        href: "/conversation",
    },
    {
        label: "Image Generation",
        icon: LucideImagePlus,
        color: "",
        bgColor: "",
        href: "/imagegen",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "",
        bgColor: "",
        href: "/videogen",
    },
    {
        label: "Music Generation",
        icon: Music3,
        color: "",
        bgColor: "",
        href: "/musicgen",
    },
    {
        label: "Code Generation",
        icon: CodeIcon,
        color: "",
        bgColor: "",
        href: "/codegen",
    },
]

const DashboardPage = (props: Props) => {

    //router
    const router = useRouter();

    return (
        <div className='space-y-4 flex flex-col items-center'>
            <h2 className='text-xl font-bold text-center'>Dashboard Page</h2>
            <DashboardCardsSection />
        </div>
    )


    // component functions
    function DashboardCardsSection() {
        return AiTools.map(({ label, icon: Icon, color, href }, index) => {
            return <Card key={label + color + href} onClick={() => { router.push(href) }} className={cn('bg-black w-fit flex flex-row items-center justify-between border-0 shadow-none')}>
                <Button variant={'outline'} className='w-72 md:w-96 flex flex-row justify-between p-4 py-8 border-0 border-b-2 border-gray-200'>
                    <Icon /><span>{label}</span><ChevronsRight className='' />
                </Button>
            </Card>;
        });
    }
}

export default DashboardPage


