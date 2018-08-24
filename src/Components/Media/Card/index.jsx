import React from 'react';
import { withRouter } from 'react-router-dom';

import Media from './Media';

const MediaCard = props => <Media {...props} />;

export default withRouter(MediaCard);
