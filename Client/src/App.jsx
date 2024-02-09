import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Signin from './pages/Signin'
import Signup from './pages/Signup'


const App = () => {
  return (
    <BrowserRouter>
    < Header/>
    <Routes>
    <Route path='/' element= {<Home />} />
    <Route path='/sign-in' element={<Signin />} />
    <Route path='/sign-up' element={<Signup />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App