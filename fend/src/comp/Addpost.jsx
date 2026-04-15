import React, { useContext, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import Cookies from 'js-cookie'

const Addpost = () => {
  let [data,setData]=useState({"title":"","desc":"","cat":""})
  let [msg,setMsg]=useState("")
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let obj=useContext(Ct)
  let add=()=>{
    let x=Cookies.get("login")
    x=JSON.parse(x)
    axios.post("http://localhost:5000/addpost",{...data,"uid":x.uid,"name":x.name}).then((res)=>{
setMsg(res.data.msg)
setData({"title":"","desc":"","cat":""})
    })

  }
  return (
    <div className='formcon'>
      <div className='form'>
        <h2 style={{"color":"red"}}>{msg}</h2>
        <input type='text' placeholder='Enter title' name="title" value={data.title} onChange={fun}/>
        <textarea rows={5} cols={20} placeholder='Enter desc' onChange={fun} value={data.desc} name="desc"></textarea>
        <select value={data.cat} onChange={fun} name='cat'>
          <option value="">---select---</option>
          <option value="news">news</option>
           <option value="sports">sports</option>
            <option value="edu">Education</option>
             <option value="movies">Movies</option>
              <option value="other">other</option>

        </select>
        <button onClick={add}>AddPost</button>

      </div>
    </div>
  )
}

export default Addpost