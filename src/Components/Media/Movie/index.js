import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { 
    generateMimeTypes, 
    getBaseUrl,
    videoJsOptions
 } from 'Helpers'

import REQUEST_STREAM from 'Mutations/requestStream'
import Video from '../Video'

class Movie extends Component {
    state = {
        source: ''
    }
     
    _playMedia() {
        this.props.mutate({
            variables: { uuid: this.props.files[0].uuid }
        })
        .then(({ data }) => {
            let mime_types = generateMimeTypes(this.props.files[0].streams),
                stream_path = data.createStreamingTicket.streamingPath;

            this.setState({
                source: `${getBaseUrl()}${stream_path}?${mime_types}`
            });
        })
        .catch((error) => {
            console.log('there was an error Playing the Movie', error);
        });
    }

    render() {
        const { title } = this.props;
        
        return (
            <div>
                <h1>{title}</h1>
                <div onClick={this._playMedia.bind(this)}>Play Movie</div>

                {this.state.source !== '' ?
                    <Video {...videoJsOptions(this.state.source, title)} /> :
                    null
                }
                
            </div>
        )
    }
}

export default Movie = graphql(REQUEST_STREAM)(Movie);