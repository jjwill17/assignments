import React from 'react'
import { connect } from 'react-redux'
import { removeContact } from '../redux'

 const Display = props => {
     return (
         <div>
            { props.contacts.map( contact => {
                return (
                    <div>
                        <h3> {contact.fName} {contact.lName} </h3>
                        <button onClick={ () => props.removeContact(contact.id) }>Delete</button>
                    </div>
                )
            })}
         </div>
     )
 }

            // 1: What do you want from state object      2:  What actions do you want from your redux folder
export default connect(state=>state, { removeContact })(Display)

