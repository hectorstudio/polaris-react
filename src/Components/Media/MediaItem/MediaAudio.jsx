import React from 'react';
import PropTypes from 'prop-types';

import { streamFilter } from 'Helpers';
import { MediaInfoSubhead, MediaInfo, MediaInfoList } from './Styles';

const MediaAudio = ({ selectedFile }) => {
  const audioArr = streamFilter(selectedFile, 'audio', 'language');
  if (audioArr.length === 0) return false;

  const renderAudio = audioArr.map(a => <li key={a}>{a}</li>);

  return (
    <MediaInfo>
      <MediaInfoSubhead>Audio Tracks:</MediaInfoSubhead>
      <MediaInfoList>{renderAudio}</MediaInfoList>
    </MediaInfo>
  );
};

MediaAudio.propTypes = {
  selectedFile: PropTypes.shape({
    streams: PropTypes.array.isRequired,
  }).isRequired,
};

export default MediaAudio;
