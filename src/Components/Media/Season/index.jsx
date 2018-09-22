import React from 'react';
import PropTypes from 'prop-types';

import { getBaseUrl } from 'Helpers';

import Empty from 'Components/Media/Card/Empty';
import Media from 'Components/Media/Card';

import {
  MediaFullWrap,
  MediaLeftCol,
  MediaRightCol,
  MediaName,
  MediaRelease,
  SubTitle,
  MediaBackground,
} from '../Styles';
import SeasonsWrap from './Styles';

const Season = (props) => {
  const {
    name,
    posterPath,
    episodes,
    airDate,
  } = props;

  const episodeList = episodes.map((e => <Media size="wide" key={e.uuid} {...e} />));
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

        <SubTitle>Episodes</SubTitle>
        <SeasonsWrap>
          {episodeList}
          <Empty size="wide" />
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
