import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createResponsiveStateReducer } from 'redux-responsive';

import modal from './modalReducer';
import navigation from './navigationReducer';
import historyLocation from './historyReducer';

const responsiveBreakpoints = {
  extraSmall: 500,
  small: 768,
  medium: 1023,
  large: 1280,
};

export default history => combineReducers({
  router: connectRouter(history),
  browser: createResponsiveStateReducer(responsiveBreakpoints),
  modal,
  navigation,
  historyLocation
});
