import React, { Component } from 'react';
import { compose } from 'lodash/fp';
import { graphql } from 'react-apollo';
import { withAlert } from 'react-alert';
import PropTypes from 'prop-types';

import REFRESH_METADATA from 'Mutations/refreshMetadata';

class RefreshMetadata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Refresh Metadata',
      disabled: false,
    };
  }

  refreshMetadata = () => {
    const { uuid, mutate, alert } = this.props;

    mutate({
      variables: { uuid },
    })
      .then(() => {
        this.setState({
          label: 'Refreshing',
          disabled: true,
        });

        alert.success('Refreshing Metadata, this may take a while');
      })
      .catch(err => err);
  };

  render() {
    const { label, disabled } = this.state;

    return (
      <button type="button" disabled={disabled} onClick={() => this.refreshMetadata()}>
        { label }
      </button>
    );
  }
}

RefreshMetadata.propTypes = {
  uuid: PropTypes.string.isRequired,
  mutate: PropTypes.func.isRequired,
  alert: PropTypes.shape({
    show: PropTypes.func.isRequired,
  }).isRequired,
};

export default compose(
  withAlert,
  graphql(REFRESH_METADATA),
)(RefreshMetadata);
