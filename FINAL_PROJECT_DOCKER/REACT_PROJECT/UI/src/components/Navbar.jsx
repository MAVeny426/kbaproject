import React, { useEffect, useState } from 'react'
import text from '../assets/images/text.png'
import logoname from '../assets/images/logoname.png'
import mylogo3 from '../assets/images/mylogo3.png'
import { Link } from 'react-router-dom'
import { logUserType } from '../utils/utilsAuth'

const Navbar = () => {
  const UserType = localStorage.getItem('UserType');
  console.log(UserType); // 'admin' (or whatever value was stored)
  return (
    <>
    
    <div  className=" w-[1820px] h-[100px] mt-4">
          <nav className="bg-white font-mono  shadow-xl h-[80px]  mt-4">
            

          {UserType === 'user' && (  <div className="float-right mt-4">
           
                  <Link to="/Home" className="ml-8 hover:bg-slate-400 p-2 rounded-lg">Home</Link>
                  <Link to="/Services" className="ml-8 hover:bg-slate-400 p-2 rounded-lg">Services</Link>
                  <Link to="/Booking" className="ml-8 hover:bg-slate-400 p-2 rounded-lg">Booking</Link>
                  <Link to="/About" className="ml-8 hover:bg-slate-400 p-2 rounded-lg">About Us</Link>
                  <Link to="/Contact" className="ml-8 hover:bg-slate-400 p-2 rounded-lg">Contact Us</Link>

                  <Link to="/" className="ml-8 hover:bg-slate-400 p-2 rounded-lg">Logout</Link>
</div> )}  

{UserType === 'admin' && ( 
  <div className="float-right mt-4">
          <Link to='/Addservice' className='ml-10 hover:bg-slate-400 p-2 rounded-lg'>Add Service</Link>
          <Link to='/Viewservice' className='ml-10 hover:bg-slate-400 p-2 rounded-lg'>View Service</Link>
          <Link to='/Viewmessage' className='ml-10 hover:bg-slate-400 p-2 rounded-lg'>View Messages</Link>
          <Link to='/ViewBooking' className='ml-10 hover:bg-slate-400 p-2 rounded-lg'>View Booking</Link>
          <Link to='/' className='ml-10 hover:bg-slate-400 p-2 rounded-lg'>Logout</Link>
</div>
 )}  
 

           <div className="flex">
           <div>
              <img className="w-[100px] h-[100px]  " src={mylogo3} alt=""/>
             </div>
             <div>
                <img src={text} className="w-[80px] h-[70px] mt-2 ml-[100px]" alt=""/>
            </div>
             <div>
                 <img src={logoname} className="w-[600px] h-[60px] mt-2 ml-[100px]" alt=""/>
            </div>
          </div> 
          </nav>
           
          </div>




  </>
        
  )
}


export default Navbar