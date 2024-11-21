import React from 'react'
import Hero from '../components/Hero'
import TopCourses from '../components/TopCourses'
import CourseGrid from '../components/CourseGrid'
import coursesData from '../data/courses.json'
import ViewallCourses from '../components/ViewallCourses'
import MainLayout from '../layouts/MainLayout'

const Home = () => {
  return (

         <>
         <Hero/>
         <TopCourses/>
         <ViewallCourses/>
         <CourseGrid isHome={false}/>
         </>

  )
}

export default Home