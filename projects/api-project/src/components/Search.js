import React from 'react'
import { getData } from '../redux'
import { connect } from 'react-redux'
import SearchResults from './SearchResults'
import axios from 'axios'
import apiKey from '../apiKey'
import '../app.css'

class Search extends React.Component {
    constructor(){
        super()
        this.state = {
            title: '',
            list: []
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleMovieSelect = e => {
        axios.get(`http://www.omdbapi.com/?apikey=${apiKey.key}&s=${this.state.title}`).then(response => {
            this.setState({
                list: response.data.Search
            })
        })
    }
    

    componentDidMount = () => {
        axios.get('http://www.omdbapi.com/?apikey=${apiKey.key}&s=star_wars').then(response => {
            this.setState({
                list: response.data.Search
            })
        })
    }

     handleClick = () => {
        this.setState({
            nowPlaying: this.props.currentMovies
        })
    }

    render(){

        const textBox = {
            marginTop: '40px'
        }

        return (
            <div>
                <input type='text' name='title' value={this.state.title} placeholder='Title of the movie...' onChange={this.handleChange} style={textBox}/>
                <div>{this.state.moviesKey}</div>
                <button onClick={this.handleMovieSelect}>Get Data</button>
                <div className='searchResults'>{this.state.list.map(info => <SearchResults {...info} />)}</div>
            </div>
        )
    }
}

export default connect(state=>state, { getData })(Search)