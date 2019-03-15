import gql from 'graphql-tag';

const REQUEST_STREAM = gql`
    mutation createStreamingTicket($uuid: String!){
        createStreamingTicket(uuid: $uuid){
            error {
                hasError
                message
            }
            metadataPath
            dashStreamingPath
            hlsStreamingPath
            jwt
        }
    }
`;

export default REQUEST_STREAM;
