import React from 'react'

const UserListItem = props => {
    return (
        <li>
            Name: {props.user} 
            <br />
            Invite: {props.invite_code}
        </li>
    )
}

export default UserListItem