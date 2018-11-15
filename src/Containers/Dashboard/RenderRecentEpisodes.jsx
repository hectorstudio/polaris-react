import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';

import RECENTLY_ADDED from 'Queries/fetchRecentlyAdded';

import { showModal } from 'Redux/Actions/modalActions';
import { LIBRARY_MODAL } from 'Redux/Constants/modalTypes';

import Carousel from 'Components/Carousel';
import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

import { NoResults } from 'Containers/Styles';
import { MediaCardWrap } from './Styles';

class RenderRecentEpisodes extends Component {
  toggleModal = () => {
    const { showModal } = this.props;

    showModal(LIBRARY_MODAL, {
      title: 'Add TV Series folder',
      type: 'series',
    });
  };

  render() {
    return (
      <Query
        query={RECENTLY_ADDED}
        no-cache
      >

        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return `Error! ${error.message}`;

          const episodes = data.recentlyAdded.filter(m => m.type === 'Episode');

          if (episodes.length === 0) {
            return (
              <NoResults alignLeft>
                You currently have no TV Series.
                <button type="button" onClick={() => this.toggleModal()}>Add folder to library</button>
              </NoResults>
            );
          }

          const RecentlyAddedEpisodes = episodes.map((ra) => {
            const { posterPath } = ra.season.series;

            return (
              <MediaCardWrap key={ra.uuid}>
                <MediaCard showText {...ra} posterPath={posterPath} />
              </MediaCardWrap>
            );
          });

          return (
            <Carousel>
              {RecentlyAddedEpisodes}
            </Carousel>
          );
        }}

      </Query>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showModal: (type, props) => dispatch(showModal(type, props)),
});

export default connect(null, mapDispatchToProps)(RenderRecentEpisodes);
