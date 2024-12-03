import React from 'react'
import{createBrowserRouter,createRoutesFromElements,RouterProvider,Route}from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import EditCourse from './pages/EditCourse'
import CoursePage, {courseLoader} from './pages/CoursePage'
import NotFound from './pages/NotFound';
import AddCourse from './pages/AddCourse';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      {/*Public Routes*/}
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      {/*Protected Routes*/}
      <Route element ={<AuthLayout />} >
      
      <Route element={<MainLayout />} >
      <Route path="/home" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/add-course" element={<AddCourse />} />
      <Route path="/edit-course/:id" element={<EditCourse />} loader={courseLoader} />
      <Route path="/course/:id" element={<CoursePage />} loader={courseLoader} />
      </Route>
      </Route>
      {/*Not-Found*/}
      <Route path="*" element={<NotFound />} />
      </>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App