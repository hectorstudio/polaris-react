import React, { Component } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

class BackgroundContainer extends Component {
  testCache = () => {
    const data = window.location.href.replace(window.location.origin, '').split('/').splice(2, 2);
    const QueryName = (data[0] === 'movie' ? 'movies' : data[0]);

    const query = gql`
      query ${QueryName}($uuid: String!) {
        ${QueryName}(uuid: $uuid) {
          posterPath
        }
      }
    `;

    const bgData = this.props.client.readQuery({
      query,
      variables: {
        uuid: data[1],
      },
    });

    console.log(bgData);
  }

  render() {
    return (<button onClick={this.testCache}>Test</button>);
  }
}

export default withApollo(BackgroundContainer);
