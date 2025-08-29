import React from 'react'
import Header from '../Components/Header'
import BodyLeft from '../Components/BodyLeft'
import Bodyright from '../Components/Bodyright'
const Home = () => {
  return (
    <div>
      <Header/>
      <div className='App-body'>
        <BodyLeft/>
        <Bodyright/>

      </div>
    </div>
  )
}

export default Home
