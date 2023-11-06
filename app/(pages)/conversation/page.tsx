import FormSection from '@/components/FormSection'
import { MessageSquare, MessagesSquare } from 'lucide-react'
import React from 'react'

type Props = {}

const ConversationPage = (props: Props) => {
    return (
        <div className='h-full'>
            <PageHeader />
            <FormSection />
        </div>
    )
}

export default ConversationPage

function PageHeader() {
    return (
        <div className='flex flex-row font-bold text-xl gap-2 items-center justify-center mb-2'>
            <MessagesSquare className='' /> Conversation Page
        </div>
    );
}