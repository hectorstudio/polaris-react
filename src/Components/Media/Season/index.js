import React, { Component } from 'react';

import MediaCard from 'Components/Media/Card';
import { LibraryWrap, LibraryListWrap, LibraryHeading } from './Styles';


class Series extends Component {
  render() {
    const { name, episodes, poster_path } = this.props;

    const episodeList = episodes.map(({ name, tmdb_id, uuid }, i) => {
      const episode = {
        name,
        poster_path,
        tmdb_id,
        uuid,
      };

      return (
        <MediaCard type="episode" key={i} {...episode} />
      );
    });

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
  }
}

export default Series;
