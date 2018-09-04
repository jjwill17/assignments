var redux = require('redux')

var initialState = {
    data: []
}

function addNew(contact){
    return {
        type: 'ADD_NEW',
        data: contact
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        // case 'ADD_CONTACT':
        //     return {
        //         data: action.data
        //     }
        case 'ADD_NEW':
            return {
                ...state,
                data: [...state.data, action.data]
            }
        default:
            return state
    }
}

var store = redux.createStore(reducer)

store.subscribe(function(){
    console.log(store.getState())
})


// store.dispatch(addContact({name: 'Justin', age: '29'}))
store.dispatch(addNew({name: 'Justin', age: '29'}))
store.dispatch(addNew({name: 'Livia', age: '30'}))
