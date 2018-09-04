import { createStore } from 'redux'

const uglyState = {
    things: []
}

export const addImg = newImg => {
    return {
        type: 'ADD_IMG',
        newImg: newImg
    }
}

export const addTitle = newThing => {
    return {
        type: 'ADD_TITLE',
        newThing: newThing
    }
}

const reducer = (prevState = uglyState, action) => {
    switch(action.type){
        case 'ADD_TITLE':
            return {
                img: [...prevState.things, action.newThing]
            }
        default:
         return prevState
    }
}

export default createStore(reducer)