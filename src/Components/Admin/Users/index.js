import React, { Component } from 'react'

import FetchUsers from 'Queries/fetchUsers'

class UserManagement extends Component {
    render() { 
        return ( 
            <ul>
                <FetchUsers />
            </ul>
        );
    }
}
 
export default UserManagement;