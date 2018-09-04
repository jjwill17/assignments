import React from 'react'

const Form = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="title" value={props.title} onChange={props.handleChange} placeholder='Put in the title' />
            <input type="text" name="img" value={props.img} onChange={props.handleChange} placeholder='Paste the image url here' />
            <input type="text" name="description" value={props.description} onChange={props.handleChange} placeholder='Put a description' />
            <button>Submit</button>
        </form>
    )
}

export default Form