import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'


const initState = {
    cocktails: []
}


export const getCocktails = () => {
    return dispatch => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`).then(response => {
            dispatch({
                type: "GET_COCKTAILS",
                cocktails: response.data.drinks
            })
        })       
    }
}


const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "GET_COCKTAILS":
            return {
                cocktails: action.cocktails
            }
        default:
            return prevState
    }
}


export default createStore(reducer, applyMiddleware(thunk))
