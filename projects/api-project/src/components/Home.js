import React from 'react'
import '../app.css'

const Home = () => {
    const styles = {
        color: 'rgb(232, 142, 142)',
        marginTop: "0",
        marginBottom: "0",
        padding: "200px 200px 200px 200px",
        textAlign: "center",
        borderRadius: "25px 0 25px 0"
    }
    return (
        <div style={styles}>
            <h1>MovieSearch</h1>
            <h2>Search for Movies and See What is Currently Playing</h2>
        </div>
    )
}

export default Home