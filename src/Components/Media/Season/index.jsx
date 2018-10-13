import React from 'react';
import PropTypes from 'prop-types';

import { getBaseUrl } from 'Helpers';

import Media from 'Components/Media/Card';

import {
  MediaFullWrap,
  MediaLeftCol,
  MediaRightCol,
  MediaName,
  MediaOverview,
  MediaRelease,
  SubTitle,
  MediaBackground,
} from '../Styles';
import SeasonsWrap from './Styles';

const Season = (props) => {
  const {
    name,
    posterPath,
    airDate,
    overview,
    children,
  } = props;

  const releaseYear = airDate.split('-')[0];

  return (
    <MediaFullWrap>
      <MediaBackground bgimg={`${getBaseUrl()}/m/images/tmdb/w342/${posterPath}`} />
      <MediaLeftCol>
        <Media size="large" {...props} hover={false} />
      </MediaLeftCol>
      <MediaRightCol>
        <MediaName>
          { name }
          <MediaRelease>
            (
            {(releaseYear)}
            )
          </MediaRelease>
        </MediaName>
        <MediaOverview>{overview}</MediaOverview>
        <SubTitle>Episodes</SubTitle>
        <SeasonsWrap>
          { children }
        </SeasonsWrap>
      </MediaRightCol>
    </MediaFullWrap>
  );
};

Season.propTypes = {
  name: PropTypes.string.isRequired,
  episodes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default Season;
