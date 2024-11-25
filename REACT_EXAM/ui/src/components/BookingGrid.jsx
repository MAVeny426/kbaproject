import React,{useState,useEffect} from 'react'
import BookingCard from './BookingCard';

const BookingGrid  = ({isHome}) => {
        const [bookings,setBookings] = useState([]); 
      
        const BookkingList = isHome ? bookings.slice(0,3) : bookings
      
        useEffect(()=>{
          const fetchBookking=async()=>{
            try{
              const res=await fetch('/api/viewusers');
              const data=await res.json();
              setBookings(data);
            }
            catch(error){
              console.log('Error fetching Booking Details',error)
            }
          };
          fetchBookking();
        },[]);
  return (
    <>
    <h1 className='flex flex-col items-center font-bold text-2xl md:text-4xl text-purple-800 pt-10'>
      {isHome ? 'Booking Details':' Users List'}
    </h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
            {BookkingList.map((booking)=>(
                <BookingCard key={booking.roomno}booking={booking}/>
            ))}
    </div>
    </>
  )
}

export default BookingGrid