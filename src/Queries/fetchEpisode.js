import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Episode from 'Components/Media/Episode'

const FETCH_EPISODE = gql`
    query episode($uuid: String!) {
        episode(uuid: $uuid) {    
            name
            
            files {
                file_name
                uuid
                streams {
                    codec_mime
                    stream_type
                }
            }
        }
    }
`

const FetchEpisode = ({ uuid }) => {
    return (
        <Query
            query={FETCH_EPISODE}
            variables={{ uuid }}
        >

            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                
                let episode = data.episode;

                return (<Episode type="episode" {...episode} />);
            }}

        </Query>
    )
};

export default FetchEpisode
