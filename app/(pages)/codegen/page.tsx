import FormSectionCode from '@/components/FormSectionCode'
import { CodeIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const CodegenPage = (props: Props) => {
    return (
        <div className='h-full'>
            <PageHeader />
            <FormSectionCode />
        </div>
    )
}

export default CodegenPage

function PageHeader() {
    return (
        <div className='flex flex-row font-bold text-xl gap-2 items-center justify-center mb-2'>
            <CodeIcon className='' /> Code Generation Page
        </div>
    );
}