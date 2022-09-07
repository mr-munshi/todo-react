import React from 'react'
import { Main, Navbar, Sidebar } from '../../components'

const Landing = () => {
    return (
        <div id='landing' className='h-screen flex overflow-hidden bg-gray-100'>
            <Sidebar />
            <div className='flex flex-col w-0 flex-1 overflow-hidden'>
                <Navbar />
                <Main />
            </div>
        </div>
    )
}

export default Landing