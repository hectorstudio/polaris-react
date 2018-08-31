import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import DELETE_USER from 'Mutations/deleteUser';

class UserListItem extends Component {
  state = {
    deleted: false,
  }

  deleteUser = (id) => {
    const { mutate } = this.props;

    mutate({
      variables: { id },
    })
      .then(() => {
        this.setState({
          deleted: true,
        });
      })
      .catch((error) => {
        console.error('There was an error deleting that user', error);
      });
  }

  render() {
    const { user, id, inviteCode } = this.props;
    const { deleted } = this.state;

    if (!deleted) {
      return (
        <li>
          <p>
            Name:
            {(user || 'Not Yet Redeemed')}
          </p>
          <p>
            Invite:
            {inviteCode}
          </p>
          <button type="submit" onClick={() => this.deleteUser(id)}>Delete User</button>
        </li>
      );
    }
    return (
      <li>User Deleted</li>
    );
  }
}

UserListItem.propTypes = {
  user: PropTypes.string.isRequired,
  inviteCode: PropTypes.string.isRequired,
  id: PropTypes.string,
  mutate: PropTypes.func.isRequired,
};

UserListItem.defaultProps = {
  id: '',
};

export default UserListItem = graphql(DELETE_USER)(UserListItem);
