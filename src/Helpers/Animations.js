import { keyframes } from 'styled-components'
import { fadeIn, rotateIn } from 'react-animations'

const aFadeIn = keyframes`${fadeIn}`;
const aRotate = keyframes`${rotateIn}`;

export {
    aFadeIn,
    aRotate
}