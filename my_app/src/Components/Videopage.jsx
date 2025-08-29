import React from 'react'
import Header from './Header'
import Leftvideo from './Leftvideo'
import Rightvideo from './Rightvideo'

const Videopage = () => {
  return (
    <div>
      <Header/>
      <div className="App-body">
        <Leftvideo/>
        <Rightvideo/>
      </div>
    </div>
  )
}

export default Videopage
