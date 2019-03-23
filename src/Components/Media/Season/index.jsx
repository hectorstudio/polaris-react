import React from 'react';
import PropTypes from 'prop-types';

import { getBaseUrl, generateMediaUrl } from 'Helpers';

import MediaListHeader from '../MediaListHeader';
import Media from 'Components/Media/Card';
import MediaDescription from 'Components/Media/MediaItem/MediaOverview/MediaDescription';

import {
  MediaFullWrap,
  MediaLeftCol,
  MediaRightCol,
  MediaNameLink,
  MediaRelease,
  SeasonNumber,
  SubTitle,
  MediaBackground,
} from '../Styles';
import EpisodesWrap from './Styles';

const Season = (props) => {
  const {
    name,
    posterPath,
    airDate,
    overview,
    children,
    episodes,
    series,
  } = props;

  const releaseYear = airDate.split('-')[0];

  return (
    <MediaFullWrap>
      <MediaBackground bgimg={`${getBaseUrl()}/m/images/tmdb/w342/${posterPath}`} />
      <MediaLeftCol>
        <Media size="large" {...props} hover={false} />
      </MediaLeftCol>
      <MediaRightCol>
        <MediaListHeader data={episodes} type='series' />
        <MediaNameLink to={generateMediaUrl('series', series.uuid)}>
          { series.name }
        </MediaNameLink>
        <SeasonNumber>
          { name }
          <MediaRelease>
            (
            {(releaseYear)}
            )
          </MediaRelease>
        </SeasonNumber>
        {overview.length > 0 && <MediaDescription overview={overview} />}
        <SubTitle>
          Episodes
        </SubTitle>
        
        <EpisodesWrap>
          { children }
        </EpisodesWrap>
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
