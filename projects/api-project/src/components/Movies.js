import React from 'react'
import { getData } from '../redux'
import { connect } from 'react-redux'
import SearchResults from './SearchResults'
import axios from 'axios'
import apiKey from '../apiKey'
import NowPlaying from './NowPlaying'

class Movies extends React.Component {
    constructor(){
        super()
        this.state = {
            title: '',
            list: [],
            nowPlaying: []
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
        this.props.getData()
    }

     handleClick = () => {
        this.setState({
            nowPlaying: this.props.currentMovies
        })
    }

    render(){
        return (
            <div>
                <input type='text' name='title' value={this.state.title} placeholder='Title of the movie...' onChange={this.handleChange}/>
                <div>{this.state.moviesKey}</div>
                <button onClick={this.handleMovieSelect}>Get Data</button>
                <div>{this.state.list.map(info => <SearchResults {...info} />)}</div>
                <button onClick={this.handleClick}>Now Playing</button>
                <div>Number of Movies Currently Playing: {this.state.nowPlaying.length}{this.state.nowPlaying.map(currentMovie => <NowPlaying {...currentMovie}/>)}</div>
            </div>
        )
    }
}

export default connect(state=>state, { getData })(Movies)