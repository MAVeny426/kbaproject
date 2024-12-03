import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AddService = () => {
  const [ServiceName, setServiceName] = useState('');
  const [Amount, setAmount] = useState('');
  const [Description, setDescription] = useState('');
  const navigate=useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const addservice = {
      ServiceName,
      Amount,
      Description,
    };
    const res= await fetch('/api/addservice',{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify(addservice),
                credentials:'include',
    })
    if(res.ok){
      const data=await res.json();
      alert('Service Added Successfully')
      navigate('/ViewService');
  }else{
      toast.error('Please check your credentials')
  }
  };

  return (
    <>
    <Navbar />
    <div className="w-full max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-xl rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add Service</h2>

        {/* Service Name Input */}
        <div className="mb-4">
          <label htmlFor="serviceName" className="block text-lg">Service Name</label>
          <input
            type="text"
            id="serviceName"
            value={ServiceName}
            onChange={(e) => setServiceName(e.target.value)}
            placeholder="Enter service name"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </div>

        {/* Amount Input */}
        <div className="mb-4">
          <label htmlFor="amount" className="block text-lg">Amount</label>
          <input
            type="number"
            id="amount"
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg">Description</label>
          <textarea
            id="description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddService;
