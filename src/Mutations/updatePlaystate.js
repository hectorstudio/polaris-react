import gql from 'graphql-tag';

const UPDATE_PLAYSTATE = gql` 
    mutation createPlayState($uuid: String!, $finished: Boolean!, $playtime: Float!) {
        createPlayState(uuid: $uuid, finished: $finished, playtime: $playtime) {
          uuid

          playState {
            finished
            playtime
          }
        }
    }
`;

export default UPDATE_PLAYSTATE;
