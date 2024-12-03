import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const BookingService = () => {
  const [UserName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Date, setDate] = useState('');
  const [Time, setTime] = useState('');
  const [VehicleBrand, setVehicleBrand] = useState('');
  const [Address, setAddress] = useState('');
  const navigate = useNavigate();

  const { ServiceName, Amount, Description } = useParams(); // Get the serviceName from the URL
  const [serviceDetails, setServiceDetails] = useState(null);

  // Fetch service details when the component mounts
  useEffect(() => {
    const fetchServiceDetails = async () => {
      // Here you would replace the mock data with an actual API call
      const mockServiceData = {
        ServiceName,
        Amount,
        Description,
      };
      setServiceDetails(mockServiceData);
    };

    fetchServiceDetails();
  }, [ServiceName]);

  const bookingSubmit = async (userDetails) => {
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });
      const data = await res.json();
      
      if (res.status === 200) {
        alert('Booking Successful! Please proceed to Payment.');
        navigate(`/Payment/${ServiceName}/${Amount}/${UserName}/${Email}/${Phone}/${Date}/${Time}/${Address}/${VehicleBrand}`);

      } else if (res.status === 403) {
        alert('Information is not matching. Please verify your details.');
      } else {
        alert('An error occurred while booking the service. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('The service is already booked for this time slot.');
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const userDetails = {
      UserName,
      Email,
      Phone,
      Date,
      Time,
      VehicleBrand,
      Address,
    };
    bookingSubmit(userDetails);
  };

  if (!serviceDetails) {
    return <div>Loading service details...</div>;
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="bg-white p-6 rounded-md shadow-md w-[660px] bg-lime-200">
        <h1 className="text-3xl font-bold text-center mb-4">
          Service for <span className='text-green-600'>{serviceDetails.ServiceName}</span>
        </h1>
        <p className="text-2xl font-semibold text-center">
          Amount: <span className='text-red-500'>{serviceDetails.Amount}</span>
        </p>
        
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label htmlFor="UserName" className="block text-lg font-semibold">Name:</label>
            <input
              type="text"
              id="UserName"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Email" className="block text-lg font-semibold">Email:</label>
            <input
              type="email"
              id="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Phone" className="block text-lg font-semibold">Phone Number:</label>
            <input
              type="tel"
              id="Phone"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Date" className="block text-lg font-semibold">Date:</label>
            <input
              type="date"
              id="Date"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Time" className="block text-lg font-semibold">Time:</label>
            <input
              type="time"
              id="Time"
              value={Time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="VehicleBrand" className="block text-lg font-semibold">Vehicle Brand:</label>
            <input
              type="text"
              id="VehicleBrand"
              value={VehicleBrand}
              onChange={(e) => setVehicleBrand(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Address" className="block text-lg font-semibold">Address:</label>
            <input
              type="text"
              id="Address"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mt-6 grid place-items-center">
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
              Book Service & Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingService;
