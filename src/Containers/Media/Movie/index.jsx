import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import RenderMovie from './RenderMovie';

const Movie = ({ match }) => <RenderMovie uuid={match.params.uuid} />;

Movie.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Movie;
