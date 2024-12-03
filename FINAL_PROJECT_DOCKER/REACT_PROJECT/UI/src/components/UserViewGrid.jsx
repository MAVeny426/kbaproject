import React, { useState, useEffect } from 'react';
import UserViewCard from './UserViewCard';

const UserViewGrid = ({ isHome }) => {
    const [services, setServices] = useState([]);
    const ServiceList = Array.isArray(services) ? (isHome ? services.slice(0, 3) : services) : [];

    useEffect(() => {
        const fetchService = async () => {
            try {
                const res = await fetch('/api/viewservice');
                
                if (!res.ok) {
                    alert("Error:Fetchings details")
                }

                const data = await res.json(); // Parse the JSON data
                setServices(data); // Store the services in state
            } catch (error) {
                console.log('Error fetching AddService Details', error);
            } 
        };

        fetchService();
    }, []);

    return (
        <>
            <h1 className='flex flex-col items-center font-bold text-2xl md:text-4xl text-purple-800 pt-10'>
                {isHome ? 'Services Details' : 'Lists'}
            </h1>


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
                {ServiceList.map((service) => (
                    <UserViewCard key={service.id } service={service} /> 
                ))}
            </div>
        </>
    );
};

export default UserViewGrid;
