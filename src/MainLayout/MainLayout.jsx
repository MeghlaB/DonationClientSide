import React, { useContext } from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import { ThemeContext } from '../AddProvider/ThemeProvider'

export default function MainLayout() {
  const {theme}= useContext(ThemeContext)
  return (
    <div className={`w-full ${theme === 'dark' ? ' text-gray-100' : ' bg-[#F7F7F7]  text-gray-900'}`}>
    <header>
       <Header></Header>
   </header>
   <div className='min-h-[calc(100vh-288px)]'>
   <Outlet></Outlet>
   </div>
   <Footer></Footer>
  </div>
  )
}
