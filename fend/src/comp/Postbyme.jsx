import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cookies from "js-cookie"
import { Link } from 'react-router-dom'
const Postbyme = () => {
  let [data,setData]=useState([])
  useEffect(()=>{
    let x=Cookies.get("login")
    if(x!=undefined)
    {
      x=JSON.parse(x)
    axios.get(`https://postmng.onrender.com/getpostsbyuser/${x.uid}`).then((res)=>{
setData(res.data)
    })
    }

  },[])
  return (
      <>
      {data.length==0&&<h2>No Posts</h2>}
      {data.length>0&&<div className='con'>
        {
          data.map((post)=>{
            return(<div className='post'>
              <h1>{post.title}</h1>
              <p>{post.desc}</p>
              <div className='postfooter'>
                <div className='like'>
              <p>status:{post.status}</p>
              {post.msg!=""&&post.msg!=undefined&&<p>Msg:{post.msg}</p>}
              <button><Link to={`/editpost/${post._id}`}>Edit</Link></button>
              <button>Delete</button>

                </div>
                <div className='author'>
                  <p>{post.name}</p>
                  <p>{new Date(post.date).toLocaleDateString()}</p>
                  </div>
              </div>
              </div>)
          })
        }
        </div>}
    </>
  )
}

export default Postbyme