import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import UserListItem from 'Components/Admin/Users/UserListItem';

const FETCH_INVITES = gql`
    {
        invites {
            code
            user {
                username
            }
        }
    }
`;

const FetchUsers = props => (
  <Query
    fetchPolicy="network-only"
    query={FETCH_INVITES}
    notifyOnNetworkStatusChange
  >

    {({
      loading, error, data, refetch, networkStatus,
    }) => {
      if (networkStatus === 4) console.log('Refetching!');
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      const generateInviteCode = () => {
        props.generateUserInvite();
        refetch();
      };

      if (data.invites.length === 0) {
        return (<button onClick={() => { generateInviteCode(); }}>Generate Invite Code</button>);
      }

      return data.invites.map(({ code, user }, i) => {
        const length = data.invites.length;
        console.log(user);


        return (
          <React.Fragment key={i}>
            <UserListItem
              user={(user ? user.username : '')}
              inviteCode={code}
              id={(user ? user.id : '')}
            />

            {length === i + 1
                && <button onClick={() => { generateInviteCode(); }}>Generate Invite Code</button>
            }
          </React.Fragment>
        );
      });
    }}

  </Query>
);

export default FetchUsers;
