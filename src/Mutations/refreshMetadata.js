import gql from 'graphql-tag';

const REFRESH_METADATA = gql`
    mutation refreshAgentMetadata($uuid: String!) {
        refreshAgentMetadata(uuid: $uuid)
    }
`;

export default REFRESH_METADATA;
