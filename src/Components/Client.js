import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const httpLink = createHttpLink({
    uri: 'http://d31r5.bysh.me:9090/m/query',
});

const authLink = setContext((_, { headers }) => {
    let token = cookies.get('jwt');

    return {
        headers: {
            ...headers,
            authorization: token.jwt ? `Bearer ${token.jwt}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;