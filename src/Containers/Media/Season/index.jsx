import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import ContentWrap from 'Containers/ContentWrap';
import RenderSeason from './RenderSeason';

const Season = ({ match }) => (
  <ContentWrap>
    <RenderSeason uuid={match.params.uuid} />
  </ContentWrap>
);

Season.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Season;
