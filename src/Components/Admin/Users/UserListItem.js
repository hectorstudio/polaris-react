import React from 'react'

const UserListItem = props => {
    return (
        <li>
            Name: {(props.user ? props.user : 'Not Yet Redeemed')} 
            <br />
            Invite: {props.invite_code}
        </li>
    )
}

export default UserListItem