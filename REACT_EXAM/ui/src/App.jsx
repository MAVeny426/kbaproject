import React from 'react'
import{createBrowserRouter,createRoutesFromElements,RouterProvider,Route}from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import Signup from './pages/Signup';
import Home from './pages/Home';
import Addbooking from './pages/Addbooking';
import Viewbooking from './pages/Viewbooking';
import Viewdate from './pages/Viewdate';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <>
       <Route>
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/signup" element={< Signup/>} /> 
          <Route path="/home" element={< Home/>} /> 
          <Route path="/addbooking" element={< Addbooking/>} /> 
          <Route path="/viewbooking" element={<Viewbooking/>} /> 
          <Route path="/viewdate" element={<Viewdate/>} /> 
      </Route>
    </>
  )
)
return (
  <RouterProvider router={router} />
)
}

export default App