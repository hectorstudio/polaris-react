import { keyframes } from 'styled-components';
import {
  fadeIn, fadeOut, rotateIn, headShake, fadeInDown,
} from 'react-animations';

const aFadeIn = keyframes`${fadeIn}`;
const aFadeInDown = keyframes`${fadeInDown}`;
const aFadeOut = keyframes`${fadeOut}`;
const aRotate = keyframes`${rotateIn}`;
const aHeadShake = keyframes`${headShake}`;

export {
  aFadeIn,
  aFadeInDown,
  aFadeOut,
  aRotate,
  aHeadShake,
};
