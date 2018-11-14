import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import { orderBy } from 'lodash';
import FETCH_SERIES_LIST from 'Queries/fetchSeriesList';

import { showModal } from 'Redux/Actions/modalActions';
import { LIBRARY_MODAL } from 'Redux/Constants/modalTypes';

import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

import { NoResults } from 'Containers/Styles';
import { LibraryListItem } from '../Styles';

class RenderSeriesList extends Component {
  toggleModal = () => {
    const { showModal } = this.props;

    showModal(LIBRARY_MODAL, {
      title: 'Add Series Library',
      type: 'series',
    });
  };

  render() {
    return (
      <Query
        query={FETCH_SERIES_LIST}
      >

        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return `Error! ${error.message}`;

          if (data.series.length > 0) {
            return orderBy(data.series, ['name'], ['asc']).map(s => (
              <LibraryListItem key={s.uuid}>
                <MediaCard {...s} />
              </LibraryListItem>
            ));
          }

          return (
            <NoResults>
              You currently have no Series.
              <button type="button" onClick={() => this.toggleModal()}>Add Series</button>
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

export default connect(null, mapDispatchToProps)(RenderSeriesList);
