import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import PrivateRoutes from './components/PrivateRoutes'
import Profile from './pages/Profile'
import About from './pages/About'


const App = () => {
  return (
    <BrowserRouter>
    < Header/>
    <Routes>
    <Route path='/' element= {<Home />} />
    <Route path='/about' element= {<About  />} />
    <Route path='/sign-in' element={<Signin />} />
    <Route path='/sign-up' element={<Signup />} />
    <Route element={<PrivateRoutes />} >
    <Route path='/profile' element={<Profile />} />
  
    </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App