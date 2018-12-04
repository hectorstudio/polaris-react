import React, { Component } from 'react';
import { compose } from 'lodash/fp';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { isIOS } from 'react-device-detect';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  canPlayCodec,
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
        const streamCodecs = files[selectedFile.value].streams
          .filter(s => s.streamType !== 'subtitle')
          .map(s => s.codecMime);
        // Ideally, we would ask the server for a list of codecs that it could transcode to. For the moment,
        // this is the pragmatic solution though.
        const standardTranscodedCodecs = ['mp4a.40.2', 'avc1.64001e', 'avc1.64001f', 'avc1.640028'];
        const playableCodecs = streamCodecs.concat(standardTranscodedCodecs)
          .filter(canPlayCodec);

        const streamPath = (isIOS
          ? data.createStreamingTicket.hlsStreamingPath
          : data.createStreamingTicket.dashStreamingPath);

        const mimeType = isIOS ? 'application/x-mpegURL' : 'application/dash+xml';

        const queryParams = playableCodecs
          .map(c => `playableCodecs=${encodeURIComponent(c)}`)
          .join('&');
        this.setState({
          source: `${getBaseUrl()}${streamPath}?${queryParams}`,
          mimeType,
        });
      })
      .catch((error) => {
        console.log('there was an error Playing the Movie', error);
      });
  }

  render() {
    const {
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

    const videoCodec = files[selectedFile.value].streams
      .filter(s => s.streamType === 'video')
      .map(s => s.codecMime)[0];

    const videoSource = {
      src: source,
      type: mimeType,
    };
    const transmuxed = canPlayCodec(videoCodec);

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
                source={videoSource}
                transmuxed={transmuxed}
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
