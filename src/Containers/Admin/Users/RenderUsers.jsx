import React from 'react';
import { Query } from 'react-apollo';

import FETCH_USERS from 'Queries/fetchUserList';
import Loading from 'Components/Loading';
import UserInvite from 'Components/Admin/Users/UserItem';

const RenderMovie = () => (
  <Query
    query={FETCH_USERS}
    fetchPolicy="cache-and-network"
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      return data.users.map(u => <UserInvite key={u.id} {...u} />);
    }}

  </Query>
);

export default RenderMovie;
