import { createStore } from 'redux'

// let time = new Date(0)
// let secs = time.getSeconds()
// let mins = time.getMinutes()

const timerState = {
    milliseconds: 0,
    seconds: 0,
    minutes: 0
}

export const startTimer = () => {
    return {
        type: 'START'
    }
}

export const stopTimer = () => {
    return {
        type: 'STOP'
    }
}

export const resetTimer = () => {
    return {
        type: 'RESET'
    }
}

const reducer = (prevState = timerState, action) => {
 
    if(prevState.seconds > 58){
        prevState.seconds=0
        prevState.minutes++
    }
    
    switch(action.type){
        case 'START':
            return {
                milliseconds: prevState.milliseconds,
                seconds: prevState.seconds + 1,
                minutes: prevState.minutes
            }
        case 'STOP':
            return {
                milliseconds: prevState.milliseconds + 'stop', // to stop
                seconds: prevState.seconds,
                minutes: prevState.minutes
            }
        case 'RESET':
            return {
                milliseconds: 0,
                seconds: 0,
                minutes: 0
            }
        default:
            return prevState
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store