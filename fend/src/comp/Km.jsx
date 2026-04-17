import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Km = () => {
    let [post,setPost]=useState({})
    let {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:5000/postbyid/${id}`).then((res)=>{
setPost(res.data)
        })

    },[])
  return (
    <div>
        {post._id!=undefined&&<div className='post'>
              <h1>{post.title}</h1>
              <p>{post.desc}</p>
              <div className='postfooter'>
                <div className='like'>
                  <i class="fa-solid fa-thumbs-up"></i>
                  <i class="fa-solid fa-thumbs-down"></i>

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