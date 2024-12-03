import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const BookingCard = ({booking}) => {

  return (
    <div className='bg-red-200 rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
      <p>UserName { booking.UserName}</p>
      
        
    </div>
  )
}

export default BookingCard