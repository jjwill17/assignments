import React from 'react'
import axios from 'axios'
import SearchDisplay from './SearchDisplay'
import '../../styles/app.css'

class Search extends React.Component {
    constructor(){
        super()
        this.state = {
            idNum: '',
            searched: []
        }
    }

    componentDidMount(){
        axios.get('/encrypted').then(response => {
            // console.log(response.data)
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSearch = e => {
        if(this.state.idNum.length > 0){
            axios.get(`/encrypted/${this.state.idNum}`).then(response => {
                this.setState({
                    searched: [response.data]
                })
            })
        } else {
            axios.get(`/encrypted/${this.state.idNum}`).then(response => {
                this.setState({
                    searched: response.data
                })
            })
        }
    }

    handleDelete = id => {
        axios.delete(`/encrypted/${id}`).then(response => {
            this.setState(prevState => ({
                searched: prevState.searched.filter(obj => {
                    if(obj._id !== id){
                        return obj
                    }
                }
            )}))
        })
    }

    render(){
        // console.log(this.state)
        const textStyle = {
            marginTop: '75px',
            fontSize: '2em',
            color: 'white',
            fontWeight: 'lighter'
        }
        return(
            <div className='search-page'>
                <h2 style={textStyle}>Type in the ID number or just press Search to get all saved messages:</h2>
                <input className='input' type='text' name='idNum' value={this.state.idNum} onChange={this.handleChange} />
                <button onClick={this.handleSearch} className='button'>Search</button>
                {/* <div className='mapped'>{this.state.searched.map(eachOne => <SearchDisplay {...eachOne}/>)}</div> */}
                <SearchDisplay searched={this.state.searched} key={this.state.searched._id} handleDelete={this.handleDelete} />
            </div>
        )
    }
}

export default Search