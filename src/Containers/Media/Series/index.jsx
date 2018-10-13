import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import ContentWrap from 'Containers/ContentWrap';
import RenderSeries from './RenderSeries';

const Series = ({ match }) => (
  <ContentWrap>
    <RenderSeries uuid={match.params.uuid} />
  </ContentWrap>
);

Series.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Series;
