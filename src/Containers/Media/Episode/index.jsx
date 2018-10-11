import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import ContentWrap from 'Containers/ContentWrap';
import { FetchEpisode } from 'Queries/fetchEpisode';

const Episode = ({ match }) => (
  <ContentWrap>
    <FetchEpisode uuid={match.params.uuid} />
  </ContentWrap>
);

Episode.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Episode;
