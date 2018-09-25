import React, { Component } from 'react'
import TodoList from './TodoList'
import Form from './Form'
import axios from 'axios'


export default class Main extends Component {
    constructor(){
        super()
        this.state = {
            todos: [],
            title: '',
            description: '',
            price: '',
            completed: false,
            imgUrl: ''
        }
    }
    
    componentDidMount(){
        this.getTodos()
    }

    getTodos = () => {
        axios.get('/todos').then(response => {
            this.setState({
                todos: response.data
            })
        })
        .catch(err => { console.log(err) })
    }

    handleChange = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newTodoObject = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl,
            price: this.state.price,
            completed: this.state.completed
        }

        axios.post('/todos', newTodoObject).then(response => {
            this.setState(prevState => ({
                todos: [...prevState.todos, response.data ],
                title: '',
                description: '',
                price: '',
                completed: false,
                imgUrl: ''
            }))
        }) 
    }

    handleDelete = id => {
        axios.delete(`/todos/${id}`).then(response => {
            this.setState(prevState => ({
                todos: prevState.todos.filter(todo => todo._id !== id)
            }))
        })
    }

    render(){
        return (
            <div>
               <Form 
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                    title={ this.state.title }
                    description={ this.state.description }
                    imgUrl={ this.state.imgUrl }
                    completed={ this.state.completed }
                    price={ this.state.price }
                    formStyle="add-todo-form"
                    btnText="Add Todo"
                />
               <TodoList 
                    todos={ this.state.todos }
                    handleDelete={ this.handleDelete }
                    getTodos={ this.getTodos }/>
            </div>
        )
    }
}

