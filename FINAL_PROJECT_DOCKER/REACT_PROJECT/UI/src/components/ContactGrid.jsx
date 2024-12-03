import React, { useState, useEffect } from 'react';
import ContactCard from '../components/ContactCard';

const ContactGrid = ({ isHome }) => {
    const [messages, setMessages] = useState([]);

    const MessageList = isHome ? messages.slice(0, 3) : messages;

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await fetch('/api/viewmessage');
                
                // Check if the response is ok (status 200-299)
                if (!res.ok) {
                    console.log('Error fetching Message Details');
                }

                const data = await res.json(); // Parse the JSON data
                setMessages(data); // Store the services in state
            } catch (error) {
                console.log('Error fetching Message Details', error);
            }
        };

        fetchMessages();
    }, []);

    return (
        <>
            <h1 className='flex flex-col items-center font-bold text-2xl md:text-4xl text-purple-800 pt-10'>
                {isHome ? 'Message Details' : 'Lists'}
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
                {MessageList.map((message) => (
                    <ContactCard key={message.UserName} message={message} />
                ))}
            </div>
        </>
    );
};

export default ContactGrid;




















// import React,{useState,useEffect} from 'react'
// import AddCard from './AddCard';

// const AddGrid  = () => {
//         const [services,setServices] = useState([]); 
      
//         // const ServiceList = isHome ? services.slice(0,3) : services
      
//         useEffect(()=>{
//           const fetchService=async()=>{
//             try{
//               const res=await fetch('/api/viewservice');
//               const data=await res.json();
//               setServices(data);
//             }
//             catch(error){
//               console.log('Error fetching AddService Details',error)
//             }
//           };
//           fetchService();
//         },[]);
//   return (
//     <>
//     <h1 className='flex flex-col items-center font-bold text-2xl md:text-4xl text-purple-800 pt-10'>
  
//     </h1>
//     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
//             {services.map((service)=>(
//                 <AddCard key={services.ServiceName}service={service}/>
//             ))}
//     </div>
//     </>
//   )
// }

// export default AddGrid