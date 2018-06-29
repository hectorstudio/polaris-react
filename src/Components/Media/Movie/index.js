import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import REQUEST_STREAM from 'Mutations/requestStream'
import isCodecCompatible from 'Helpers/isCodecCompatible'
import base_url from 'Helpers/getBaseUrl'
import Video from './Video'

class Movie extends Component {
    state = {
        source: ''
    }
     
    onClick() {
        this.props.mutate({
            variables: { uuid: this.props.files[0].uuid }
        })
        .then(({ data }) => {
            let mime_types = this.generateMimeTypes(),
                stream_path = data.createStreamingTicket.streamingPath;

            this.setState({
                source: `${base_url()}${stream_path}?${mime_types}`
            });
        })
        .catch((error) => {
            console.log('there was an error sending the query', error);
        });
    }

    generateMimeTypes = () => {
        let static_codecs = ["mp4a.40.2", "avc1.64001e", "avc1.64001f", "avc1.640028"],
            server_codecs = [];

        this.props.files[0].streams.forEach(s => {
            if (s.stream_type === 'subtitle') return
            server_codecs.push(s.codec_mime);
        });

        let codecs = [...static_codecs, ...server_codecs];
        let playableCodecs = codecs.filter(isCodecCompatible);
        let queryParams = playableCodecs
            .map(c => "playableCodecs=" + encodeURIComponent(c))
            .join("&")

        return queryParams
    }

    render() {
        const { title } = this.props;

        const videoJsOptions = {
            autoplay: true,
            controls: true,
            enableLowInitialPlaylist: true,

            sources: [{
                src: this.state.source,
                type: 'application/x-mpegURL',
                name: title
            }]
        }

        return (
            <div>
                <p>{title}</p>
                <div onClick={this.onClick.bind(this)}>Play Movie</div>
                {this.state.source !== '' ?
                    <Video {...videoJsOptions} /> :
                    null
                }
            </div>
        )
    }
}

export default Movie = graphql(REQUEST_STREAM)(Movie);