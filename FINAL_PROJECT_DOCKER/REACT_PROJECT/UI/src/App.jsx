import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Home from './pages/Home'; // Import Home component (make sure this file exists)
import Services from './pages/Services';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import AddService from './pages/AddService';
import ViewService from './pages/ViewService';
import UpdateService from './pages/UpdateService';
import Viewmessage from './pages/Viewmessage';
import ViewBooking from './pages/ViewBooking';
import BookingService from './pages/BookingService';
import Payment from './pages/Payment';
import ViewAccount from './pages/ViewAccount';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<FrontPage />} /> */}
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/Services" element={<Services />} /> 
          <Route path="/Booking" element={<Booking />} /> 
          <Route path="/About" element={<About />} /> 
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/AddService" element={<AddService />} />
          <Route path="/ViewService" element={<ViewService />} />
          <Route path="/UpdateService/:ServiceName" element={<UpdateService />} />
          <Route path="/Viewmessage" element={<Viewmessage />} />
          <Route path="/ViewBooking" element={<ViewBooking />} />
          <Route path="/BookingService/:ServiceName/:Amount/:Description" element={<BookingService />} />
          <Route path="/Payment/:ServiceName/:Amount/:UserName/:Email/:Phone/:Date/:Time/:VehicleBrand/:Address" element={<Payment />} />
          {/* <Route path="/Payment" element={<Payment />} /> */}
          {/* <Route path="/ViewAccount" element={< ViewAccount />} /> */}
          <Route path="/ViewAccount/:ServiceName/:Amount/:UserName/:Email/:Phone/:Date/:Time/:VehicleBrand/:Address" element={<ViewAccount />} />
        </Routes>
      </Router>

    </>
  )
}

export default App;
