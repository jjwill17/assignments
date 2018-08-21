import React from 'react'

const Turtle = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.nickName}</h3>
            <h3>{props.weapon}</h3>
            <img src={props.image} alt=""/>
        </div>
    )
}

export default Turtle;