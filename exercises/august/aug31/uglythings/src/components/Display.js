import React from 'react'

const Display = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.img} alt=''/>
        </div>
    )
}

export default Display