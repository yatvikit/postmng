import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  let [data,setData]=useState([])
  let [f,setF]=useState(true)
  useEffect(()=>{
    axios.get("https://postmng.onrender.com/posts").then((res)=>{
      setData(res.data)
    })

  },[f])
  let del=(id)=>{
    axios.delete(`https://postmng.onrender.com/delpost/${id}`).then(()=>{
setF(!f)
    })
  }

  return (
    <div>
      {data.length>0&&<table border={1}>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Date</th>
          <th></th>
          <th></th>
        </tr>
        {
          data.map((row)=>{
            return(<tr>
              <td>{row.title}</td>
              <td>{row.status}</td>
              <td>{row.date.substr(0,10)}</td>
              <td>{row.msg!=undefined?row.msg:""}</td>
              <td><button><Link to={`/km/${row._id}`}>KnowMore...</Link></button></td>
              <td><button onClick={()=>del(row._id)}>Delete</button></td>
            </tr>)
          })
        }
        </table>}

    </div>
  )
}

export default Admin