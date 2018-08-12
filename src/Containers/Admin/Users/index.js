import React, { Component } from 'react'

import UserManagement from 'Components/Admin/Users'

class Users extends Component {
    state = { 

    }
    
    render() { 
        return ( 
            <div>
                <h1>Users</h1>
                <UserManagement />
            </div>
        );
    }
}
 
export default Users;