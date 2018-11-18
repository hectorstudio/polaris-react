import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import RenderSeries from './RenderSeries';

const Series = ({ match }) => <RenderSeries uuid={match.params.uuid} />;

Series.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Series;
