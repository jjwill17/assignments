import React, {Component} from 'react'
import List from './List'


class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            listNames: []
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        // listNames.push(this.state.firstName)
        console.log(this.state.listNames)
        this.setState(prevState => {
            return {
                listNames: [...prevState.listNames, prevState.firstName]
            }
        })
        // console.log(this.state)
    }

    displayList = listNames.map(name => {
        return <List name={this.state.firstName} />
    })

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Enter your name below: </h2>
                <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
                <button>Submit</button>
                <h1>{this.state.firstName}</h1>
                <ul>{this.displayList}</ul>
            </form>
        )
    }
}

export default App