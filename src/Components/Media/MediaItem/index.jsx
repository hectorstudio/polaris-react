import React, { Component } from 'react';
import { compose } from 'lodash/fp';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { isIOS } from 'react-device-detect';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';

import {
  getPlayableCodecs,
  getBaseUrl,
  generateFileList,
} from 'Helpers';

import REQUEST_STREAM from 'Mutations/requestStream';
import MediaCard from 'Components/Media/Card';
import MediaDropdown from './MediaDropdown';
import MediaOverview from './MediaOverview';
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
      mimeType: '',
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

    playMedia = (resume) => {
      const { mutate, files } = this.props;
      const { selectedFile } = this.state;

      this.setState({ resume });

      mutate({
        variables: { uuid: files[selectedFile.value].uuid },
      })
        .then(({ data }) => {
          const codecs = getPlayableCodecs(files[selectedFile.value].streams);

          const streamPath = (isIOS
            ? data.createStreamingTicket.hlsStreamingPath
            : data.createStreamingTicket.dashStreamingPath);

          const mimeType = isIOS ? 'application/x-mpegURL' : 'application/dash+xml';

          this.setState({
            source: `${getBaseUrl()}${streamPath}?${codecs}`,
            mimeType,
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
        mimeType,
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
          type: mimeType,
          // Set one GBit initially and drop down if required to make it choose transmuxed first
          bandwidth: 1000000000,
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
                playMedia={this.playMedia}
                internalCard
                text
                {...mediaInfo}
              />
            </MediaLeftCol>
            <MediaRightCol>
              <MediaDropdown uuid={uuid} />
              <MediaOverview
                mediaInfo={mediaInfo}
                selectedFile={selectedFile}
                files={files}
                fileChange={this.fileChange}
                playMedia={this.playMedia}
              />
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
