import React from 'react';
import { Query } from 'react-apollo';

import FETCH_INVITES from 'Queries/fetchInvites';
import Loading from 'Components/Loading';
import InviteItem from 'Components/Admin/Users/InviteItem';

const RenderMovie = () => (
  <Query
    query={FETCH_INVITES}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      const invites = data.invites.filter(i => i.user === null);

      return invites.map(i => <InviteItem key={i.code} {...i} />);
    }}

  </Query>
);

export default RenderMovie;
