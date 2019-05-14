import {
  VIDEO_OPEN,
  VIDEO_CLOSE,
} from '../Constants/videoTypes';

export const showVideo = () => ({
  type: VIDEO_OPEN,
});

export const hideVideo = () => ({
  type: VIDEO_CLOSE,
});
