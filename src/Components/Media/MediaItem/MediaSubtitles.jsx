import React from 'react';
import PropTypes from 'prop-types';

import { streamFilter } from 'Helpers';
import { MediaInfoSubhead, MediaInfo, MediaInfoList } from './Styles';

const MediaSubtitles = ({ selectedFile }) => {
  const subtitlesArr = streamFilter(selectedFile, 'subtitle', 'language');
  if (subtitlesArr.length === 0) return false;

  const renderSubtitles = subtitlesArr.map(l => <li key={l}>{l}</li>);

  return (
    <MediaInfo>
      <MediaInfoSubhead>Subtitles:</MediaInfoSubhead>
      <MediaInfoList>{renderSubtitles}</MediaInfoList>
    </MediaInfo>
  );
};

MediaSubtitles.propTypes = {
  selectedFile: PropTypes.shape({
    streams: PropTypes.array.isRequired,
  }).isRequired,
};

export default MediaSubtitles;
