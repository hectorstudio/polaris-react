import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { faTrash } from '@fortawesome/pro-regular-svg-icons';
import { DELETE_LIBRARY } from 'Mutations/manageLibraries';

import { LibraryItemWrap, LibraryItemFilePath, LibraryItemDelete } from './Styles';

class LibraryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
    };
  }

  deleteLibrary = (id) => {
    const { mutate } = this.props;

    mutate({
      variables: { id },
    })
      .then((res) => {
        if (res.error.hasError) {
          this.setState({
            error: true,
            errorMessage: res.error.message
          });
        } else {
          this.setState({
            deleted: true,
          });
        }
      })
      .catch((error) => {
        this.setState({
          error: true,
          errorMessage: error.message,
        });
      });

    console.log(id);
  }

  render() {
    const { filePath, id } = this.props;
    const { deleted } = this.state;

    if (deleted) return <p>Deleted</p>;

    return (
      <LibraryItemWrap>
        <LibraryItemFilePath>{filePath}</LibraryItemFilePath>
        <LibraryItemDelete icon={faTrash} onClick={() => this.deleteLibrary(id)} />
      </LibraryItemWrap>
    );
  }
}

LibraryItem.propTypes = {
  filePath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default LibraryItem = graphql(DELETE_LIBRARY)(LibraryItem);
