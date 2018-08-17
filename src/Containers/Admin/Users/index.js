import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import CREATE_USER_INVITE from 'Mutations/createUserInvite'

import ManageUsers from 'Components/Admin/Users'

class Users extends Component {
    state = {
        inviteCode: '',
        inviteGenerated: false
    }

    _generateUserInvite = () => {     
        this.props.mutate()
            .then(({ data }) => {
                this.setState({
                    inviteCode: data.createUserInvite.code
                });
            })
            .catch((error) => {
                console.log('There was an error generating your invite code', error);
            });
    }
    
    render() { 
        return ( 
            <div>
                <ManageUsers generateUserInvite={ this._generateUserInvite } />
            </div>
        );
    }
}
 
export default Users = graphql(CREATE_USER_INVITE)(Users);