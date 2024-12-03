import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const AddCard = ({service}) => {
console.log("trying",service.ServiceName);
  
   const deleteService =async()=>{
      const res= await fetch(`/api/deleteservice/${service.ServiceName}`,{
        method:'DELETE',
      })
      if(res.ok){
        alert("remove successfully")
        window.location.reload();
      }else
      {
        alert("error on remove")
      }
   }

  return (
    <div className='bg-red-50 rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
      <p className='text-2xl font-bold'>Service Name : { service.ServiceName}</p>
      <p>Check_in Date {service.Amount}</p>
      <p>Check_out Date {service.Description}</p>
        <div className='flex'>
      <Link  to={`/UpdateService/${service.ServiceName}`} className="bg-purple-500 text-white px-4 py-2   mt-4 rounded hover:bg-purple-600 self-start mx-5">Update Service</Link>
        </div>
        <div className='flex'>
      <Link  onClick={deleteService} className="bg-purple-500 text-white px-4 py-2   mt-4 rounded hover:bg-purple-600 self-start mx-5">Delete Service</Link>
        </div>
        
    </div>
  )
}

export default AddCard