import React from 'react'
import { connect } from 'react-redux'

const Display = props => {
    
    return (
        <div>
            <p>{props.minutes}:{props.seconds}:{props.milliseconds}</p>
        </div>
    )
}

export default connect(state=>state, {})(Display)