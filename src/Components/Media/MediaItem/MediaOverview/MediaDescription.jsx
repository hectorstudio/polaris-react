import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MediaOverview } from '../../Styles';

class MediaDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    const { overview } = this.props;

    if (overview.length > 255) this.setState({ visible: false });
  }

  toggleOverview = () => {
    const { visible } = this.state;

    this.setState({
      visible: !visible,
    });
  }

  readMore = () => {
    const { visible } = this.state;

    return (
      <span tabIndex={0} role="button" onClick={() => {}} onKeyPress={this.toggleOverview}>
        {(visible ? 'Read Less' : 'Read More')}
      </span>
    );
  }

  description = () => {
    const { overview } = this.props;
    const { visible } = this.state;

    if (overview.length > 255) {
      return (
        <MediaOverview>
          {(visible ? overview : overview.substring(0, 120))}
          ...
          {this.readMore()}
        </MediaOverview>
      );
    }

    return <MediaOverview>{overview}</MediaOverview>;
  }

  render() {
    return this.description();
  }
}

MediaDescription.propTypes = {
  overview: PropTypes.string.isRequired,
};

export default MediaDescription;
