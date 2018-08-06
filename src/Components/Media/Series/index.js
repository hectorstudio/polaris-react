import React, { Component } from 'react'

import MediaCard from 'Components/Media/Card'

import { LibraryWrap, LibraryListWrap, LibraryHeading } from './Styles'

class Series extends Component {
    render() { 
        const { name, seasons, overview } = this.props;

        let seasonList = seasons.map(({ name, poster_path, tmdb_id, uuid }, i) => {
            let season = {
                name,
                poster_path,
                tmdb_id,
                uuid
            }

            return (
                <MediaCard type="season" key={i} {...season} />
            );
        });

        return ( 
            <LibraryWrap>
                <LibraryHeading>{name}</LibraryHeading>
                <p>{overview}</p>
                <LibraryListWrap>
                    {seasonList}
                </LibraryListWrap>
            </LibraryWrap>
        )
    }
}
 
export default Series;