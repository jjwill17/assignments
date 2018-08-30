import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navStyles = {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'cornflowerblue',
        borderRadius: "0 25px 0 25px",
        padding: "20px 20px 20px 20px",
    }
    return (
        <div style={navStyles}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
        </div>
    )
}

export default Navbar