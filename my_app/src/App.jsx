import React from 'react'
import Header from './Components/Header'
import BodyLeft from './Components/BodyLeft'
import Bodyright from './Components/Bodyright'
import Home from './Components/Home'
import Videopage from './Components/Videopage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      {/* <Route path='/home' element = {<Navigate to= '/'/>}/> */}
      <Route path='/:videoid' element ={ <Videopage /> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
