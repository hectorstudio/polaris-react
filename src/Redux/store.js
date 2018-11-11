import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './Reducers';

/* eslint-disable-next-line */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export const store = createStore(
  rootReducer(history), composeEnhancers(
    compose(
      applyMiddleware(
        routerMiddleware(history),
      ),
    ),
  ),
);
