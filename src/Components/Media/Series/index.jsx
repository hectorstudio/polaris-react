import React from 'react';
import PropTypes from 'prop-types';
import MediaCard from 'Components/Media/Card';

import { LibraryWrap, LibraryListWrap, LibraryHeading } from './Styles';

const Series = ({ seriesName, seasons, overview }) => {
  const seasonList = seasons.map(({
    seasonName, posterPath, id, uuid, unwatchedCount,
  }) => {
    const season = {
      name: seasonName,
      posterPath,
      id,
      uuid,
      unwatchedCount,
    };

    return (
      <MediaCard type="season" key={uuid} {...season} />
    );
  });

  return (
    <LibraryWrap>
      <LibraryHeading>{seriesName}</LibraryHeading>
      <p>{overview}</p>
      <LibraryListWrap>
        {seasonList}
      </LibraryListWrap>
    </LibraryWrap>
  );
};

Series.propTypes = {
  seriesName: PropTypes.string.isRequired,
  seasons: PropTypes.arrayOf(PropTypes.shape({
    seasonName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    uuid: PropTypes.string.isRequired,
  })).isRequired,
  overview: PropTypes.string.isRequired,
};

export default Series;
