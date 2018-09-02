import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import ContentWrap from 'Containers/ContentWrap';
import FetchMovie from 'Queries/fetchMovie';

const Movie = ({ match }) => (
  <ContentWrap>
    <FetchMovie uuid={match.params.uuid} />
  </ContentWrap>
);

Movie.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Movie;
