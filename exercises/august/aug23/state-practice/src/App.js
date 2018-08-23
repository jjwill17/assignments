import React, {Component} from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            counter: 900
        }
    }

    addNum = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 5
            }
        })
    }

    subtractNum = () => {
        this.setState(prevState => {
            if(prevState.counter >= 500){
                return {
                    counter: prevState.counter - 50
                }
            } else if (prevState.counter < 500 && prevState.counter > 0){
                return {
                    counter: prevState.counter - 20
                }
            } else {
                alert('Went below zero')
            }
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.addNum}>Add</button>
                <button onClick={this.subtractNum}>Subtract</button>
            </div>
        )
    }
}

export default App
