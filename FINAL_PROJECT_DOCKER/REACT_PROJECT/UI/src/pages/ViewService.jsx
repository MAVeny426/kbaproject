import React from 'react' 
import Navbar from '../components/Navbar'
import AddGrid from '../components/AddGrid'

const ViewService = () => {
  return (
    <>
    <Navbar />
    <h1 className='text-center text-2xl font-bold mt-10'>All Service Details</h1> 
    <AddGrid />
    </>
  )
}

export default ViewService