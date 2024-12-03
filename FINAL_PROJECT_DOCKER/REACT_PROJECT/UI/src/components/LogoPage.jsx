import React from 'react';
import aprillalogo from '../assets/images/aprillalogo.png';
import herologo from '../assets/images/herologo.png';
import kawasakilogo from '../assets/images/kawasakilogo.jpeg';
import ktmlogo from '../assets/images/ktmlogo.jpeg';
import royallogo from '../assets/images/royallogo.jpeg';
import yamahalogo from '../assets/images/yamahalogo.jpeg';

const LogoPage = () => {
  return (
    <div className="h-[600px] bg-green-50 ">
      {/* Main Title Section */}
      <div className="text-center mb-16">
        <p className="text-6xl text-green-900 font-serif font-semibold">Brands</p>
      </div>

      {/* Logo Display Section */}
      <div className="grid grid-cols-3 gap-16 justify-center mx-auto max-w-6xl">
        <img
          src={aprillalogo}
          alt="Aprilia Logo"
          className="w-[120px] h-[120px] transform hover:scale-110 transition duration-300 ease-in-out"
        />
        <img
          src={herologo}
          alt="Hero Logo"
          className="w-[120px] h-[120px] transform hover:scale-110 transition duration-300 ease-in-out"
        />
        <img
          src={kawasakilogo}
          alt="Kawasaki Logo"
          className="w-[120px] h-[120px] transform hover:scale-110 transition duration-300 ease-in-out"
        />
        <img
          src={ktmlogo}
          alt="KTM Logo"
          className="w-[120px] h-[120px] transform hover:scale-110 transition duration-300 ease-in-out"
        />
        <img
          src={royallogo}
          alt="Royal Enfield Logo"
          className="w-[120px] h-[120px] transform hover:scale-110 transition duration-300 ease-in-out"
        />
        <img
          src={yamahalogo}
          alt="Yamaha Logo"
          className="w-[120px] h-[120px] transform hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default LogoPage;
