import React from 'react'

const UserListItem = props => {
    console.log(props);
    return <li>Name: {props.login} {(props.admin ? 'Admin' : 'User')}</li>
}

export default UserListItem