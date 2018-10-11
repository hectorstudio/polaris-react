import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Cookies from 'universal-cookie';

import { getBaseUrl } from 'Helpers';
import fragmentMatcher from './fragmentMatcher';

const cookies = new Cookies();

const httpLink = createHttpLink({
  uri: `${getBaseUrl()}/m/query`,
});

const authLink = setContext((_, { headers }) => {
  const token = cookies.get('jwt');

  return {
    headers: {
      ...headers,
      authorization: token.jwt ? `Bearer ${token.jwt}` : '',
    },
  };
});

const cache = new InMemoryCache({
  fragmentMatcher,
  dataIdFromObject: object => object.uuid || null,
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
});

export default client;
