import React from 'react'
import { getData } from '../redux'
import { connect } from 'react-redux'
import ShowCurrent from './ShowCurrent'

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
        return (
            <div>
                <button onClick={this.handleClick}>Now Playing</button>
                <div>Number of Movies Currently Playing: {this.state.nowPlaying.length}{this.state.nowPlaying.map(currentMovie => <ShowCurrent {...currentMovie}/>)}</div>
            </div>
        )
    }
}

export default connect(state=>state, { getData })(NowPlaying)