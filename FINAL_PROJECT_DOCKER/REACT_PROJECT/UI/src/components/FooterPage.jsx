import React from 'react'
import mylogo2 from '../assets/images/mylogo2.jpg'

const FooterPage = () => {
  return (
    <>
     <div className="bg-slate-900 mt-8 h-[150px] flex justify-center">
            
            <div className=" w-[900px]">
                  <p className="text-4xl text-center text-white font-serif">As we say,bike servicing its not a thing to worry about</p>
                  <p className="text-2xl text-center text-white font-serif">Leave it on us</p>
                  <p className="text-4xl text-center text-white font-serif">Call us at +91 8593851244</p>
            </div>
         </div> 
    
         <div className="bg-slate-500 h-[400px] ">
    
          <div className=" flex justify-center ">
              <div className="mr-12 mt-12">
                  <p className="text-sm text-slate-300 mt-4 ">Email</p>
                  <p>Example1234@gmail.com</p>
                  <p>Example1234@gmail.com</p>
                  <a href=""></a>
                  <p className="text-sm text-slate-300 mt-4">Location</p>
                  <p> Thiruvananthapuram,Near Technopark Phase 4 , <br></br>TBN building,<br></br>First Floor</p>
                  <a href='' ></a>
                  <p className="text-sm text-slate-300 mt-4">Contact Number</p>
                  <p>91+ 8593851244</p>
                  <p>91+ 8593851244</p>
                  <a href=""></a>
              </div>
                  
               <div className="mr-12 mt-12"> 
                <img src={mylogo2} alt="" className="w-[200px] h-[200px] rounded-2xl"/>
               </div> 
              
          </div>
    
       </div>
    
    </>
  )
}

export default FooterPage