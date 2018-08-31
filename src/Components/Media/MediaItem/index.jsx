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
      const { files } = this.props;

      const fileList = generateFileList(files);

      this.setState({
        files: fileList,
        selectedFile: fileList[0],
      });
    }

    componentDidMount() {
      const autoplay = getUrlParameter('autoplay');
      if (autoplay) this.playMedia();
    }

    _handleFileChange = (selectedFile) => {
      this.setState({
        selectedFile,
      });
    }

    playMedia() {
      const { mutate, files } = this.props;
      const { selectedFile } = this.state;

      mutate({
        variables: { uuid: files[selectedFile.value].uuid },
      })
        .then(({ data }) => {
          const mimeTypes = generateMimeTypes(files[selectedFile.value].streams);


          const streamPath = data.createStreamingTicket.streamingPath;

          this.setState({
            source: `${getBaseUrl()}${streamPath}?${mimeTypes}`,
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
        techOrder: ['chromecast', 'html5'],
        enableLowInitialPlaylist: true,

        sources: [{
          src: source,
          type: 'application/x-mpegURL',
          name,
        }],
        plugins: {
          chromecast: {
            receiverAppID: '2A952047', // Not required
          },
        },
      };

      return (
        <div>
          <h1>{name}</h1>
          { files.length > 1
            && (
              <Select
                value={selectedFile}
                options={files}
                onChange={this.handleFileChange}
                styles={SelectStyle}
              />
            )
          }
          <button type="submit" onClick={this.playMedia.bind(this)}>
            Play Movie
          </button>

          {source !== ''
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
