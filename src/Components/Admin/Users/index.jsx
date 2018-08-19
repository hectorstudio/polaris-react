import React from 'react';
import PropTypes from 'prop-types';

import FetchUsers from 'Queries/fetchUsers';

const ManageUsers = ({ generateUserInvite }) => (
  <React.Fragment>
    <h1>Users</h1>
    <FetchUsers generateUserInvite={generateUserInvite} />
  </React.Fragment>
);

ManageUsers.propTypes = {
  generateUserInvite: PropTypes.func.isRequired,
};

export default ManageUsers;
