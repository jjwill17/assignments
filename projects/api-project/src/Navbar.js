import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/nowPlaying">Now Playing</Link>
        </div>
    )
}

export default Navbar