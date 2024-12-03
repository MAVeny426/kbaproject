import React,{useState} from 'react'
// import { Link } from 'react-router-dom';

const ContactCard = ({message}) => {

  return (
    <div className='bg-red-200 rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
      <p>UserName { message.UserName}</p>
      <p>Email {message.Email}</p>
      <p>Subject {message.Subject}</p>
      <p>Message {message.Message}</p>
        {/* <div className='flex'>
      <Link  to={`/UpdateService/${service.ServiceName}`} className="bg-purple-500 text-white px-4 py-2   mt-4 rounded hover:bg-purple-600 self-start mx-5">Update Service</Link>
        </div> */}
        
    </div>
  )
}

export default ContactCard