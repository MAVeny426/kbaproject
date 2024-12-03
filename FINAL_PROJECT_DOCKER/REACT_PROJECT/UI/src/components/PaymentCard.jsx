import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const PaymentCard = ({payment}) => {
// console.log("trying",Payment.Cardno);

  return (
    <div className='bg-red-50 rounded-md shadow-2xl w-[490px] h-[200px] flex flex-col items-center justify-center mx-5 my-5 py-10'>
      <p className='text-xl'>UserName :{payment.UserName}</p>
      <p className='text-xl'>Email : {payment.Email}</p>
      <p className='text-xl'>Phone : {payment.Phone}</p>
      <p className='text-xl'>Date: {payment.Date}</p>
      <p className='text-xl'>Time : {payment.Time}</p>
      <p className='text-xl'>VehicleBrand : {payment.VehicleBrand}</p>
      <p className='text-xl'>Address: {payment.Address}</p>
      {/* <p className='text-2xl font-bold text-orange-600'> { payment.Cardno}</p> */}
      {/* <p className='text-2xl'>Amount: {payment.Expi}</p> */}
      
      {/* <p>Details: {service.Description}</p> */}
        {/* <div className='flex'>
      <Link  to={`/BookingService/${service.ServiceName}/${service.Amount}/${service.Description}`} className="bg-purple-500 text-white px-4 py-2   mt-4 rounded hover:bg-purple-600 self-start mx-5">Book Now</Link>
        </div> */}
        
    </div>
  )
}

export default PaymentCard 