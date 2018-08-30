import React from 'react'

const Form = props => {
    return (
        <form onSubmit={props.handleSubmit} className="form-container">
            <p>Gimme yo info</p>
            <input 
                type="text" 
                name="ssn" 
                value={ props.ssn } 
                onChange={ props.handleChange }
                placeholder="ssn"/>
            <input 
                type="text" 
                name="mothersMaidenName" 
                value={ props.mothersMaidenName } 
                onChange={ props.handleChange }
                placeholder="Mothers Maiden Name"/>
            <input 
                type="text" 
                name="firstPet" 
                value={ props.firstPet } 
                onChange={ props.handleChange }
                placeholder="First Pet"/>
            <button>Submit</button>
        </form>
    )
}

export default Form