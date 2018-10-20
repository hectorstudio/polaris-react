import gql from 'graphql-tag';

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

export default FETCH_INVITES;
