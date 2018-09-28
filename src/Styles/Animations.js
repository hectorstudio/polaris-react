import { keyframes } from 'styled-components';
import {
  fadeIn, fadeOut, rotateIn, headShake, zoomIn,
} from 'react-animations';

const aFadeIn = keyframes`${fadeIn}`;
const aZoomIn = keyframes`${zoomIn}`;
const aFadeOut = keyframes`${fadeOut}`;
const aRotate = keyframes`${rotateIn}`;
const aHeadShake = keyframes`${headShake}`;

export {
  aFadeIn,
  aZoomIn,
  aFadeOut,
  aRotate,
  aHeadShake,
};
