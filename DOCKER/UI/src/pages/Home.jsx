import React from 'react'
import Hero from '../components/Hero'
import TopCourses from '../components/TopCourses'
import CourseGrid from '../components/CourseGrid'
import ViewallCourses from '../components/ViewallCourses'

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