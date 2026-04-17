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
import { useEffect, useState } from 'react'
import Ct from './comp/Ct'
import Cookies from "js-cookie"
import Km from './comp/Km'
const App = () => {
  let [state,setState]=useState({"token":"","name":"","uid":"","role":""})
  let updstate=(obj)=>{
    setState({...state,...obj})

  }
  useEffect(()=>{
    let x=Cookies.get("login")
    if(x!=undefined)
    {
      updstate(JSON.parse(x))
    }

  },[])
  let obj={"state":state,"updstate":updstate}
  return (
    <BrowserRouter>
    <Ct.Provider value={obj}>
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
      <Route path='/km/:id' element={<Km/>}/>
    </Routes>
    </Ct.Provider>
    </BrowserRouter>
  )
}

export default App