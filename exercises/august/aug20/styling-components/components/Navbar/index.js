import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const styles = {
        navbar: {
            color: 'yellow',
            backgroundColor: 'black'
        },
        contact: {
            fontSize: '45px',
        }
    }
    return (
        <div style={styles.navbar}>
            <span>About</span>
            <span style={styles.contact}>Contact</span>
            <span>Home</span>
        </div>
    )
}

export default Navbar;