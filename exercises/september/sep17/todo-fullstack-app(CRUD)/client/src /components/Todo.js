import React, { Component } from 'react'
import Form from './Form'
import axios from 'axios'

/* Must use anonymous function for handleDelete so you can send the ._id as an argument */
/* React.Fragment is used in place of a div when you don't want another div generated 
    but have a need to enclose multiple jsx elements */

class Todo extends Component {
    constructor(){
        super()
        this.state = {
            editToggle: false,
            title: '',
            description: '',
            imgUrl: '',
            completed: false,
            price: ''
        }
    }

    // Used to dynamically render the Todo data and the edit todo form
    toggler = () => {
        this.setState(prevState => ({
            editToggle: !prevState.editToggle
        }))
    }

    handleChange = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        // If statements are to confirm that the user has given us new information
            // to update the existing todo with
        const updates = {}
        if(this.state.title.trim().length > 0){
            updates.title = this.state.title
        }
        if(this.state.description.trim().length > 0){
            updates.description = this.state.description
        }
        if(this.state.imgUrl.trim().length > 0){
            updates.imgUrl = this.state.imgUrl
        }
        if(this.state.price.trim().length > 0){
            updates.price = this.state.price
        }
        axios.put('/todos/' + this.props._id, updates).then(response => {
            this.props.getTodos()
            this.toggler()
        })
    }

    render(){
        return (
            <div className="todo-container">
            { !this.state.editToggle
                ?   <React.Fragment>
                        <h3>{this.props.title}</h3>
                        <p>Description: {this.props.description}</p>
                        <img src={ this.props.imgUrl } width={ 200 } alt=""/>
                        <p>Price: { this.props.price }</p>
                        <p>Completed: { this.props.completed }</p>
                        <button onClick={ () => this.props.handleDelete(this.props._id) }>Delete</button>
                        <button onClick={ this.toggler }>Edit</button>
                    </React.Fragment>
                :   <React.Fragment>
                        <Form 
                            handleChange={ this.handleChange }
                            handleSubmit={ this.handleSubmit }
                            title={ this.state.title }
                            description={ this.state.description }
                            imgUrl={ this.state.imgUrl }
                            completed={ this.state.completed }
                            price={ this.state.price }
                            btnText="Submit Edit"/>
                        <button onClick={ this.toggler }>Close</button>
                    </React.Fragment>
            }
            </div>
        )
    }
}

export default Todo
