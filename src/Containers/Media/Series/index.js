import React from 'react';

import FetchSeries from 'Queries/fetchSeries';

const Series = props => (
  <FetchSeries uuid={props.match.params.uuid} />
);

export default Series;
