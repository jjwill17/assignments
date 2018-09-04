import React, { Component } from 'react'
import Display from './components/Display'
import Form from './components/Form'
import { connect } from 'react-redux'
import { addContact } from './redux'



class App extends Component {
    constructor(){
        super()
        this.state = {
            fName: '',
            lName: ''
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

        this.props.addContact( newContact )

        this.setState(prevState => ({
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
                <Display />
            </div>
        )
    }
}

export default connect(null, { addContact })(App)