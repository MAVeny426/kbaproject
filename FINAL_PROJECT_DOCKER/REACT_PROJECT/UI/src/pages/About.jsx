import React from 'react'
import Navbar from '../components/Navbar'
import wallpaper2 from '../assets/images/wallpaper2.jpg'
import man from '../assets/images/man.jpg'
import FooterPage from '../components/FooterPage'

const About = () => {
  return (
    <>
    <Navbar />
    <div class="flex mt-[100px] ml-[100px]">
            <div class="">
                  <img src={wallpaper2} class="w-[400px] h-[400px]" alt=""/>
            </div>

            <div class="ml-[100px] w-[800px]">
                <p class="text-4xl font-serif font-bold">WELCOME TO TBN</p><br/>
                 <p class="font-semibold font-serif">Mechanic at your doorstep conceptualized to make bike servicing a hassle-free experience for two-wheeler users.</p><br/>
                 <p class="font-serif">Our main USP is On location bike service. In other words, we offer an On-demand bike service at your convenience.</p><br/>
                 <p class="font-serif">Because, we understand the mess of getting your bike service done at the authorized service centers or at a neighborhood workshop 
                    (those long waiting's at the service center, overpriced bills, transparency at work and most importantly if used genuine products or not). 
                    Therefore, to cut down all of these and to make bike servicing the most convenient and easy-going process. We now bring a GARAGE at your doorstep….. 
                    aha.. by saying garage we mean - experienced mechanic with a set of required tools and genuine spare parts, specially trained to work on different locations.</p><br/>
                 <p class="font-serif">Now you can stay at your home and spend leisure time with your family, meanwhile, we'll service your bike at your doorstep.</p><br/>   
                 <p class="font-serif font-semibold">“We Care For Your Ride “</p><br/>
                 <p class="font-serif">In addition, offers Pick & Drop service and repair works at our service center. We have our own inventory of the 
                    Genuine/OEM spare parts which helps in making the whole process easier and time-saving with work transparency.</p><br/>
            </div> 
        </div>

        <div class="flex ">
            <div class="ml-[100px] w-[900px]">
                    <p class="text-4xl font-serif font-semibold">Service at your Convenience</p><br/>
                    <p>With TBN, you can book a bike service online as per your preferred date, time and location. Once the booking is made, 
                        you'll get a callback in a maximum of 30 minutes to understand more about your two-wheeler's condition. The mechanic will report to your 
                        location on the provided ETA. In the maximum two hours, your two-wheeler will be serviced and handed over to you. A test ride by the user is 
                        mandatory if you need any further adjustments. Now, is the time to pay the very reasonable bill which will be shared with you after work 
                        completion.</p><br/>

                        <ul>
                            <li>We also fulfill bike accessory needs.</li>
                            <li>Multi-payment option</li>
                        </ul>
            </div>
                    <img src={man} alt="" class="w-[500px] h-[400px]"/>
            </div>
            <FooterPage />
    </>
  )
}

export default About