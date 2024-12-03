import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const UserViewCard = ({service}) => {
console.log("trying",service.ServiceName);

  return (
    <div className='bg-red-50 rounded-md shadow-2xl w-[490px] h-[200px] flex flex-col items-center justify-center mx-5 my-5 py-10'>
      <p className='text-2xl font-bold text-orange-600'> { service.ServiceName}</p>
      <p className='text-2xl'>Amount: {service.Amount}</p>
      <p>Details: {service.Description}</p>
        <div className='flex'>
      <Link  to={`/BookingService/${service.ServiceName}/${service.Amount}/${service.Description}`} className="bg-purple-500 text-white px-4 py-2   mt-4 rounded hover:bg-purple-600 self-start mx-5">Book Now</Link>
        </div>
        
    </div>
  )
}

export default UserViewCard