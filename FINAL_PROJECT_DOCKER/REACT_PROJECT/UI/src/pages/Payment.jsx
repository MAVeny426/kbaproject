import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';  // Assuming you are using react-toastify for notifications

const Payment = () => {
  const { ServiceName, Amount,UserName,Email,Phone,Date,Time,VehicleBrand,Address } = useParams();
  console.log(ServiceName, Amount,UserName,Email,Phone,Date,Time,VehicleBrand,Address);

  const [Cardno, setCardno] = useState('');
  const [ExpiryDate, setExpiryDate] = useState('');
  const [Cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Card validation function
  const isCardValid = (card) => {
    const regex = /^[0-9]{16}$/; // Simple card number validation (16 digits)
    return regex.test(card);
  };

  // Expiry date validation function (MM/YY format)
  const isExpiryValid = (expiry) => {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return regex.test(expiry);
  };

  // CVV validation (3 digits)
  const isCvvValid = (cvv) => {
    return cvv.length === 3 && /^[0-9]{3}$/.test(cvv);
  };

  const PaymentSubmit = async (e) => {
    e.preventDefault();

    // Proceed with the payment
    const payment = { Cardno, ExpiryDate, Cvv,ServiceName,
      Amount,
      UserName,
      Email,
      Phone,
      Date,
      Time,
      VehicleBrand,
      Address,
   };

    try {
      setLoading(true);
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payment),
        credentials: 'include',
      });

      if (res.ok) {
        const data = await res.json();
        alert("Payment Confirm")
        navigate(`/ViewAccount/${ServiceName}/${Amount}/${UserName}/${Email}/${Phone}/${Date}/${Time}/${Address}/${VehicleBrand}`);
      } else {
        toast.error('Payment failed. Please check your credentials');
      }
    } catch (error) {
      toast.error('An error occurred while processing the payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md mt-10">
      <form onSubmit={PaymentSubmit}>
        <p className="text-2xl font-semibold mb-4 text-center">Payment Details</p>
          <label htmlFor="" className='text-xl font-semibold'>UserName</label>
        <input 
         type="text" 
         className="w-full  border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xm" 
         value={`${UserName}`}
         readOnly /><br></br>
        <label htmlFor="" className='text-xl font-semibold'>Email</label>
         <input 
         type="text" 
         className="w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xm" 
         value={`${Email}`}
         readOnly /><br></br>

        <label htmlFor="" className='text-xl font-semibold'>Phone</label>
         <input 
         type="text" 
         className="w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xm" 
         value={`${Phone}`}
         readOnly /><br></br>

         <label htmlFor="" className='text-xl font-semibold'>Date</label>
         <input 
         type="text" 
         className="w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xm" 
         value={`${Date}`}
         readOnly /><br></br>
        
        <label htmlFor="" className='text-xl font-semibold'>Time</label>
         <input 
         type="text" 
         className="w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xm" 
         value={`${Time}`}
         readOnly /><br></br>

        <label htmlFor="" className='text-xl font-semibold'>VehicleBrand</label>
         <input 
         type="text" 
         className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xm" 
         value={`${VehicleBrand}`}
         readOnly /><br></br>

        <label htmlFor="" className='text-xl font-semibold'>Address</label>
         <input 
         type="text" 
         className="w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xm" 
         value={`${Address}`}
         readOnly /><br></br>
          <label htmlFor="" className='text-xl font-semibold'>Service Name</label>
        <input 
         type="text" 
         className="w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xm" 
         value={`${ServiceName} - `}
         readOnly /><br></br>

       <label htmlFor="" className='text-xl font-semibold'>Amount</label>
        <input 
         type="text" 
         className="w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xm" 
         value={`${Amount}  `}
         readOnly /><br></br>
        <div className="mb-4">
          <label htmlFor="Cardno" className="block text-lg font-semibold mb-2">Card Number</label>
          <input
            type="text"
            id="Cardno"
            name="Cardno"
            value={Cardno}
            onChange={(e) => setCardno(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter card number"
            required
          />
        </div>

        <div className="flex justify-between mb-4">
          <div className="w-[48%]">
            <label htmlFor="ExpiryDate" className="block text-lg font-semibold mb-2">Expiry Date</label>
            <input
              type="text"
              id="ExpiryDate"
              name="ExpiryDate"
              value={ExpiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="MM/YY"
              required
            />
          </div>

          <div className="w-[48%]">
            <label htmlFor="Cvv" className="block text-lg font-semibold mb-2">CVV</label>
            <input
              type="text"
              id="Cvv"
              name="Cvv"
              value={Cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="CVV"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className={`bg-blue-500 text-white px-6 py-3 w-full rounded-lg mt-4 hover:bg-blue-600}`}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Complete Payment'}
        </button>
      </form>
    </div>
  );
};

export default Payment;
