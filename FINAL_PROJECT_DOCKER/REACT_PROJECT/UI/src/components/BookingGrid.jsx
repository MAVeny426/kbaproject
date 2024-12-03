import React, { useState, useEffect } from 'react';
import BookingCard from './BookingCard';

const BookingGrid = () => {
    const [bookings, setBookings] = useState([]);

    const BookkingList = isHome ? bookings.slice(0, 3) : bookings;

    useEffect(() => {
        const fetchBookings= async () => {
            try {
                const res = await fetch('/api/viewbooking');

                
                // Check if the response is ok (status 200-299)
                if (res.ok) {
                    // throw new Error(`HTTP error! status: ${res.status}`);
                    const data = await res.json(); // Parse the JSON data
                    setBookings(data); // Store the services in state
                }

               
            } catch (error) {
                console.log('Error fetching AddService Details', error);
                setError(error.message); // Set the error message in state
            }
        };

        fetchBookings();
    }, []);

    return (
        <>
            <h1 className='flex flex-col items-center font-bold text-2xl md:text-4xl text-purple-800 pt-10'>
                {isHome ? 'Booking Details' : 'Lists'}
            </h1>

            {/* Show an error message if there's an error */}
            {error && (
                <div className="text-red-500 text-center mt-4">
                    <p>{error}</p>
                </div>
            )}

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
                {Bookings.map((Booking) => (
                    <BookingCard key={Booking.UserName} Booking={Booking} />
                ))}
            </div>
        </>
    );
};

export default BookingGrid;