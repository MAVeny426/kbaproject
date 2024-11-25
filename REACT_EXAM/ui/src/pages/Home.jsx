import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'


const Home = () => {
    const [checkin,setCheckin]=useState('');
    const navigate=useNavigate();

    const CheckSubmit= async (e) => {
      e.preventDefault();
      const bookingdetails = {
        checkin
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
        navigate('/viewdate');
    }else{
        toast.error('Please check your credentials')
    }
    }
  return (
  <>
  <Navbar />
  <form onSubmit={CheckSubmit} className="p-6 bg-gray-400 p-10 rounded shadow-xl w-[400px] mt-10 ml-[100px]">
      <div className="mb-6">
        <label htmlFor="inputdate" className="block text-lg font-medium text-gray-700">Enter Date</label>
        <input type="date" id="inputdate" name="inputdate" className="w-[200px] p-3 mt-2 border border-gray-300 rounded" value={checkin} onChange={(e) => setCheckin(e.target.value)}/>
      </div>

      <div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 mt-4">Search
        </button>
      </div>
    </form>

  </>
  )
}

export default Home