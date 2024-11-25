import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Addbooking = () => {
  const [roomno,setRoomno]=useState('');
  const [checkin,setCheckin]=useState('');
  const [checkout,setCheckout]=useState('');
  const [personname,setPersonname]=useState('');
  const navigate=useNavigate();

  const bookingSubmit= async (e) => {
    e.preventDefault();
    const bookingdetails = {
      roomno,
      checkin,
      checkout,
      personname
    };
    const res= await fetch('/api/addbooking',{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify(bookingdetails),
                credentials:'include',
    })
    if(res.ok){
      const data=await res.json();
      alert('Reservation success')
      navigate('/home');
  }else{
      toast.error('Please check your credentials')
  }
  }
  return (
    <>
    <form className="bg-gray-100 p-10 rounded shadow-xl max-w-lg mx-auto mt-10" onSubmit={bookingSubmit}>
  <div className="mb-4">
    <label htmlFor="room-no" className="block text-lg font-medium text-gray-700">Room Number</label>
    <input 
      type="text" 
      id="roomno" 
      name="roomno" 
      value={roomno}
      onChange={(e) =>setRoomno(e.target.value)}
      className="w-full p-3 mt-2 border border-gray-300 rounded" 
      placeholder="Enter room number" 
    />
  </div>
  
  <div className="mb-4">
    <label htmlFor="checkin" className="block text-lg font-medium text-gray-700">Check-in Date</label>
    <input 
      type="date" 
      id="checkin" 
      name="checkin" 
      value={checkin}
      onChange={(e) =>setCheckin(e.target.value)}
      className="w-full p-3 mt-2 border border-gray-300 rounded" 
    />
  </div>
  
  <div className="mb-4">
    <label htmlFor="checkout" className="block text-lg font-medium text-gray-700">Check-out Date</label>
    <input 
      type="date" 
      id="checkout" 
      name="checkout" 
      value={checkout}
      onChange={(e) =>setCheckout(e.target.value)}
      className="w-full p-3 mt-2 border border-gray-300 rounded" 
    />
  </div>
  
  <div className="mb-4">
    <label htmlFor="person-name" className="block text-lg font-medium text-gray-700">Person's Name</label>
    <input 
      type="text" 
      id="personname" 
      name="personname" 
      value={personname}
      onChange={(e) =>setPersonname(e.target.value)}
      className="w-full p-3 mt-2 border border-gray-300 rounded" 
      placeholder="Enter your name" 
    />
  </div>

  <div className="text-center">
    <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700">Submit</button>
  </div>
</form>

    </>
  )
}

export default Addbooking