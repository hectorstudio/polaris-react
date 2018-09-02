import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import CREATE_USER_INVITE from 'Mutations/createUserInvite';

import ContentWrap from 'Containers/ContentWrap';
import ManageUsers from 'Components/Admin/Users';

class Users extends Component {
  generateUserInvite = () => {
    const { mutate } = this.props;

    mutate()
      .catch((error) => {
        console.log('There was an error generating your invite code', error);
      });
  }

  render() {
    return (
      <ContentWrap>
        <ManageUsers generateUserInvite={this.generateUserInvite} />
      </ContentWrap>
    );
  }
}

Users.propTypes = {
  mutate: PropTypes.func.isRequired,
};

export default Users = graphql(CREATE_USER_INVITE)(Users);
