import React from 'react';
import PropTypes from 'prop-types';
import MediaCard from 'Components/Media/Card';
import { LibraryWrap, LibraryListWrap, LibraryHeading } from './Styles';

const Season = ({ name, episodes }) => {
  const episodeList = episodes.map((e => <MediaCard key={e.uuid} {...e} />));

  return (
    <div>
      <LibraryWrap>
        <LibraryHeading>{name}</LibraryHeading>

        <LibraryListWrap>
          {episodeList}
        </LibraryListWrap>
      </LibraryWrap>
    </div>
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
