import React from 'react'

const People = props => {

    const divStyle = {
        border: "5px solid blue"
    }
    const textStyle = {
        textAlign: "center"
    }

    const imgStyles = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "75%"
    }

    return (
        <div style={divStyle}>
            <h2 style={textStyle}>Person: {props.name}</h2>
            <img style={imgStyles} src={props.image} alt="Uh oh, no pic displaying"/>
        </div>
    )
}

export default People