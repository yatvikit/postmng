import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './comp/Nav'
import Home from './comp/Home'
import Login from './comp/Login'
import Reg from './comp/Reg'
import Logout from './comp/Logout'
import Addpost from './comp/Addpost'
import Admin from './comp/Admin'
import './App.css'
import All from './comp/All'
import Catpost from './comp/Catpost'
import Postbyme from './comp/Postbyme'
const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path="/" element={<All/>}/>
      <Route path="/post/:cat" element={<Catpost/>}/>
      <Route path='/postbyme' element={<Postbyme/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path="/reg" element={<Reg/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/addpost" element={<Addpost/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App