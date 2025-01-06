import { comma } from 'postcss/lib/list'
import React, { useContext, useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import { AuthContext } from '../AddProvider/AuthProvider'
import { ThemeContext } from '../AddProvider/ThemeProvider'
import { motion } from "framer-motion";

export default function RunnigComapign() {
    const [campaigns,setCamapaign] = useState([])
    const{setLoading,loading} = useContext(AuthContext)
    const { theme } = useContext(ThemeContext)
    useEffect(()=>{
        setLoading(true)
        fetch('https://server-site-topaz.vercel.app/addCompaign')
        .then(res=>res.json())
        .then((data)=>{
            const today = new Date()
            // console.log(data)
            const runningCampiangs = data.filter((campaign)=>new Date(campaign.deadline)> today)
            setCamapaign(runningCampiangs.slice(0,6))
            setLoading(false)
        })

    },[])
  return (
    <div className={`container mx-auto py-10 px-4 ${theme === 'dark' ? ' text-gray-100' : '  text-gray-900'}`}>
    <h1 className="text-3xl font-bold text-center mb-8">
      <Typewriter
        words={['Running Campaigns']}
        loop={Infinity}
        cursor
        cursorStyle='_'
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  
    {loading ? (
      <div className="flex justify-center items-center  h-40">
        <div className="spinner border-4 border-purple-600 border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
      </div>
    ) : campaigns.length === 0 ? (
      <p className="text-center text-gray-500">No running campaigns</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {campaigns.map((campaign) => (
          <div
            key={campaign._id}
            className={`card bg-     shadow-xl p-4 border ${theme === 'dark' ? 'border-gray-700' : 'border-primary'}`}
           
          >
            <figure>
              <img
                src={campaign.thumbnail}
                alt={campaign.title}
                className="h-40 w-full object-cover"
              />
            </figure>
            <div className="card-body p-2">
              <h2 className="card-title">{campaign.title.slice(0,30)}....</h2>
        
              <p className="font-bold text-xs lg:text[18px] mt-2">
                Minimum Donation: {campaign.minDonation} BDT
              </p>
              <p className="text-sm text-gray-500">
                Deadline: {new Date(campaign.deadline).toLocaleDateString()}
              </p>
              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/details/${campaign._id}`}
                  className={`btn ${theme === 'dark' ? 'bg-purple-600' : 'bg-purple-600 text-white'}`}
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  
  )
}
