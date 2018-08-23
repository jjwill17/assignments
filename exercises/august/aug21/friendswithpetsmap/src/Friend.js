import React from 'react'

const Friend = (props) => {
    const styles = {
        textAlign: 'center',
        marginTop: '10px',
        marginLeft: '40%',
        marginRight: '40%',
        padding: '15px',
        backgroundColor: 'cornflowerblue'
    }

    return (
        <div style={styles}>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <p><Pet /></p>
        </div>
    )
}

export default Friend