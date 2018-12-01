import React from 'react';
import PropTypes from 'prop-types';

import { getBaseUrl } from 'Helpers';

import Media from 'Components/Media/Card';
import MediaDescription from 'Components/Media/MediaItem/MediaOverview/MediaDescription';

import {
  MediaFullWrap,
  MediaLeftCol,
  MediaRightCol,
  MediaName,
  SubTitle,
  MediaRelease,
  MediaBackground,
} from '../Styles';
import SeasonsWrap from './Styles';

const Series = (props) => {
  const {
    name,
    posterPath,
    overview,
    firstAirDate,
    children,
  } = props;

  const releaseYear = firstAirDate.split('-')[0];
  
  return (
    <MediaFullWrap>
      <MediaBackground bgimg={`${getBaseUrl()}/m/images/tmdb/w342/${posterPath}`} />
      <MediaLeftCol>
        <Media size="large" {...props} hover={false} />
      </MediaLeftCol>
      <MediaRightCol>
        <MediaName>
          {name}
          <MediaRelease>
            (
            {releaseYear}
            )
          </MediaRelease>
        </MediaName>
        {overview.length > 0 && <MediaDescription overview={overview} />}
        <SubTitle>Seasons</SubTitle>
        <SeasonsWrap>
          {children}
        </SeasonsWrap>
      </MediaRightCol>
    </MediaFullWrap>
  );
};

Series.propTypes = {
  name: PropTypes.string.isRequired,
  seasons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
  })).isRequired,
  overview: PropTypes.string.isRequired,
};

export default Series;
