import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import RenderSeason from './RenderSeason';

const Season = ({ match }) => <RenderSeason uuid={match.params.uuid} />;

Season.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Season;
