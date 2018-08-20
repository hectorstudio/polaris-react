import gql from 'graphql-tag';

const DELETE_USER = gql` 
    mutation deleteUser($id: Int!) {
        deleteUser(id: $id) {
            user {
                username
            }
            error {
                message
                hasError
            }
        }
    }
`;

export default DELETE_USER;
