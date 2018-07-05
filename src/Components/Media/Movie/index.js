import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { 
    generateMimeTypes, 
    getBaseUrl
 } from 'Helpers'

 import { VideoWrap } from './Styles'

import REQUEST_STREAM from 'Mutations/requestStream'
import Video from '../Video'

class Movie extends Component {
    state = {
        source: ''
    }

    componentDidMount() {
        let urlParams = new URLSearchParams(window.location.search),
            autoplay = urlParams.get('autoplay');

        // Trigger Autoplay
        if (autoplay) this._playMedia()
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
                    <VideoWrap>
                        <Video source={this.state.source} />
                    </VideoWrap> :
                    null
                }
                
            </div>
        )
    }
}

export default Movie = graphql(REQUEST_STREAM)(Movie);