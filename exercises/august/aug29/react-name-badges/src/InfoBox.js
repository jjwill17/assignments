import React from 'react'

const InfoBox = props => {

    const inputStyles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '10px',
        marginLeft: '35%',
        marginRight: '20%',
        width: '25%',
        padding: '1%'
    }

   return (
            <div style={inputStyles}>
                <input type='text' name='firstName' value={props.firstName} placeholder="First Name" onChange={props.handleChange}></input>
                <input type='text' name='lastName' value={props.lastName} placeholder="Last Name" onChange={props.handleChange}></input>
                <input type='text' name='email' value={props.email} placeholder="email" onChange={props.handleChange}></input>
                <input type='text' name='birthPlace' value={props.birthPlace} placeholder="Place of Birth" onChange={props.handleChange}></input>
                <input type='number' name='phone' value={props.phone} placeholder="Phone Number" onChange={props.handleChange}></input>
                <input type='text' name='favFood' value={props.favFood} placeholder="Favorite Food" onChange={props.handleChange}></input>
            </div>
   )
}

export default InfoBox