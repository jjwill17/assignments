import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    // const navStyle = {
    //     display: 'flex',
    //     backgroundColor: '#400706',
    //     position: 'fixed'
    // }

    // const siteName = {
    //     display: 'flex',
    //     justifyContent: 'flex-start',
    //     paddingLeft: '15px',
    //     paddingRight: '20px',
    //     fontSize: '50px',
    //     color: 'red',
    //     fontWeight: 'bolder'
    // }

    //<a className='siteName'>EncryptMe</a>
    return (
        <div className='navStyle'>
            <Link to='/about' className='siteName'>EncryptMe</Link>
            <Link to='/' className='navbar-item'>Encrypt</Link>
            <Link to='/decrypt' className='navbar-item'>Decrypt</Link>
            <Link to='/search' className='navbar-item'>Search</Link>
        </div>
    )
}

export default Navbar