import React from 'react'
import '../app.css'

const SearchResults = props => {

    return (
        <div>
            <h2>{props.Title}</h2>
            <h2>{props.Year}</h2>
            <img src={props.Poster} className='imgStyle'/>
        </div>
    )
}

export default SearchResults
