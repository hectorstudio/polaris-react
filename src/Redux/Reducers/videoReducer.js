import { LOCATION_CHANGE } from 'connected-react-router';
import { VIDEO_OPEN, VIDEO_CLOSE } from '../Constants/videoTypes';

const initialState = {
  playing: false,
};

const video = (state = initialState, action) => {
  switch (action.type) {
    case VIDEO_OPEN:
      return {
        ...state,
        playing: true,
      };
    case VIDEO_CLOSE:
      return initialState;
    case LOCATION_CHANGE:
      return initialState;
    default:
      return state;
  }
};

export default video;
