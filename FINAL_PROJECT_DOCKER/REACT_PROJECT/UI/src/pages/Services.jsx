import React from 'react'
import Navbar from '../components/Navbar'
import FooterPage from '../components/FooterPage'
import wallpaper from '../assets/images/wallpaper.jpg'

const Services = () => {
  return (
    <>
    <Navbar />
    <div>
         <p className=" bg-orange-300 h-24 text-2xl  pl-[300px] py-8">Our Services</p>
      </div>
        <div className="h-screen bg-cover  bg-white  h-[600px]" style={{ backgroundImage: `url(${wallpaper})` }} >
            
            
            <div className="flex justify-center">
                   <div className="w-[200px] border  ml-8 mr-8 py-4 px-4 bg-yellow-300 mt-[100px] hover:opacity-75">
                       <p>To make bike servicing a trouble-free experience, 
                        we facilitate On location bike service in Delhi. 
                        Our team of expert mechanic offers the best bike 
                        service at home in Delhi, by following authorize 
                        servicing procedures.</p>
                </div>
                <div className="w-[200px] border  ml-8 mr-8 py-4 px-4 bg-red-300 mt-[100px] hover:opacity-75">
                    <p>To make bike servicing a trouble-free experience, 
                        we facilitate On location bike service in Delhi. 
                        Our team of expert mechanic offers the best bike 
                        service at home in Delhi, by following authorize 
                        servicing procedures.</p>
                </div>
                <div className="w-[200px] border  ml-8 mr-8 py-4 px-4 bg-yellow-300 mt-[100px] hover:opacity-75">
                    <p>To make bike servicing a trouble-free experience, 
                        we facilitate On location bike service in Delhi. 
                        Our team of expert mechanic offers the best bike 
                        service at home in Delhi, by following authorize 
                        servicing procedures.</p>
                </div>
                <div className="w-[200px] border  ml-8 mr-8 py-4 px-4 bg-red-300 mt-[100px] hover:opacity-75">
                    <p>To make bike servicing a trouble-free experience, 
                        we facilitate On location bike service in Delhi. 
                        Our team of expert mechanic offers the best bike 
                        service at home in Delhi, by following authorize 
                        servicing procedures.</p>
                </div>
            </div>
        </div>
    <div className="mt-12">
             <p className="text-4xl text-center text-red-600 font-bold ">Service Checklist</p>
             <div className="flex justify-center">
                <div className="px-4 py-4 ml-8 mr-8">
                    <div>
                        <p className="text-red-600 text-2xl font-semibold">1.Engine Fluid</p>
                        <p className="italic ">Change the oil,oil filters and coolent level</p>
                     </div>
                     <div>
                        <p className="text-red-600 text-2xl font-semibold">2.Breakes</p>
                        <p className="italic ">Check break  fuild levels,break pad wears</p>
                     </div>
                     <div>
                        <p className="text-red-600 text-2xl font-semibold">Cluch</p>
                        <p className="italic ">Cluch adjustment</p>
                     </div>
                     <div>
                        <p className="text-red-600 text-2xl font-semibold">3.Front-rear-Wheel</p>
                        <p className="italic ">Air pressure levelled,wheel rotation and cush rubbers</p>
                     </div>
                     <div>
                        <p className="text-red-600 text-2xl font-semibold">4.Drive Train</p>
                        <p className="italic ">Look over the sprockets,and chain for any wear.Clean the chain and lubricate it.</p>
                     </div>
                 </div>
                      
                 <div>

                 </div>
    
                 <div className="px-4 py-4 ml-8 mr-8 "> 
                    <div>
                        <p className="text-red-600 text-2xl font-semibold ">5.Fuel System</p>
                        <p className="italic ">Drain and replace old fuel if it is still from so long</p>
                     </div>
                     <div>
                        <p className="text-red-600 text-2xl font-semibold">6.Battery</p>
                        <p className="italic ">Battery terminals should be cleanes and connections should be tightend</p>
                     </div>
                     <div>
                        <p className="text-red-600 text-2xl font-semibold">7.Suspension</p>
                        <p className="italic ">Suspension Adjestment</p>
                     </div>
                     <div>
                        <p className="text-red-600 text-2xl font-semibold">8.Air Filter</p>
                        <p className="italic ">Remove the debris and replace the filters if it is dirty</p>
                     </div>
                     <div>
                        <p className="text-red-600 text-2xl font-semibold">9.Lights,Cables</p>
                        <p className="italic ">Test all lights,|Confirm throttle,,brake and Cluch cables,operate smoothly</p>
                     </div>
                 </div>
             </div>
             
        </div>
    <FooterPage />
    </>
  )
}

export default Services