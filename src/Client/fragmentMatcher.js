import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import fragmentTypes from './fragmentTypes.json';

const filteredData = fragmentTypes.data.__schema.types.filter(
    type => type.possibleTypes !== null,
);

fragmentTypes.data.__schema.types = filteredData;

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: {
        __schema: {
            types: [
                fragmentTypes
            ]
        }
    }
});

export default fragmentMatcher