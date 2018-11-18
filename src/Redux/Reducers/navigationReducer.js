import { SHOW_NAV, HIDE_NAV } from '../Constants/actionTypes';

const initialState = {
  hidden: false,
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NAV:
      return {
        hidden: false,
      };
    case HIDE_NAV:
      return {
        hidden: true,
      };
    default:
      return state;
  }
};

export default navigation;
