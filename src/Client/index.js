import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Cookies from 'universal-cookie';

import fragmentMatcher from './fragmentMatcher'
import { getBaseUrl } from 'Helpers'

const cookies = new Cookies();

const httpLink = createHttpLink({
    uri: `${getBaseUrl()}/m/query`,
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

const cache = new InMemoryCache({ fragmentMatcher })

const client = new ApolloClient({
    cache,
    link: authLink.concat(httpLink)
});

export default client;