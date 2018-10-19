import React from 'react';
import PropTypes from 'prop-types';

import { CardTitle, CardInfo } from './Styles';

const MediaName = ({ episodes, name, info }) => (
  <React.Fragment>
    <CardTitle>{name}</CardTitle>

    {episodes.length > 0 ? (
      <CardInfo>{`${episodes.length} Episodes`}</CardInfo>
    ) : (
      <CardInfo>{info}</CardInfo>
    )}
  </React.Fragment>
);


MediaName.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string,
  episodes: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
  })),
};

MediaName.defaultProps = {
  episodes: [],
  info: '',
};

export default MediaName;
