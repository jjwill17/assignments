import React from 'react'
import { connect } from 'react-redux'
import { startTimer, stopTimer, resetTimer } from '../redux'

const Controls = props => {
    const timer = setInterval(props.startTimer, 1000)
    return (
        <div>
            <button onClick={timer}>Start</button>
            <button onClick={props.stopTimer}>Stop</button>
            <button onClick={props.resetTimer}>Reset</button>
        </div>
    )
}

export default connect(null, { startTimer, stopTimer, resetTimer })(Controls)
