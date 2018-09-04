import React, { Component } from 'react'
import Display from './components/Display'
import Form from './components/Form'


class App extends Component {
    constructor(){
        super()
        this.state = {
            fName: '',
            lName: '',
            contacts: []
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit = e => {   
        e.preventDefault()
        const newContact = {
            fName: this.state.fName,
            lName: this.state.lName
        }
        this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
            fName: '',
            lName: ''
        }))
    }

    render(){
        return (
            <div>
                <Form 
                    lName={this.state.lName} 
                    fName={this.state.fName} 
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange}/>
                <Display 
                    contacts={this.state.contacts}/>
            </div>
        )
    }
}

export default App