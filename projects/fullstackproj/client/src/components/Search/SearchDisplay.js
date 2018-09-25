import React from 'react'
import decryptIt from '../../decrypt'
import '../../styles/app.css'

const SearchDisplay = props => {
    
    return (
        <div className='mapped'>
            {props.searched.map(item => 
                <div className='searched' key={item._id}>
                    <p onMouseUp={() => console.log(decryptIt(item.text))}>{item.text}</p>
                    <p>Date Created: {item.date}</p>
                    <p>ID Number: {item._id}</p>
                    <button onClick={() => props.handleDelete(item._id)} className='delete-button'>Delete</button>
                </div>)}
        </div>
    )
}

export default SearchDisplay