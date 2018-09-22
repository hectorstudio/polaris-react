import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';

import {
  generateMimeTypes,
  getBaseUrl,
  generateFileList,
  getUrlParameter,
} from 'Helpers';

import REQUEST_STREAM from 'Mutations/requestStream';
import Media from 'Components/Media/Card';
import MediaInfo from './MediaInfo';
import MediaFiles from './MediaFiles';
import MediaSubtitles from './MediaSubtitles';
import MediaAudio from './MediaAudio';
import Video from './Video';

import { VideoWrap, MediaFull, CloseVideo } from './Styles';
import {
  MediaFullWrap,
  MediaLeftCol,
  MediaRightCol,
  MediaBackground,
} from '../Styles';

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

      document.addEventListener('keydown', this.closeMedia, false);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.closeMedia, false);
    }


    fileChange = (selectedFile) => {
      this.setState({
        selectedFile,
      });
    }

    closeMedia = () => {
      this.setState({ source: '' });
    }

    playMedia = () => {
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
        posterPath,
        season,
        type,
      } = this.props;
      const {
        source,
        files,
        selectedFile,
      } = this.state;
      const background = (posterPath || season.series.posterPath);

      const videoJsOptions = {
        autoplay: true,
        techOrder: ['chromecast', 'html5'],
        enableLowInitialPlaylist: true,

        sources: [{
          src: source,
          type: 'application/x-mpegURL',
          name,
        }],
        plugins: {
          chromecast: {
            receiverAppID: '2A952047',
          },
        },
      };

      return (
        <MediaFullWrap>
          <MediaBackground bgimg={`${getBaseUrl()}/m/images/tmdb/w342/${background}`} />
          <MediaFull>
            <MediaLeftCol>
              <Media size={(type === 'Episode' ? 'largeWide' : 'large')} onClick={() => { this.playMedia(); }} {...this.props} />
            </MediaLeftCol>
            <MediaRightCol>
              <MediaInfo {...this.props} selectedFile={selectedFile} />
              <MediaFiles files={files} selectedFile={selectedFile} fileChange={this.fileChange} />
              <MediaSubtitles selectedFile={selectedFile} />
              <MediaAudio selectedFile={selectedFile} />
            </MediaRightCol>
          </MediaFull>

          {source !== ''
            ? (
              <VideoWrap>
                <CloseVideo icon={faTimes} onClick={this.closeMedia} />
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
