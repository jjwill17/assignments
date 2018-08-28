import React from 'react'
import Thumb from './Thumb'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            status: true
        }
    }

    handleClick = e => {
        this.setState(prevState => {
            console.log("clicked")
            return {
                status: !prevState.status
            }
        })
    }

    render(){
        return (
            <div>
                <Thumb status={this.state.status} handleClick={this.handleClick} />
            </div>
        )
    }
}

export default App