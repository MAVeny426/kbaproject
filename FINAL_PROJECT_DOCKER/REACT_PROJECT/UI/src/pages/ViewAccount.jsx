import React from 'react';
import { useParams } from 'react-router-dom';
import wallpaper2 from '../assets/images/wallpaper2.jpg'
import Navbar from '../components/Navbar';

const ViewAccount = () => {
  // Extract payment details from URL parameters
  const {
    ServiceName,
    Amount,
    UserName,
    Email,
    Phone,
    Date,
    Time,
    VehicleBrand,
    Address,
  } = useParams(); // useParams() retrieves the params from the URL

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${wallpaper2})` }}>
      <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-10">
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">Payment Confirmation Slip</h2>
          
          <div className="space-y-4 text-lg">
            <p><strong className="text-blue-600">User Name:</strong> {UserName}</p>
            <p><strong className="text-blue-600">Email:</strong> {Email}</p>
            <p><strong className="text-blue-600">Phone:</strong> {Phone}</p>
            <p><strong className="text-blue-600">Service Name:</strong> {ServiceName}</p>
            <p><strong className="text-blue-600">Amount:</strong> {Amount}</p>
            <p><strong className="text-blue-600">Date:</strong> {Date}</p>
            <p><strong className="text-blue-600">Time:</strong> {Time}</p>
            <p><strong className="text-blue-600">Vehicle Brand:</strong> {VehicleBrand}</p>
            <p><strong className="text-blue-600">Address:</strong> {Address}</p>
          </div>

          <button
            className="bg-blue-500 text-white px-6 py-3 w-full rounded-lg mt-6 hover:bg-blue-600 transition duration-300"
            onClick={() => window.history.back()}
          >
            Back to Payment
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ViewAccount;
