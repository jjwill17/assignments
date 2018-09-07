import React from 'react'

const Display = props => {
    return (
        <div>
            <h1>{props.Title}</h1>
            <h2>{props.Year}</h2>
            <img src={props.Poster}/>
        </div>
    )
}

export default Display