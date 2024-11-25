import React from 'react'
import BookingGrid from '../components/BookingGrid'
import Navbar from '../components/Navbar'

const Viewbooking = () => {
  return (
    <>
    <Navbar />
    <h1 className='text-center text-2xl font-bold mt-10'>All Booking Details</h1> 
    <BookingGrid isHome={false} />
    </>
  )
}

export default Viewbooking