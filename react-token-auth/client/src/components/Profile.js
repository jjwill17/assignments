import React from 'react'

const Profile = props => {
    return (
        <div>
            <h3>Hello {props.user.username}</h3>
        </div>
    )
}

export default Profile