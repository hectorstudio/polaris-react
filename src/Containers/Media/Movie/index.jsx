import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import FetchMovie from 'Queries/fetchMovie';

const Movie = ({ match }) => (<FetchMovie uuid={match.params.uuid} />);

Movie.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Movie;
