import React from 'react'
import '../app.css'
import NoImg from './no-image.jpg'

const SearchResults = props => {

    return (
        <div>
            <h2>{props.Title}</h2>
            <h2>{props.Year}</h2>
            <img src={props.Poster !== 'N/A' ? props.Poster : NoImg} className='searchImgStyle'/>
        </div>
    )
}

export default SearchResults
