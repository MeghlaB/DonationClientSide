import React, { useContext } from 'react'
import Banner from '../Home/Banner'
import RunnigComapign from '../Home/RunnigComapign'
import HowItwork from '../Home/HowItwork'
import Feauterd from '../Home/feauterd'
import Blog from '../Pages/Blog'
import { ThemeContext } from '../AddProvider/ThemeProvider'

export default function Home() {
  const { theme } = useContext(ThemeContext)
  return (
    <div >
      <Banner></Banner>
      <RunnigComapign></RunnigComapign>
      <HowItwork></HowItwork>
      <Feauterd></Feauterd>
      <Blog></Blog>
    </div>
  )
}
