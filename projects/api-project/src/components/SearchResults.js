import React from 'react'

const SearchResults = props => {
    const imgStyle = {
        height: 'auto',
        maxWidth: '550px'
    }

    return (
        <div>
            <h2>{props.Title}</h2>
            <h2>{props.Year}</h2>
            <img src={props.Poster} style={imgStyle}/>
        </div>
    )
}

export default SearchResults
