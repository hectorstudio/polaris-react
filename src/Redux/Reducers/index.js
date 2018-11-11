import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import modal from './modalReducer';

export default history => combineReducers({
  router: connectRouter(history),
  modal,
});
