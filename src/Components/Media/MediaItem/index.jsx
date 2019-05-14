import React, { Component } from 'react';
import { compose } from 'lodash/fp';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { isIOS } from 'react-device-detect';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  canPlayCodec,
  getBaseUrl,
  generateFileList,
} from 'Helpers';
import { showVideo, hideVideo } from 'Redux/Actions/videoActions';

import REQUEST_STREAM from 'Mutations/requestStream';
import Breadcrumbs from 'Components/Breadcrumbs';
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
  constructor(props) {
    super(props);

    this.state = {
      source: '',
      resume: false,
      files: [],
      selectedFile: {},
      mimeType: '',
    };
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
    const { location } = this.props;
    const resume = (location.state !== undefined ? location.state.resume : false);

    if (location.state && location.state.autoplay === true) this.playMedia(resume);
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
    const { dispatch } = this.props;

    dispatch(hideVideo());

    this.setState({
      source: '',
    });
  }

  playMedia = (resume) => {
    const { mutate, files, dispatch } = this.props;
    const { selectedFile } = this.state;

    dispatch(showVideo());

    this.setState({ resume });

    mutate({
      variables: { uuid: files[selectedFile.value].uuid },
    })
      .then(({ data }) => {
        fetch(getBaseUrl() + data.createStreamingTicket.metadataPath)
          .then(response => response.json())
          .then((response) => {
            const playableCodecs = response.checkCodecs.filter(canPlayCodec);

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
          .catch(err => err);
      })
      .catch(err => err);
  };

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
        <Breadcrumbs props={this.props} />
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
  connect(),
)(MediaItem);
