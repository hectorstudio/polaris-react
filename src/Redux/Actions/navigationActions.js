import {
  SHOW_NAV,
  HIDE_NAV,
} from '../Constants/actionTypes';

export const showNavigation = () => ({
  type: SHOW_NAV,
});

export const hideNavigation = () => ({
  type: HIDE_NAV,
});
