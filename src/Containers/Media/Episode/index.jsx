import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import RenderEpisode from './RenderEpisode';

const Episode = ({ match }) => <RenderEpisode uuid={match.params.uuid} />;

Episode.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Episode;
