import React from 'react'
import { connect } from 'react-redux'
import { addOne, subtractOne, showImage, youSuck } from  '../redux'

const Controls = props => {
    return (
        <div>
            <button onClick={props.addOne}>Add One</button>
            <button onClick={props.youSuck}>Subtract one you fool, make my day</button>
            <button onClick={props.showImage}>???</button>

        </div>
    )
}

export default connect(null, { addOne, subtractOne, showImage, youSuck})(Controls)