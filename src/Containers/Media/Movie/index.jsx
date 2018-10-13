import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import ContentWrap from 'Containers/ContentWrap';
import RenderMovie from './RenderMovie';

const Movie = ({ match }) => (
  <ContentWrap>
    <RenderMovie uuid={match.params.uuid} />
  </ContentWrap>
);

Movie.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Movie;
