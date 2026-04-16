import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const Catpost = () => {
  let [data,setData]=useState([])
  let {cat}=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:5000/postbycat/${cat}`).then((res)=>{
      setData(res.data)
    })

  },[cat])

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
                  <i class="fa-solid fa-thumbs-up"></i>
                  <i class="fa-solid fa-thumbs-down"></i>

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

export default Catpost