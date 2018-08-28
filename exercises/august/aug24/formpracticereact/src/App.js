import React, { Component } from 'react';


class Form extends Component {
    constructor (){
        super() 

        this.state = {
            myName: '',
            age: '',
            country: '',
            gender: ''
        }
    }

    handleChange = event => {
        console.log(event.target)
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name='myName' placeholder='Full Name' value={this.state.myName} onChange={this.handleChange}  />
                <input type="text" name='age' placeholder='Age' value={this.state.age} onChange={this.handleChange} />
                <input type="text" name='country' placeholder='Country' value={this.state.country} onChange={this.handleChange} />
                <input type="text" name='gender' placeholder='Gender' value={this.state.gender} onChange={this.handleChange} />
                <button>Submit</button>
                <h2>{this.state.myName}</h2>
            </form>
        );
    }
}

export default Form;