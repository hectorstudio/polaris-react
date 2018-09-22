import React from 'react';
import PropTypes from 'prop-types';

import { CardTitle, CardEpisodeCount } from './Styles';

const MediaName = ({ episodes, name }) => (
  <React.Fragment>
    <CardTitle>{name}</CardTitle>
    {episodes.length > 0
      && (
        <CardEpisodeCount>
          {`${episodes.length} Episodes`}
        </CardEpisodeCount>
      )
    }
  </React.Fragment>
);

MediaName.propTypes = {
  name: PropTypes.string.isRequired,
  episodes: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
  })),
};

MediaName.defaultProps = {
  episodes: [],
};

export default MediaName;
