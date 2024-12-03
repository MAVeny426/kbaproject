import React from 'react';
import wallpaper from '../assets/images/wallpaper.jpg'

const Bodypart = () => {
  return (
   <>
      <div className="flex flex-col items-center justify-center h-screen text-black bg-cover bg-center" style={{ backgroundImage: `url(${wallpaper})` }}>
        <p className="text-8xl font-extrabold font-serif mt-10">Indias</p>
        <p className="text-8xl font-extrabold font-serif mt-5">Best</p>
        <p className="text-8xl font-extrabold font-serif mt-5">Two Wheeler Service</p>

      </div>
   
    </>
  );
}

export default Bodypart;
