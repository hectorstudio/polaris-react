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

class RenderRecentMovies extends Component {
  toggleModal = () => {
    const { showModal } = this.props;

    showModal(LIBRARY_MODAL, {
      title: 'Add Movies folder',
      type: 'movies',
    });
  };

  render() {
    return (
      <Query
        query={RECENTLY_ADDED}
      >

        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return `Error! ${error.message}`;
          const movies = data.recentlyAdded.filter(m => m.type === 'Movie');

          if (movies.length === 0) {
            return (
              <NoResults alignLeft>
                You currently have no Movies.
                <button type="button" onClick={() => this.toggleModal()}>Add folder to library</button>
              </NoResults>
            );
          }

          const RecentlyAddedMovies = movies.map(ra => (
            <MediaCardWrap key={ra.uuid}>
              <MediaCard showText {...ra} />
            </MediaCardWrap>
          ));

          return (
            <Carousel>
              {RecentlyAddedMovies}
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

export default connect(null, mapDispatchToProps)(RenderRecentMovies);
