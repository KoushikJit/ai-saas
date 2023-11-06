import React from 'react'
import Nav from '@/components/Nav';
import { DBoardSideBar } from '@/components/DBoardSideBar';


type Props = {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
    // session 

    //state
    //effect


    return (
        <div className='bg-stone-50 h-screen'>
            <aside id="dashboard-sidebar" className='fixed top-0 left-0 z-20 w-64 h-screen bg-stone-400'>
                <DBoardSideBar />
            </aside>

            <main className='ml-64 p-2'>
                <Nav />
                {children}
            </main>
            {/* <main className='ml-64 p-2' style={{ height: '92vh' }}>{children}</main> */}
        </div>
    )
}

export default DashboardLayout

