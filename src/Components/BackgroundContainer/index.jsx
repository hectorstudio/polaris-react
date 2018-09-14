/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import { getBaseUrl } from 'Helpers';

import AppBackground from './Styles';

class BackgroundContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryType: '',
      uuid: '',
      background: '',
    };
  }

  componentWillMount() {
    const data = window.location.href.replace(window.location.origin, '').split('/').splice(2, 2);

    this.setState({
      queryType: data[0],
      uuid: data[1],
    });
  }

  componentDidMount() {
    const { uuid } = this.state;

    if (uuid) this.delayBackground();
  }

  delayBackground = () => {
    setTimeout(() => {
      this.getBackground();
    }, 500);
  }

  getMoviePoster = () => {
    const { uuid } = this.state;
    const { client } = this.props;

    const bgData = client.readQuery({
      query: gql` query movies($uuid: String!) {
          movies(uuid: $uuid) {
            posterPath
          }
        }
      `,
      variables: {
        uuid,
      },
    });

    this.setState({
      background: bgData.movies[0].posterPath,
    });
  }

  getEpisodePoster = () => {
    const { uuid } = this.state;
    const { client } = this.props;

    const bgData = client.readQuery({
      query: gql` query episode($uuid: String!) {
          episode(uuid: $uuid) {
            season {
              series {
                posterPath
              }
            }
          }
        }
      `,
      variables: {
        uuid,
      },
    });

    this.setState({
      background: bgData.episode.season.series.posterPath,
    });
  }

  getBackground = () => {
    const { queryType } = this.state;

    switch (queryType) {
      case 'movie':
        this.getMoviePoster();
        break;

      case 'episode':
        this.getEpisodePoster();
        break;

      default:
        this.setState({
          background: '',
        });
        break;
    }
  }

  render() {
    const { background } = this.state;
    if (background.length > 0) return <AppBackground bgimg={`${getBaseUrl()}/m/images/tmdb/w342/${background}`} />;
    return null;
  }
}

export default withApollo(BackgroundContainer);
