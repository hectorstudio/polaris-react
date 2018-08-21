import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Select from 'react-select';

import {
  generateMimeTypes,
  getBaseUrl,
  generateFileList,
  getUrlParameter,
} from 'Helpers';

import REQUEST_STREAM from 'Mutations/requestStream';
import { VideoWrap, SelectStyle } from './Styles';

import Video from './Video';

class MediaItem extends Component {
    state = {
      source: '',
      files: [],
      selectedFile: {},
    }

    componentWillMount() {
      const file_list = generateFileList(this.props.files);

      this.setState({
        files: file_list,
        selectedFile: file_list[0],
      });
    }

    componentDidMount() {
      const autoplay = getUrlParameter('autoplay');
      if (autoplay) this._playMedia();
    }

    _handleFileChange = (selectedFile) => {
      this.setState({
        selectedFile,
      });
    }

    _playMedia() {
      this.props.mutate({
        variables: { uuid: this.props.files[this.state.selectedFile.value].uuid },
      })
        .then(({ data }) => {
          const mime_types = generateMimeTypes(this.props.files[this.state.selectedFile.value].streams);


          const stream_path = data.createStreamingTicket.streamingPath;

          this.setState({
            source: `${getBaseUrl()}${stream_path}?${mime_types}`,
          });
        })
        .catch((error) => {
          console.log('there was an error Playing the Movie', error);
        });
    }

    render() {
      const { name } = this.props;
      const { source, files, selectedFile } = this.state;

      const videoJsOptions = {
        autoplay: true,
        controls: true,
        enableLowInitialPlaylist: true,

        sources: [{
          src: source,
          type: 'application/x-mpegURL',
          name,
        }]
      };

      return (
        <div>
          <h1>{name}</h1>
          { files.length > 1
                    && (
                    <Select
                      value={selectedFile}
                      options={files}
                      onChange={this._handleFileChange}
                      styles={SelectStyle}
                    />
                    )
                }
          <div onClick={this._playMedia.bind(this)}>Play Movie</div>

          {this.state.source !== ''
            ? (
              <VideoWrap>
                <Video {...videoJsOptions} />
              </VideoWrap>
            )
            : null
                }

        </div>
      );
    }
}

export default MediaItem = graphql(REQUEST_STREAM)(MediaItem);
