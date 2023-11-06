"use client"
import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from './ui/separator';
import { pageDivisions } from '@/app/(pages)/dashboard/divisions';
import { cn } from '@/lib/utils';
import Icon from './Icon';
import logo from '@/public/mountain.png';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronRight, ChevronsRight, LucideIcon } from 'lucide-react';

export function DBoardSideBar() {



    //others
    const pathname = usePathname()

    return (
        <div className='h-screen flex flex-col justify-between'>
            <div id="side-bar" className="px-2">
                <Link href={'/'} className='flex flex-row items-center'>
                    <Image id="logo" width={50} height={50} className='h-14 w-14 p-0 rounded-full' src={logo} alt={''} />
                    <p className="text-2xl font-bold tracking-tighter">AI SaaS</p>
                </Link>
                <Separator className='my-1 border-4 border-black rounded-full' />
                {pageDivisions.map(({
                    label,
                    href,
                    color,
                    icon: Icon
                }, i) => {
                    const divSelected = (pathname === href)
                    const divClass = divSelected ? 'bg-stone-300 border border-stone-500' : ''
                    return (
                        <div key={"" + label + href + color}>
                            <Link
                                className={cn(buttonVariants({ variant: 'ghost' }), 'w-full justify-start gap-3', divClass)}
                                href={href as string} key={href as string}>
                                {Icon && <Icon color={color as string}/>}
                                {label}
                                {divSelected && <ChevronsRight className='ml-4' />}
                            </Link>
                        </div>
                    );
                })}
            </div>
            {/* <div id="bottom-of-sidebar">
                <Button variant={'ghost'} className='w-full'>Click!</Button>
            </div> */}

        </div>
    );
}