import React from 'react'

const Form = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type='text' name='year' value={props.year} placeholder='Year...' onChange={props.handleChange}/>
            <input type='text' name='title' value={props.title} placeholder='Or Title' onChange={props.handleChange}/>
            <button>Search</button>
        </form>
    )
}

export default Form