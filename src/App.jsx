
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SingIn from './Pages/SingIn'
import SingUp from './Pages/SingUp'
import About from './Pages/About'
import Home from './Pages/Home'
import Profile from './Pages/Profile'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sing-in' element={<SingIn/>}/>
    <Route path='/sing-up' element={<SingUp/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
