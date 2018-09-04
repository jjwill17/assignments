var redux = require('redux')

// REDUX

// Initial State
var state = {
    count: 0
}

// ACTIONS - Action Creators // - Must have a Type in "SCREAMING_SNAKE_CASE"
    // Actions return action objects when dispatch is used
        // The action object is sent to the reducer to update state appropriately
function addOne(){
    return {
        type: "ADD_ONE"
    }
}

function subtractOne(){
    return {
        type: "SUBTRACT_ONE"
    }
}

function setCount(newCount){
    return {
        type: "SET_COUNT",
        newCount: newCount
    }
}


// REDUCER - Function that takes action objects and updates the store (state) appropriately
function reducer(prevState = state, action){
    switch(action.type){
        case "ADD_ONE":
            return {
                count: prevState.count + 1
            }
        case "SUBTRACT_ONE":
            return {
                count: prevState.count - 1
            }
        case "SET_COUNT":
            return {
                count: action.newCount
            }
        default:
            return prevState
    }
}

var store = redux.createStore(reducer)

// Logging to the console the condition of your current store (state)
store.subscribe(function(){
    console.log(store.getState())
})

// this.setState({ count: prevState.count + 1 })
store.dispatch(addOne())
store.dispatch(addOne())
store.dispatch(addOne())
store.dispatch(setCount(589459817349857))
