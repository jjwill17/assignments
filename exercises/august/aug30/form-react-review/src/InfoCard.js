import React from 'react'

const InfoCard = props => {
    return (
        <div className="card-container">
            <h3>SSN:{props.ssn}</h3>
            <h3>Mothers Maiden Name:{props.mothersMaidenName}</h3>
            <h3>First Pet:{props.firstPet}</h3>
        </div>
    )
}

export default InfoCard