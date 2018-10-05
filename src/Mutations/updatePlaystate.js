import gql from 'graphql-tag';

const UPDATE_PLAYSTATE = gql` 
    mutation createPlayState($uuid: String!, $finished: Boolean!, $playtime: Float!) {
        createPlayState(uuid: $uuid, finished: $finished, playtime: $playtime) {
          success
        }
    }
`;

export default UPDATE_PLAYSTATE;
