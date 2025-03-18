import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-232px)] mx-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default Root
