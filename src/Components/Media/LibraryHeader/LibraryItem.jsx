import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { AlertInline } from 'Components/Alerts';
import { FETCH_LIBRARIES } from 'Queries/fetchLibraries';
import { DELETE_LIBRARY } from 'Mutations/manageLibraries';

import { LibraryItemWrap, LibraryItemFilePath, LibraryItemDelete } from './Styles';

class LibraryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      errorMessage: '',
    };
  }

  deleteLibrary = (id) => {
    const { mutate } = this.props;

    mutate({
      variables: { id },
      refetchQueries: [{ query: FETCH_LIBRARIES }],
    })
      .then((res) => {
        const { error } = res.data.deleteLibrary;

        if (error) {
          this.setState({
            error: true,
            errorMessage: error.message,
          });
        }
      })
      .catch((error) => {
        this.setState({
          error: true,
          errorMessage: error.message,
        });
      });
  }

  render() {
    const { filePath, id } = this.props;
    const { error, errorMessage } = this.state;

    return (
      <LibraryItemWrap>
        { error && <AlertInline type="error">{errorMessage}</AlertInline> }
        <LibraryItemFilePath>{filePath}</LibraryItemFilePath>
        <LibraryItemDelete icon={faTrashAlt} onClick={() => this.deleteLibrary(id)} />
      </LibraryItemWrap>
    );
  }
}

LibraryItem.propTypes = {
  filePath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  mutate: PropTypes.func.isRequired,
};

export default LibraryItem = graphql(DELETE_LIBRARY)(LibraryItem);
