import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import FooterPage from '../components/FooterPage'
import UserViewGrid from '../components/UserViewGrid'


const Booking = () => {

  
  return (
    <>
        <Navbar /> 
        <div className='mt-12 text-center'>
            <p className='text-4xl font-semibold'>Book online service</p>
        </div>
        <div className="flex bg-cover h-screen" >
        
        <UserViewGrid />
            
            

        </div>
       
        
        <FooterPage />
    </>
  )
}

export default Booking;
