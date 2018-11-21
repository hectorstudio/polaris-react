import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { CardTitle, CardInfo } from './Styles';


const MediaName = ({
  episodes,
  type,
  year,
  name,
  episodeNumber,
}) => {
  const info = () => {
    let infoValue;

    switch (type) {
      case 'Season':
        infoValue = `${episodes.length} Episodes`;
        break;
      case 'Episode':
        infoValue = `Episode ${episodeNumber}`;
        break;
      case 'Movie':
        infoValue = year;
        break;
      default:
        break;
    }

    return infoValue;
  };

  return (
    <Fragment>
      <CardTitle>{name}</CardTitle>
      <CardInfo>{info()}</CardInfo>
    </Fragment>
  );
};

MediaName.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.string,
  episodeNumber: PropTypes.number,
  episodes: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
  })),
};

MediaName.defaultProps = {
  episodes: [],
  episodeNumber: null,
  year: null,
};

export default MediaName;
