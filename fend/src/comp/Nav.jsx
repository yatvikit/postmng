import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const Nav = () => {
  let obj=useContext(Ct)
  return (
    <div className='nav'>
        <Link to="/">Posts</Link>
       {obj.state.token==""?<> 
       <Link to="/login">Login</Link>
        <Link to="/reg">Register</Link>
       </>:<>
       <Link to="/addpost">Addpost</Link>
       {obj.state.role=="admin"&& <Link to="/admin">AdminDashboard</Link>}
        <Link to="/logout">Logout</Link>
       </>} 

       
       
    </div>
  )
}

export default Nav