import React, { Component } from 'react'

import FetchUsers from 'Queries/fetchUsers'

class ManageUsers extends Component {   
    render() { 
        return ( 
            <div>
                <h1>Users</h1>
                <FetchUsers generateUserInvite={this.props.generateUserInvite}/>
            </div>
        );
    }
}
 
export default ManageUsers;