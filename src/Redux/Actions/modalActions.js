import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../Constants/actionTypes';

export const showModal = (type, props) => ({
  type: SHOW_MODAL,
  payload: {
    type,
    props,
  },
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
