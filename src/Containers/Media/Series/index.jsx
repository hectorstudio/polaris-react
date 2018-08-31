import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import FetchSeries from 'Queries/fetchSeries';

const Series = ({ match }) => (<FetchSeries uuid={match.params.uuid} />);

Series.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Series;
