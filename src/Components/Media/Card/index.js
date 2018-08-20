import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Media from './Media';

class MediaCard extends Component {
  render() {
    return (
      <Media type={this.props.type} {...this.props} />
    );
  }
}

export default withRouter(MediaCard);
