import { createStore } from 'redux'

const initState = {
    count: 0,
    img: ''
}

export const addOne = () => {
    return {
        type: 'ADD_ONE'
    }
}

export const subtractOne = () => {
    return {
        type: 'SUBTRACT_ONE'
    }
}

export const showImage = () => {
    return {
        type: 'SHOW_IMAGE'
    }
}

export const youSuck = () => {
    return {
        type: 'YOU_SUCK'
    }
}


const reducer = (prevState = initState, action) => {
    switch(action.type){
        case 'ADD_ONE':
            return {
                count: prevState.count + 1,
                img: ''
            }
        case 'SUBTRACT_ONE':
            return {
                count: prevState.count - 1,
                img: ''
            }
        case 'SHOW_IMAGE':
            return {
                count: prevState.count,
                img: 'https://i.ytimg.com/vi/-IBVAPYLr8w/maxresdefault.jpg'
            }
        case 'YOU_SUCK':
            return {
                count: 'YOU SUCK!',
                img: ''
            }
        default:
            return prevState
    }
}

const store = createStore(reducer)

// store.subscribe(()=>{
//     console.log(store.getState())
// })

export default store