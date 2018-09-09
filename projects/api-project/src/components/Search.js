import React from 'react'
import { getData } from '../redux'
import { connect } from 'react-redux'
import SearchResults from './SearchResults'
import axios from 'axios'
import apiKey from '../apiKey'

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
        const results = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridGap: '40px',
            justifyItems: 'center',
            padding: '1%'
        }
        return (
            <div>
                <input type='text' name='title' value={this.state.title} placeholder='Title of the movie...' onChange={this.handleChange}/>
                <div>{this.state.moviesKey}</div>
                <button onClick={this.handleMovieSelect}>Get Data</button>
                <div style={results}>{this.state.list.map(info => <SearchResults {...info} />)}</div>
            </div>
        )
    }
}

export default connect(state=>state, { getData })(Search)