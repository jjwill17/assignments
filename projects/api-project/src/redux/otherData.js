// import { createStore, applyMiddleware } from 'redux'
// import React from 'react'
// import axios from 'axios'
// import thunk from 'redux-thunk'
// import apiKey from '../apiKey'


// // Need to take this out
// const data = props => {
//     console.log(props.title)
//     return (
//         <div>{props.title}</div>
//     )
// }

// const initState = {
//     reduxKey: 'This is from the redux file',
//     movieData: []
// }

// export const getData = () => {
//     return dispatch => {
//         axios.get(`http://www.omdbapi.com/?apikey=${apiKey.key}&s=star_wars`).then(response => {
//             dispatch({
//                 type: 'GET_MOVIES',
//                 movies: response.data.Search
//             })
//         })
//     }
// }

// const reducer = (prevState = initState, action) => {
//     switch(action.type){
//         case 'GET_MOVIES':
//             return {
//                 movieData: action.movies
//             }
//         default:
//             return prevState
//     }
// }

// export default createStore(reducer, applyMiddleware(thunk))