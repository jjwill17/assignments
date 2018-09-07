import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'
import apiKey from '../apiKey'

const initState = {
    movieData: []
}

export const getData = () => {
    return dispatch => {
        axios.get(`http://www.omdbapi.com/?apikey=${apiKey.key}&s=star_wars`).then(response => {
            dispatch({
                type: 'GET_MOVIES',
                movies: response.data.Search
            })
        })
    }
}

const reducer = (prevState = initState, action) => {
    switch(action.type){
        case 'GET_MOVIES':
            return {
                movieData: action.movies
            }
        default:
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))