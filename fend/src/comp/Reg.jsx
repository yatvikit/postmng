import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Reg = () => {
  let [data,setData]=useState({"_id":"","name":"","phno":"","pwd":""})
  let [msg,setMsg]=useState("")
  let navigate=useNavigate()
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let register=()=>{
    axios.post("https://postmng.onrender.com/reg",data).then((res)=>{
      setMsg(res.data.msg)
      if(res.data.msg=="reg done")
      {
navigate("/login")
      }
    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
        <h2 style={{"color":"red"}}>{msg}</h2>
        <input type='text' placeholder='Enter email' name="_id" value={data._id} onChange={fun}/>
        <input type='password' placeholder='Enter password' name="pwd" value={data.pwd} onChange={fun}/>
        <input type='text' placeholder='Enter Name' name="name" value={data.name} onChange={fun}/>
        <input type='text' placeholder='Enter Phno' name="phno" value={data.phno} onChange={fun}/>
        <button onClick={register}>Register</button>

      </div>

    </div>
  )
}

export default Reg