import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "http://atalanta.bysh.me:8282/query"
});

export default client;