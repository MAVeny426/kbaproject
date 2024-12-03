import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const UpdateService = () => {
  const { ServiceName } = useParams();
  const navigate = useNavigate();
  
  // Initial state to hold the service data
  const [service, SetServices] = useState({
    ServiceName: '',
    Amount: '',
    Description: '',
  });
  
  const [error, setError] = useState(null); // Add error state to track errors

  useEffect(() => {
    const fetchServiceName = async () => {
      try {
        const res = await fetch(`/api/viewservice/${ServiceName}`);
        if (!res.ok) {
          throw new Error('Service Name not found');
        }
        
        const data = await res.json();
        console.log('Fetched data:', data);

        // Assuming `data` contains the service object with the required details
        if (data) {
          SetServices({
            ServiceName: data.ServiceName || '',
            Amount: data.Amount || '',
            Description: data.Description || '',
          });
        }
      } catch (error) {
        console.error('Error fetching service:', error);
        setError('Failed to fetch service');
      }
    };

    fetchServiceName();
  }, [ServiceName]); // Depend on ServiceName to refetch when it changes

  // Handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetServices((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  // Handle form submission
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/UpdateService/${ServiceName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(service), // Sending the whole service object to update
      });

      if (res.ok) {
        alert('Service updated successfully');
        navigate('/Viewservice');
      } else {
        const errorData = await res.json();
        alert('Failed to update service: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error updating service:', error);
      alert('Error updating service');
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-white mb-20">
        <div className="container m-auto max-w-2xl py-2">
          <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
                Update Service
              </h2>

              {/* Handle error display */}
              {error && <div className="text-red-500 text-center mb-4">{error}</div>}

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Service Name
                </label>
                <input
                  type="text"
                  name="ServiceName"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={service.ServiceName || ''} // Default to empty string if not set
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Amount
                </label>
                <input
                  name="Amount"
                  className="border rounded w-full py-2 px-3"
                  value={service.Amount || ''} // Default to empty string if not set
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Description
                </label>
                <textarea
                  name="Description"
                  className="border rounded w-full py-2 px-3"
                  value={service.Description || ''} // Default to empty string if not set
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                className="bg-purple-500 hover:bg-purple-600 my-10 text-white font-bold py-2 px-4 rounded-full w-full"
                type="submit"
              >
                Update Service
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateService;
