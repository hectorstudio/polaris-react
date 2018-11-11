import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import { orderBy } from 'lodash';
import FETCH_MOVIES from 'Queries/fetchMovieList';

import { showModal } from 'Redux/Actions/modalActions';
import { LIBRARY_MODAL } from 'Redux/Constants/modalTypes';

import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

import { LibraryListItem, NoResults } from '../Styles';

class RenderMovieList extends Component {
  toggleModal = () => {
    const { showModal } = this.props;

    showModal(LIBRARY_MODAL, {
      title: 'Add Movie Library',
      type: 'movies',
    });
  };

  render() {
    return (
      <Query
        query={FETCH_MOVIES}
      >

        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return `Error! ${error.message}`;

          if (data.movies.length > 0) {
            return orderBy(data.movies, ['name'], ['asc']).map(m => (
              <LibraryListItem key={m.uuid}>
                <MediaCard {...m} />
              </LibraryListItem>
            ));
          }

          return (
            <NoResults>
              You currently have no Movies.
              <button type="button" onClick={() => this.toggleModal()}>Add Movies</button>
            </NoResults>
          );
        }}

      </Query>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showModal: (type, props) => dispatch(showModal(type, props)),
});

export default connect(null, mapDispatchToProps)(RenderMovieList);
