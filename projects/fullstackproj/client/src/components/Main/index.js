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

//    NOT WORKING .replace(/'1'/g, '3').replace(/2/g, '4').replace(/3/g, '5').replace(/4/g, '6').replace(/5/g, '7').replace(/6/g, '8').replace(/7/g, '9').replace(/8/g, '0').replace(/9/g, '1').replace(/0/g, '2')

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