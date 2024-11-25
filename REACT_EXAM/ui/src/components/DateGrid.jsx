import React,{useState,useEffect} from 'react'
import DateCard from './DateCard';

const DateGrid  = ({isHome}) => {
        const [dates,setDates] = useState([]); 
      
        const DatesList = isHome ? dates.slice(0,3) : dates
      
        useEffect(()=>{
          const fetchDates=async()=>{
            try{
              const res=await fetch('/api/viewdates');
              const data=await res.json();
              setDates(data);
            }
            catch(error){
              console.log('Error fetching Booking Details of a day',error)
            }
          };
          fetchDates();
        },[]);
  return (
    <>
    <h1 className='flex flex-col items-center font-bold text-2xl md:text-4xl text-purple-800 pt-10'>
      {isHome ? 'Dates Details':' User List by dates'}
    </h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
            {DatesList.map((date)=>(
                <DateCard key={date.roomno}date={date}/>
            ))}
    </div>
    </>
  )
}

export default DateGrid