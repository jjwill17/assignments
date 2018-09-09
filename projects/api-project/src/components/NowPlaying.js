import React from 'react'

const NowPlaying = props => {
    let poster = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${props.poster_path}`
    console.log(poster)
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>Release Date: {props.release_date}</h2>
            <h2>Average Vote: {props.vote_average}</h2>
            <h2>Number of Votes: {props.vote_count}</h2>
            <img src={poster}/>
        </div>
    )
}

export default NowPlaying