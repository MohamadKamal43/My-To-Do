import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

export default function RootLayout() {
  return (
    <div className='flex flex-col h-screen  bg-gradient-to-br from-blue-50 to-indigo-100'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
