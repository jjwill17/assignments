import React from 'react'

const DisplayBadge = props => {
    return (
        <div>
            <p>Name: {props.firstName} {props.lastName}</p>
            <p>Email: {props.email} Place of Birth: {props.birthPlace}</p>
            <p>Phone: {props.phone} Favorite Food: {props.favFood}</p>
        </div>
    )
}

export default DisplayBadge