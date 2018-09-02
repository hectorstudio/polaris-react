import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import ContentWrap from 'Containers/ContentWrap';
import FetchSeries from 'Queries/fetchSeries';

const Series = ({ match }) => (
  <ContentWrap>
    <FetchSeries uuid={match.params.uuid} />
  </ContentWrap>
);

Series.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Series;
