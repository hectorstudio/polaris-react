import React from 'react';
import PropTypes from 'prop-types';
import MediaCard from 'Components/Media/Card';

import { LibraryWrap, LibraryListWrap, LibraryHeading } from './Styles';

const Series = ({ name, seasons, overview }) => {
  const seasonList = seasons.map((s => <MediaCard key={s.uuid} {...s} />));

  return (
    <LibraryWrap>
      <LibraryHeading>{name}</LibraryHeading>
      <p>{overview}</p>
      <LibraryListWrap>
        {seasonList}
      </LibraryListWrap>
    </LibraryWrap>
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
