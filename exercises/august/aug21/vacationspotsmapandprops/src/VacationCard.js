import React from 'react'

const VacationCard = (props) => {
    const styles = {
        backgroundColor: "cornflowerblue",
        border: '5px solid teal',
        borderRadius: '20px',
        margin: '10px',
        textAlign: 'center'   
    }
    const pStyles ={
        marginTop:'0',
        marginBottom:'5px'
    }
    return (
        <div style={styles}>
            <h2>Destination:<br></br>{props.place}</h2>
            <p style={pStyles}>Price: {props.price}</p>
            <p style={pStyles}>Best time to go: {props.timeToGo}</p>
        </div>
    )
}

export default VacationCard