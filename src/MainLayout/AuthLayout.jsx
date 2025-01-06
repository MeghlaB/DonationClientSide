import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function AuthLayout() {
  return (
    <div>
      <Header></Header>
      <div className='min-h-[calc(100vh-288px)] items-center justify-center  flex my-5'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}
