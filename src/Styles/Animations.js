import { keyframes } from 'styled-components';
import {
  fadeIn,
  fadeOut,
  rotateIn,
  headShake,
  zoomIn,
} from 'react-animations';

const aFadeIn = keyframes`${fadeIn}`;
const aZoomIn = keyframes`${zoomIn}`;
const aFadeOut = keyframes`${fadeOut}`;
const aRotate = keyframes`${rotateIn}`;
const aHeadShake = keyframes`${headShake}`;

const aFadeInUp = keyframes`
  0% { 
    opacity:0; 
    transform: translateY(1rem);
  }
  100% { 
    opacity:1; 
    transform: translateY(0);
  }
`;

export {
  aFadeIn,
  aZoomIn,
  aFadeOut,
  aRotate,
  aHeadShake,
  aFadeInUp,
};
