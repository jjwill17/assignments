var redux = require('redux')

var state = {
    count: 0
}

// Action
function addOne(){
    return {
        type: 'ADD_ONE'
    }
}

function multiply2ThenAddOne(){
    return {
        type: 'MULT_THEN_ADD'
    }
}

function setCountAndMult3(newCount){
    return {
        type: 'SET_COUNT_THEN_MULT',
        newCount: newCount
    }
}

// Reducer
function reducer(prevState = state, action){
    switch(action.type){
        case 'ADD_ONE':
            return {
                count: prevState.count + 1
            }
        case 'MULT_THEN_ADD':
            return {
                count: prevState.count * 2 + 1
            }
        case 'SET_COUNT_THEN_MULT':
            return {
                count: action.newCount * 3
            }
        default:
            return prevState
    }
}

var store = redux.createStore(reducer)

store.subscribe(function(){
    console.log(store.getState())
})

store.dispatch(addOne())
store.dispatch(addOne())
store.dispatch(multiply2ThenAddOne())
store.dispatch(setCountAndMult3(12))
