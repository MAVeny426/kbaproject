import React from 'react'
import Card from './Cards';
import Demo from './demo';

const App = () => {
  return(
     <>
    <Card customClasses="bg-red-400"/>
    <Card customClasses="bg-pink-400"/>
    <Card customClasses="bg-yellow-400"/>
    <demo/>
    </>
  )
}

export default App