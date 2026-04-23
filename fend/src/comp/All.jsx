import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'

const All = () => {
  let [data,setData]=useState([])
  let obj=useContext(Ct)
  let [f,setF]=useState(true)
  useEffect(()=>{
    axios.get("https://postmng.onrender.com/all").then((res)=>{
      setData(res.data)
    })

  },[f])
  let like=(pid)=>{
    if(obj.state.uid=="")
    {
      alert("login to like")
    }
    else
    {
      axios.put("https://postmng.onrender.com/like",{"_id":pid,"uid":obj.state.uid}).then(()=>{
        setF(!f)

      })
    }
  }

   let dislike=(pid)=>{
    if(obj.state.uid=="")
    {
      alert("login to dislike")
    }
    else
    {
      axios.put("https://postmng.onrender.com/dislike",{"_id":pid,"uid":obj.state.uid}).then(()=>{
        setF(!f)

      })
    }
  }


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
                  <i class="fa-solid fa-thumbs-up" onClick={()=>like(post._id)}></i>{post.likes.length}
                  <i class="fa-solid fa-thumbs-down" onClick={()=>dislike(post._id)}></i>{post.dislikes.length}

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

export default All