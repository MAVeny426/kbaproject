import React from 'react'
import ContactGrid from '../components/ContactGrid'
import Navbar from '../components/Navbar'

const Viewmessage = () => {
  return (
    <>
    <Navbar />
    <h1 className='text-center text-2xl font-bold mt-10'>All Message Details</h1> 
    <ContactGrid />
    </>
  )
}

export default Viewmessage