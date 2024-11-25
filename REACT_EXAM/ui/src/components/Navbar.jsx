import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='bg-purple-100 text-purple-950 p-10 rounded shadow-xl flex flex-col items-center justify-center mt-1 text-center'>
    <h1 className='font-bold text-xl md:text-3xl lg:text-4xl'>Hotel Room Reservation</h1>

    <div className='float-right'>
    <Link to='/home' className='ml-20'>Home</Link>
    <Link to='/addbooking' className='ml-20'>Booking</Link>
    <Link to='/viewbooking' className='ml-20'>View Booking</Link>
    <Link to='/viewdate' className='ml-20'>View Date</Link>
    </div>

    </div>
     
    </>
  )
}

export default Navbar