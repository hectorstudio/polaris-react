import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import DELETE_USER from 'Mutations/deleteUser'

class UserListItem extends Component {
    state = {
        deleted: false
    }
    
    _deleteUser = id => {
        this.props.mutate({
            variables: { id }
        })
        .then(({ data }) => {
            this.setState({
                deleted: true
            });
        })
        .catch((error) => {
            console.log('There was an error deleting that user', error);
        });
    }

    render() { 
        const { user, id, invite_code } = this.props;

        if (!this.state.deleted) {
            return (
                <li>
                    Name: {(user ? user : 'Not Yet Redeemed')}
                    <br />
                    Invite: {invite_code}
                    <button onClick={() => this._deleteUser(id)}>Delete User</button>
                </li>
            )
        } else {
            return (
                <li>User Deleted</li>
            )
        }
    }
}

export default UserListItem = graphql(DELETE_USER)(UserListItem);