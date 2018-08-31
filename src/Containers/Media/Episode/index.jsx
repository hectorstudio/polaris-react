import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import FetchEpisode from 'Queries/fetchEpisode';

const Episode = ({ match }) => (<FetchEpisode uuid={match.params.uuid} />);

Episode.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Episode;
