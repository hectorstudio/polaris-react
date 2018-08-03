import { keyframes } from 'styled-components'
import { fadeIn, fadeOut, rotateIn, headShake } from 'react-animations'

const aFadeIn = keyframes`${fadeIn}`;
const aFadeOut = keyframes`${fadeOut}`;
const aRotate = keyframes`${rotateIn}`;
const aHeadShake = keyframes`${headShake}`;

export {
    aFadeIn,
    aFadeOut,
    aRotate,
    aHeadShake
}