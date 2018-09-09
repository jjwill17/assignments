import React from 'react'
import { getData } from '../redux'
import { connect } from 'react-redux'
import ShowCurrent from './ShowCurrent'
import '../app.css'

class NowPlaying extends React.Component {
    constructor(){
        super()
        this.state = {
            nowPlaying: []
        }
    }

    componentDidMount = () => {
        this.props.getData()
    }

     handleClick = () => {
        this.setState({
            nowPlaying: this.props.currentMovies
        })
    }

    render(){
        const buttonStyle = {
            marginTop: '40px'
        }
        return (
            <div>
                <button onClick={this.handleClick} style={buttonStyle}>Now Playing</button>
                <div>Number of Movies Currently Playing: {this.state.nowPlaying.length}</div>
                <div className='upcoming'>{this.state.nowPlaying.map(currentMovie => <ShowCurrent {...currentMovie}/>)}</div>
            </div>
        )
    }
}

export default connect(state=>state, { getData })(NowPlaying)