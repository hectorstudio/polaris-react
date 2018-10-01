import gql from 'graphql-tag';

export const ADD_LIBRARY = gql`
  mutation createLibrary($name: String!, $kind: Int!, $filePath: String!) {
    createLibrary(name: $name, kind: $kind, filePath: $filePath) {
      error {
        hasError
        message
      }
    }
  }
`;

export const DELETE_LIBRARY = gql`
  mutation deleteLibrary($id: Int!) {
    deleteLibrary(id: $id) {
      error {
        hasError
        message
      }
    }
  }
`;
