import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import ContentWrap from 'Containers/ContentWrap';
import FetchSeason from 'Queries/fetchSeason';

const Season = ({ match }) => (
  <ContentWrap>
    <FetchSeason uuid={match.params.uuid} />
  </ContentWrap>
);

Season.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Season;
