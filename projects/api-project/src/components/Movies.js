import React from 'react'
import { getData } from '../redux'
import { connect } from 'react-redux'
import Display from './Display'
import axios from 'axios'
import apiKey from '../apiKey'

class Movies extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            moviesKey: this.props.reduxKey,
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

     // handleClick = () => {
    //     this.setState({
    //         list: this.props.movieData
    //     })
    // }

    // componentDidMount(){
    //     this.props.getData()
    // }

    render(){
        console.log(this.state)
        return (
            <div>
                <input type='text' name='title' value={this.state.title} placeholder='Title of the movie...' onChange={this.handleChange}/>
                <div>{this.state.moviesKey}</div>
                <button onClick={this.handleMovieSelect}>Get Data</button>
                <div>{this.state.list.map(info => <Display {...info} />)}</div>
            </div>
        )
    }
}

export default connect(state=>state, { getData })(Movies)