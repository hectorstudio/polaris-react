import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import FetchSeason from 'Queries/fetchSeason';

const Season = ({ match }) => (<FetchSeason uuid={match.params.uuid} />);

Season.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Season;
