import React, { useContext, useEffect } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Logout = () => {
  let obj=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
obj.updstate({"token":"","name":"","uid":"","role":""})
Cookies.remove("login")
navigate("/")

  },[])
  return (
    <div>Logout</div>
  )
}

export default Logout
