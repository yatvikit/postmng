import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Editpost = () => {
      let [data,setData]=useState({"title":"","desc":"","cat":""})
      let [msg,setMsg]=useState("")
      let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
      }
    let {pid}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:5000/postbyid/${pid}`).then((res)=>{
            setData(res.data)
        })

    },[])
    let edit=()=>{

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
        <button onClick={edit}>updatePost</button>

      </div>
    </div>
  )
}

export default Editpost