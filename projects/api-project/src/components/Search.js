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
    

    // componentDidMount = () => {
    //     axios.get(`http://www.omdbapi.com/?apikey=${apiKey.key}&s=star_wars`).then(response => {
    //         this.setState({
    //             list: response.data.Search
    //         })
    //     })
    // }

    //  handleClick = () => {
    //     this.setState({
    //         nowPlaying: this.props.currentMovies
    //     })
    // }

    render(){

        const textBox = {
            marginTop: '20px'
        }

        return (
            <div>
                <div className='instructions'>Type in a movie or TV Show name below to show it and all relevant movies and/or TV Shows</div>
                <input type='text' name='title' value={this.state.title} placeholder='e.g. Star Wars' onChange={this.handleChange} style={textBox}/>
                <div>{this.state.moviesKey}</div>
                {this.state.title !== '' ? <button onClick={this.handleMovieSelect}>Get Data</button>: '*Button will show upon inputting text'}
                <div className='searchResults'>{this.state.list.map(info => <SearchResults {...info} />)}</div>
            </div>
        )
    }
}

export default connect(state=>state, { getData })(Search)