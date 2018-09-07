import React from 'react'
import { getData } from '../redux'
import { connect } from 'react-redux'
import Display from './Display'

class Movies extends React.Component {
    constructor(){
        super()
        this.state = {
            title: '',
            list: []
        }
    }

    handleClick = () => {
        this.setState({
            list: this.props.movieData
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount(){
        this.props.getData()
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <input type='text' name='title' value={this.state.title} placeholder='Title of the movie...' onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Get Data</button>
                <div>{this.state.list.map(info => <Display {...info} />)}</div>
            </div>
        )
    }
}

export default connect(state=>state, { getData })(Movies)