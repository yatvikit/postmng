import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <Link to="/">Posts</Link>
        <Link to="/login">Login</Link>
        <Link to="/reg">Register</Link>
        <Link to="/addpost">Addpost</Link>
        <Link to="/admin">AdminDashboard</Link>
        <Link to="/logout">Logout</Link>
    </div>
  )
}

export default Nav