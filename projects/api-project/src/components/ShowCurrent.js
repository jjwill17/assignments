import React from 'react'

const ShowCurrent = props => {

    let poster = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${props.poster_path}`

    const movieStyle = {
        padding: '30px'
    }

    const title = {
        textDecoration: 'underline'
    }

    const imgStyle = {
        height: 'auto',
        maxWidth: '500px'
    }

    return (
        <div style={movieStyle}>
            <h2 style={title}>{props.title}</h2>
            <h3>Release Date: {props.release_date}</h3>
            <h3>Average Vote: {props.vote_average}</h3>
            <h3>Number of Votes: {props.vote_count}</h3>
            <img src={poster} style={imgStyle}/>
        </div>
    )
}

export default ShowCurrent