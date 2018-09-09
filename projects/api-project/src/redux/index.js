import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'
import secondApiKey from '../secondApiKey'


const initState = {
    currentMovies: []
}

export const getData = () => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${secondApiKey.key}`).then(response => {
            dispatch({
                type: 'GET_CURRENT_MOVIES',
                movies: response.data.results
            })
        })
    }
}

const reducer = (prevState = initState, action) => {
    switch(action.type){
        case 'GET_CURRENT_MOVIES':
            return {
                currentMovies: action.movies
            }
        default:
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))