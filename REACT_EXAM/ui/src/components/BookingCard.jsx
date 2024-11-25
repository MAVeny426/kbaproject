import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const BookingCard = ({booking}) => {

  return (
    <div className='bg-red-200 rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
      <p>Room No { booking.roomno}</p>
      <p>Check_in Date {booking.checkin}</p>
      <p>Check_out Date {booking.checkout}</p>
      <p>Person_Name {booking.personname}</p>
        <div className='flex'>
      <Link  to={`/viewusers/${booking.roomno}`} className="bg-purple-500 text-white px-4 py-2   mt-4 rounded hover:bg-purple-600 self-start mx-5">Update Booking</Link>
        </div>
        
    </div>
  )
}

export default BookingCard