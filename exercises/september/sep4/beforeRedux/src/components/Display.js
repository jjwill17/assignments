import React from 'react'

 const Display = props => {
     return (
         <div>
             { props.contacts.map( contact => <h3> {contact.fName} {contact.lName} </h3> ) }
         </div>
     )
 }

 export default Display