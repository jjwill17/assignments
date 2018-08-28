import React from 'react'

const Person = props => {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <p>Gender: {props.gender}</p>
            <p>Hair Color: {props.hair_color}</p>
        </div>
    )
}

// <p>Hair Color: {props.hairColor}</p> if writing out each one on in 'const mappedStarWarsFolk' on App.js

export default Person