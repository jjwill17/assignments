import React from 'react'
import decryptIt from '../../decrypt'
import '../../styles/app.css'

class Decrypt extends React.Component {
    constructor(){
        super()
        this.state = {
            encryptedMsg: '',
            translate: []
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDecrypt = e => {
        e.preventDefault()
        this.setState(prevState => {
            const reveal = decryptIt(prevState.encryptedMsg)
            return {
                translate: [...prevState.translate, reveal]
            }
        })
    }

    // NOT WORKING .replace(/3/g, '1').replace(/4/g, '2').replace(/5/g, '3').replace(/6/g, '4').replace(/7/g, '5').replace(/8/g, '6').replace(/9/g, '7').replace(/0/g, '8').replace(/1/g, '9').replace(/2/g, '0')

    render(){
        const textStyle = {
            marginTop: '100px',
            fontSize: '2em',
            color: 'white',
            fontWeight: 'lighter'
        }

        const decryptedStyle = {
            color: 'white'
        }
        return (
            <form className='page-content'>
                <h2 style={textStyle}>Decrypted text will show upon submission below:</h2>
                <input className='input' type='text' name='encryptedMsg' value={this.state.encryptedMsg} onChange={this.handleChange} placeholder='Paste here...' />
                <button onClick={this.handleDecrypt} className='button'>Decrypt</button>
                <div>{this.state.translate.map(item => <div key={item}><h1 style={decryptedStyle}>{item}</h1></div>)}</div>
            </form>
        )
    }
}

export default Decrypt
