import React from 'react'
import '../../styles/app.css'

const About = () => {

    const styles = {
        color: 'white',
    }

    return (
        <div className='about-page'>
            <h1 className='about-h1'>About This Site:</h1>
            <p className='p-style'>This site will encrypt, save and decrypt whatever you throw into it. Have fun.</p>
            <p style={styles}>*Bonus points if you know what this is changing into...</p>
        </div>
    )
}

export default About