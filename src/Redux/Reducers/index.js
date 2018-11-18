import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import modal from './modalReducer';
import navigation from './navigationReducer';

export default history => combineReducers({
  router: connectRouter(history),
  modal,
  navigation,
});
