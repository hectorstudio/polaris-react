import React from 'react';
import PropTypes from 'prop-types';
import { convertToMinutes } from 'Helpers';

import MediaDescription from './MediaDescription';
import { MediaInfoWrap, MediaDetails } from '../Styles';
import { MediaName, MediaRelease } from '../../Styles';

const MediaInfo = (props) => {
  const {
    name,
    year,
    airDate,
    playState,
    selectedFile,
    overview,
  } = props;

  const renderPlayState = () => {
    let renderedState;

    if (playState.finished) {
      renderedState = 'Watched';
    } else if (playState.playtime < 60 && playState.playtime > 0) {
      renderedState = '< 1 minute watched';
    } else if (!playState.finished && playState.playtime > 0) {
      renderedState = `${convertToMinutes(playState.playtime)} watched`;
    } else {
      renderedState = 'Unwatched';
    }

    return renderedState;
  };

  const renderResolution = () => {
    const stream = selectedFile.streams.find(f => f.resolution);
    if (!stream) return 'Unknown Resolution';

    const { resolution } = stream;

    return resolution;
  };

  const renderTotalD = () => {
    if (!selectedFile.totalDuration > 0) return 'Unknown Length';

    return convertToMinutes(selectedFile.totalDuration);
  };

  const releaseDate = `(${(year || airDate)})`;

  return (
    <MediaInfoWrap>
      <MediaName>
        {name}
        <MediaRelease>
          {releaseDate}
        </MediaRelease>
      </MediaName>

      <MediaDetails unwatched={playState.finished}>
        <li>{renderTotalD()}</li>
        <li>{renderPlayState()}</li>
        <li>{renderResolution()}</li>
      </MediaDetails>
      <MediaDescription overview={overview} />
    </MediaInfoWrap>
  );
};

const requiredPropsCheck = (props, propName, componentName) => {
  const { year, airDate } = props;
  if (!year && !airDate) {
    return new Error(`One of 'year' or 'airDate' is required by '${componentName}' component.`);
  }

  return null;
};

MediaInfo.propTypes = {
  name: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  playState: PropTypes.shape({
    finished: PropTypes.bool,
    playtime: PropTypes.number,
  }).isRequired,
  selectedFile: PropTypes.shape({
    totalDuration: PropTypes.number,
  }).isRequired,
  year: requiredPropsCheck,
  airDate: requiredPropsCheck,
};

MediaInfo.defaultProps = {
  year: null,
  airDate: null,
};

export default MediaInfo;
