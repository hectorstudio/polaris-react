import React, { Component } from 'react'

import { LibraryWrap, LibraryListWrap, LibraryHeading } from './Styles'

import MediaCard from 'Components/Media/Card'

class Series extends Component {
    render() {
        const { name, episodes, poster_path } = this.props;

        let episodeList = episodes.map(({ name, tmdb_id, uuid }, i) => {
            let episode = {
                name,
                poster_path,
                tmdb_id,
                uuid
            }

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
        )
    }
}

export default Series;