import React, { useState, useEffect } from 'react';
import PaymentCard from './PaymentCard';

const PaymentGrid = ({ isHome }) => {
    const [Payments, setPayments] = useState([]);
    const PaymentList = Array.isArray(Payments) ? (isHome ? Payments.slice(0, 3) : Payments) : [];

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const res = await fetch('/api/viewpayment');
                
                if (!res.ok) {
                    alert("Error:Fetchings details")
                }

                const data = await res.json(); // Parse the JSON data
                setPayments(data); // Store the services in state
            } catch (error) {
                console.log('Error fetching Bookings Details', error);
            } 
        };

        fetchPayments();
    }, []);

    return (
        <>
            <h1 className='flex flex-col items-center font-bold text-2xl md:text-4xl text-purple-800 pt-10'>
                {isHome ? 'Payments Details' : 'Lists'}
            </h1>


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
                {Payments.map((payment) => (
                    <PaymentCard key={payment.Cardno } payment={payment} /> 
                ))}
            </div>
        </>
    );
};

export default PaymentGrid;