import React from 'react'
import { Link } from 'react-router-dom';

const DateCard = ({date}) => {

  return (
    <div className='bg-red-200 rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
     <p className='text-2xl'>Details of a Day</p>
      <p>Room No { date.roomno}</p>
      <p>Check_in Date {date.checkin}</p>
      <p>Check_out Date {date.checkout}</p>
      <p>Person_Name {date.personname}</p>
        <div className='flex'>
      <Link  to={`/viewusers/${date.roomno}`} className="bg-purple-500 text-white px-4 py-2   mt-4 rounded hover:bg-purple-600 self-start mx-5">Details</Link>
        </div>
        
    </div>
  )
}

export default DateCard