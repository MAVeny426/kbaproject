import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import wallpaper2 from '../assets/images/wallpaper2.jpg';
import location from '../icons/location.png'
import phone from '../icons/phone.png'
import { useNavigate } from 'react-router-dom';

const Contact = () => {

  const [UserName,setUserName]=useState('');
  const [Subject,setSubject]=useState('');
  const [Email,setEmail]=useState('');
  const [Message,setMessage]=useState('');
  const navigate=useNavigate();

  const messageSubmit= async (e) => {
    e.preventDefault();
    const messagedetails = {
        UserName,
        Subject,
        Email,
        Message
    };
    const res= await fetch('/api/message',{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify(messagedetails),
                credentials:'include',
    })
    if(res.ok){
      const data=await res.json();
      alert('Message Successfully Send')
      navigate('/Contact');
  }else{
      alert("Please fill the information")
  }
  }
  return (
    <>
      <Navbar />
      <div className="h-screen bg-cover bg-no-repeat bg-center relative flex" style={{ backgroundImage: `url(${wallpaper2})` }}>
        {/* Add a blur effect to the background */}
        <div className="absolute  w-full h-full bg-black bg-opacity-40 backdrop-blur-sm flex"></div>
        
        {/* Form container inside the wallpaper started*/}

       
        
        <div className='flex flex-row'> 

<div className="absolute top-[160px] left-[200px] text-white bg-transparent p-8 rounded-lg shadow-xl max-w-[600px]">

  
  <div className='inline-flex'>
    <img src={location} className='w-[40px] h-10'/>
    <p className='text-4xl font-mono font-semibold ml-4'>Location</p>
  </div>
  <div className='top-[100px]'>
    <p className='mt-[20px] text-lg'>Thiruvananthapuram, Technopark Phase 1, Kazhakkoottam</p>
  </div>

 
  <div className='inline-flex mt-[50px]'> 
    <img src={phone} className='w-[40px] h-10'/>
    <p className='text-4xl font-mono font-semibold ml-4'>Call</p>
  </div>
  <div className='top-[100px]'>
    <p className='mt-[20px] text-lg'>+91 8593851244</p>
    <p className='mt-[20px] text-lg'>+91 9778784318</p>
  </div>

  <div className='inline-flex mt-[50px]'> 
    <img src={phone} className='w-[40px] h-10'/>
    <p className='text-4xl font-mono font-semibold ml-4'>Bussiness Hours</p>
  </div>
  <div className='top-[100px]'>
    <p className='mt-[20px] text-lg'>Mon - Fri …… 10 am - 8 pm, Sat, Sun ....… Closed</p>
    <p className='mt-[20px] text-lg'>Online Application -Any Time</p>
  </div>

</div>

</div>


        <div>
        <div className="absolute top-[460px] left-[1200px] transform -translate-x-1/2 -translate-y-1/2 bg-transparent p-8 rounded-lg shadow-xl w-full max-w-[600px]">
        <h2 className=" font-semibold text-center mb-6 text-white text-6xl font-bold font-serif">Contact Us</h2>
          <form className="space-y-6" onSubmit={messageSubmit}>
            
            {/* Name Field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-white mb-2">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={UserName}
                onChange={(e) =>setUserName(e.target.value)}
                placeholder="Enter your name"
                className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-white mb-2">Your E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                value={Email}
                onChange={(e) =>setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            {/* Subject Field */}
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-sm font-medium text-white mb-2">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={Subject}
                onChange={(e) =>setSubject(e.target.value)}
                placeholder="Enter the subject"
                className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-white mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={Message}
                onChange={(e) =>setMessage(e.target.value)}
                rows="6"
                placeholder="Write your message here..."
                className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            >
              Submit
            </button>
          </form>  
        </div>
        </div>
      </div>






       


     
    </>
  );
};

export default Contact;
