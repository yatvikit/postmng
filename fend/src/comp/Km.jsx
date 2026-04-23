import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Km = () => {
    let [post,setPost]=useState({})
    let [msg,setMsg]=useState("")
    let {id}=useParams()
    let navigate=useNavigate()
    useEffect(()=>{
        axios.get(`https://postmng.onrender.com/postbyid/${id}`).then((res)=>{
setPost(res.data)
        })

    },[])
    let accept=(pid)=>{
      axios.get(`https://postmng.onrender.com/accept/${pid}`).then(()=>{
navigate("/admin")
      })
    }
    let modify=(pid)=>{
      axios.put(`https://postmng.onrender.com/modify`,{"_id":pid,"msg":msg}).then(()=>{
navigate("/admin")
      })

    }
  return (
    <div>
        {post._id!=undefined&&<div className='post'>
              <h1>{post.title}</h1>
              <p>{post.desc}</p>
              <div className='postfooter'>
                <div className='like'>
                {post.status=="pendding"&&<button onClick={()=>accept(post._id)}>Accept</button>}

                {post.status=="pendding"&&<>
                <input type='text' placeholder='enter msg' onChange={(e)=>setMsg(e.target.value)} value={msg}/>
                <button onClick={()=>modify(post._id)}>Modify</button></>}

                </div>
                <div className='author'>
                  <p>{post.name}</p>
                  <p>{new Date(post.date).toLocaleDateString()}</p>
                  </div>
              </div>
              </div>}
    </div>
  )
}

export default Km