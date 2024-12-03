import React from 'react';
import Navbar from '../components/Navbar';
import Bodypart from '../components/Bodypart';
import Terms from '../components/Terms'
import LogoPage from '../components/LogoPage';
import FooterPage from '../components/FooterPage';

const Home = () => {
  return (
    
      <>
        <Navbar />
        <Bodypart />
        <Terms />
        <LogoPage />
        <FooterPage />
      </>  
  );
};

export default Home;
