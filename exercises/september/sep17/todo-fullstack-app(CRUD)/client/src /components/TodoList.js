import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            { props.todos.map(todo => 
                        <Todo 
                            key={ todo._id }
                            {...todo}   /* Sends all properties of the Todo object as props */
                            handleDelete={props.handleDelete}
                            getTodos={ props.getTodos }/>) 
            }
        </div>
    )
}

export default TodoList