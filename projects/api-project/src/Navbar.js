import React from 'react'
import { Link } from 'react-router-dom'
import './app.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/" className='home'>Home</Link>
            <Link to="/search" className='search'>Search</Link>
            <Link to="/nowPlaying" className='nowPlaying'>Now Playing</Link>
        </div>
    )
}

export default Navbar