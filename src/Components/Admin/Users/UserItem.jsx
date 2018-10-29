import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import DELETE_USER from 'Mutations/deleteUser';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { UserListItem, DeleteUser } from './Styles';

class UserItem extends Component {
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
    const { username, id } = this.props;
    const { deleted } = this.state;

    const deletedMessage = `Successfully Deleted ${username}`;

    if (!deleted) {
      return (
        <UserListItem>
          {username}
          <DeleteUser icon={faTrash} onClick={() => this.deleteUser(id)} />
        </UserListItem>
      );
    }
    return <UserListItem success>{deletedMessage}</UserListItem>;
  }
}

UserItem.propTypes = {
  username: PropTypes.string.isRequired,
  id: PropTypes.number,
  mutate: PropTypes.func.isRequired,
};

UserItem.defaultProps = {
  id: '',
};

export default UserItem = graphql(DELETE_USER)(UserItem);
