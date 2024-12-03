import React from 'react'
import PaymentGrid from '../components/PaymentGrid'
import Navbar from '../components/Navbar'

const ViewBooking = () => {
  return (
    <>
    <Navbar />
    <h1 className='text-center text-2xl font-bold mt-10'>All Bookings Details</h1> 
    <PaymentGrid />
    </>
  )
}

export default ViewBooking