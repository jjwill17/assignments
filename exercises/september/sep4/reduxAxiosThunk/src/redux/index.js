import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const initState = {
    todos: []
}

export const getTodos = () => {
    return function(dispatch){
        axios.get('https://api.vschool.io/marcus/todo').then(response => {
            dispatch({
                type: 'GET_TODOS',
                todos: response.data
            })
        })
    }
}

const reducer = (prevState=initState, action) => {
    switch(action.type){
        case "GET_TODOS":
            return {
                todos: action.todos
            }
        default: 
            return prevState
    }
}

export default createStore(
    reducer,
    applyMiddleware(thunk),
    // devtool info here
)