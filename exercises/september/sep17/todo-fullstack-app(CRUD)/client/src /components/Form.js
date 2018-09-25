import React from 'react'

const Form = props => {
    return (
        <form onSubmit={ props.handleSubmit } className={ props.formStyle }>
            <input 
                type="text" 
                onChange={ props.handleChange } 
                value={ props.title } 
                name="title"
                placeholder="Title"/>
            <input 
                type="text" 
                onChange={ props.handleChange } 
                value={ props.description } 
                name="description"
                placeholder="Description"/>
            <input 
                type="text" 
                onChange={ props.handleChange } 
                value={ props.imgUrl } 
                name="imgUrl"
                placeholder="Image Url"/>
            <label> Completed: 
            <input 
                type="checkbox" 
                onChange={ props.handleChange } 
                checked={ props.completed } 
                name="completed"/>
            </label>
            <input 
                type="number" 
                onChange={ props.handleChange } 
                value={ props.price } 
                name="price"
                placeholder="price"/>
            <button>{props.btnText}</button>
        </form>
    )
}

export default Form