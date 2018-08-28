import React from 'react'
import axios from 'axios'
import Window from './Window'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            backgroundColor: ''
        }
        console.log(this.state)
    }

    randomColor = (response) => {
        let randomNum = Math.floor(Math.random() * 4)
        if(randomNum === 0){
            this.setState({
                backgroundColor: response.data.matching_colors[1]
            })
        } else if(randomNum === 1){
            this.setState({
                backgroundColor: response.data.matching_colors[2]
            })
        } else if(randomNum === 2){
            this.setState({
                backgroundColor: response.data.matching_colors[3]
            })
        } else if(randomNum === 3){
            this.setState({
                backgroundColor: response.data.matching_colors[4]
            })
        }
    }

    componentDidMount(){
        axios.get('http://www.colr.org/json/colors/random/7').then(response => {
            console.log(response.data.matching_colors)
            let randomNum = Math.floor(Math.random() * 4)
            if(randomNum === 0){
                this.setState({
                    backgroundColor: response.data.matching_colors[1]
                })
            } else if(randomNum === 1){
                this.setState({
                    backgroundColor: response.data.matching_colors[2]
                })
            } else if(randomNum === 2){
                this.setState({
                    backgroundColor: response.data.matching_colors[3]
                })
            } else if(randomNum === 3){
                this.setState({
                    backgroundColor: response.data.matching_colors[4]
                })
            }
            
        })
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    render(){
        const windowStyle = {
            backgroundColor: this.state.backgroundColor
        }

        return(
            <form style={windowStyle}>
                <h2><Window backgroundColor={this.state.backgroundColor}/></h2>
                <button onClick={this.handleClick}>Change Color</button>
            </form>
        )
    }

}

export default App