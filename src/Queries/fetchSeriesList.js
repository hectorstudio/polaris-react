import gql from 'graphql-tag';

const FETCH_SERIES_LIST = gql`
  {
    series {
      type: __typename
      name
      posterPath
      uuid
      unwatchedEpisodesCount
    }
  }
`;

export default FETCH_SERIES_LIST;
