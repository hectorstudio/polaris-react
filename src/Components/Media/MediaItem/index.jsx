import React, { Component } from 'react';
import { compose } from 'lodash/fp';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';

import {
  generateMimeTypes,
  getBaseUrl,
  generateFileList,
} from 'Helpers';

import REQUEST_STREAM from 'Mutations/requestStream';
import MediaCard from 'Components/Media/Card';
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
      resume: false,
      files: [],
      selectedFile: {},
    }

    componentWillMount() {
      const { files, location } = this.props;
      const fileList = generateFileList(files);

      this.setState({
        files: fileList,
        selectedFile: fileList[0],
        resume: (location.state ? location.state.resume : false),
      });
    }

    componentDidMount() {
      const { location } = this.props;
      if (location.state && location.state.autoplay === true) this.playMedia();

      document.addEventListener('keydown', this.escapeClose, false);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.escapeClose, false);
    }

    escapeClose = e => e.key === 'Escape' && this.closeMedia();

    fileChange = (selectedFile) => {
      this.setState({
        selectedFile,
      });
    }

    closeMedia = () => {
      this.setState({
        source: '',
      });
    }

    resumeMedia = (resume) => {
      this.setState({ resume });

      this.playMedia();
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
        uuid,
        playState,
      } = this.props;
      const {
        source,
        files,
        selectedFile,
        resume,
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

      const mediaInfo = {
        ...this.props,
        playState,
      };

      return (
        <MediaFullWrap>
          <MediaBackground bgimg={`${getBaseUrl()}/m/images/tmdb/w342/${background}`} />
          <MediaFull>
            <MediaLeftCol>
              <MediaCard
                size={(type === 'Episode' ? 'largeWide' : 'large')}
                resumeMedia={this.resumeMedia}
                onClick={() => { this.playMedia(); }}
                internalCard
                text
                {...mediaInfo}
              />
            </MediaLeftCol>
            <MediaRightCol>
              <MediaInfo {...mediaInfo} selectedFile={selectedFile} />
              <MediaFiles
                files={files}
                selectedFile={selectedFile}
                fileChange={this.fileChange}
              />
              <MediaSubtitles selectedFile={selectedFile} />
              <MediaAudio selectedFile={selectedFile} />
            </MediaRightCol>
          </MediaFull>

          {source !== ''
            ? (
              <VideoWrap>
                <CloseVideo icon={faTimes} onClick={this.closeMedia} />
                <Video
                  {...videoJsOptions}
                  resume={resume}
                  playState={playState}
                  uuid={uuid}
                  length={selectedFile.totalDuration}
                  type={type}
                />
              </VideoWrap>
            )
            : null
          }

        </MediaFullWrap>
      );
    }
}

export default compose(
  withRouter,
  graphql(REQUEST_STREAM),
)(MediaItem);
