import React from 'react';
import PropTypes from 'prop-types';
import MediaCard from 'Components/Media/Card';
import { LibraryWrap, LibraryListWrap, LibraryHeading } from './Styles';

const Season = ({ seasonName, episodes, posterPath }) => {
  const episodeList = episodes.map(({ name, id, uuid }) => {
    const episode = {
      name,
      posterPath,
      id,
      uuid,
    };

    return (
      <MediaCard type="episode" key={uuid} {...episode} />
    );
  });

  return (
    <div>
      <LibraryWrap>
        <LibraryHeading>{seasonName}</LibraryHeading>

        <LibraryListWrap>
          {episodeList}
        </LibraryListWrap>
      </LibraryWrap>
    </div>
  );
};

Season.propTypes = {
  seasonName: PropTypes.string.isRequired,
  episodes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    uuid: PropTypes.string.isRequired,
  })).isRequired,
  posterPath: PropTypes.string.isRequired,
};

export default Season;
