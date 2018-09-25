import axios from 'axios';
import React from 'react';
import '../../styles/app.css';
import MainDisplay from './MainDisplay';
import encryptIt from '../../encrypt'

class Encrypt extends React.Component {
    constructor(){
        super()
        this.state = {
            phrase: '',
            phraseList: [],
            date: '',
            stuff: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    handleEncrypt = () => {
        this.setState(prevState => {
            const secure = encryptIt(prevState.phrase);
            return {
                phraseList: [...prevState.phraseList, secure]
            }
        })
    }

    // DATE CONSTRUCTION
    createDate = () => {
        let date = new Date()
        let month = date.getMonth()
        let day = date.getDate()
        let year = date.getFullYear()
        const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        return `${monthName[month]} ${day} ${year}`
    }
    
    handlePost = () => {
        const lastIndex = this.state.phraseList.slice(-1)[0]
        const newEncrypted = {
            text: lastIndex,
            date: this.createDate()
        }
        axios.post('/encrypted', newEncrypted).then(response => {
            alert("Text successfully posted!")
        })
    }

    render(){
        const textStyle = {
            marginTop: '100px',
            fontSize: '2em',
            color: 'white',
            fontWeight: 'lighter'
        }
        return(
            <div className='page-content'>
                <h2 style={textStyle}>Your encrypted text will show upon submission below:</h2>
                <input className='input' type='text' name='phrase' value={this.state.phrase} onChange={this.handleChange} />
                <button onClick={this.handleEncrypt} className='button'>Encrypt</button>
                <MainDisplay phraseList={this.state.phraseList} key={this.state.phraseList} handlePost={this.handlePost}/>
            </div>
        )
    }
}

export default Encrypt