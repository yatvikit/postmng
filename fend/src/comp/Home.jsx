import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <div className='smenu'>
            <Link to="/">Allposts</Link>
            <Link to="/post/news">News</Link>
            <Link to="/post/edu">Education</Link>
            <Link to="/post/movies">Movies</Link>
            <Link to="/post/sports">Sports</Link>
            <Link to="/post/other">Other</Link>
            <Link to="/postbyme">PostByMe</Link>


        </div>
        <div className='main'>
          
            <Outlet/>
           

        </div>

    </div>
  )
}

export default Home