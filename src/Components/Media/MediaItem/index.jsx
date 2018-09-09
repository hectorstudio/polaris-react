import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Select from 'react-select';

import {
  generateMimeTypes,
  getBaseUrl,
  generateFileList,
  getUrlParameter,
  convertFloatMs,
} from 'Helpers';

import REQUEST_STREAM from 'Mutations/requestStream';
import Media from 'Components/Media/Card';
import Video from './Video';

import {
  VideoWrap,
  SelectStyle,
  MediaFullWrap,
  MediaFull,
  MediaLeftCol,
  MediaRightCol,
  MediaName,
  MediaInfo,
} from './Styles';

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
      const {
        name,
        backdropPath,
        year,
        airDate,
      } = this.props;
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
        <MediaFullWrap bg={`${getBaseUrl()}/m/images/tmdb/w1280/${backdropPath}`}>
          <MediaFull>
            <MediaLeftCol>
              <Media size="large" onClick={() => { this.playMedia(); }} {...this.props} />
            </MediaLeftCol>
            <MediaRightCol>
              <MediaName>{name}</MediaName>
              <MediaInfo>
                {(year || airDate)}
                {convertFloatMs(selectedFile.totalDuration)}
              </MediaInfo>
            </MediaRightCol>
          </MediaFull>

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

          {source !== ''
            ? (
              <VideoWrap>
                <Video {...videoJsOptions} />
              </VideoWrap>
            )
            : null
          }

        </MediaFullWrap>
      );
    }
}

export default MediaItem = graphql(REQUEST_STREAM)(MediaItem);
