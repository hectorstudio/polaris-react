import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import ContentWrap from 'Containers/ContentWrap';
import RenderEpisode from './RenderEpisode';

const Episode = ({ match }) => (
  <ContentWrap>
    <RenderEpisode uuid={match.params.uuid} />
  </ContentWrap>
);

Episode.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Episode;
