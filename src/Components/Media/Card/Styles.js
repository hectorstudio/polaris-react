import styled from 'styled-components';
import { aFadeIn } from 'Styles/Animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CardWrap = styled.article`
  flex: 1 0 auto;
  width:14rem;
  max-width:20rem;
  margin:0 .5rem 1rem;
  cursor:pointer;
  position:relative;
  background: #1e1e2e;
  border-radius:.5rem;
  overflow:hidden;
  animation: ${`.4s ${aFadeIn} alternate`};
`;

export const CardPoster = styled.span`
  width: 100%;
  float: left;
  background-image: url(${props => props.bgimg});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  padding-top: calc(513 / 342 * 100%);
  position:relative;
  z-index:1;
  position:relative;
  opacity:0;
  animation: ${`.3s ${aFadeIn} forwards`};
  animation-delay: .3s;
  border-radius:.5rem;
  filter: grayscale(0) saturate(125%);
  transition: .5s all;

  ${CardWrap}:hover & { 
    filter: grayscale(25%) saturate(75%);
  }
`;

export const CardTitle = styled.h3`
  width: 100%;
  float: left;
  text-align: center;
  margin:1rem 0 0;
  font-size:1.2rem;
  font-weight:800;
  color: #FFF;
`;

export const Unwatched = styled.span`
  position:absolute;
  bottom:0rem;
  left:-3.5rem;
  background:${props => props.theme.primary};
  width: 6rem;
  height: 2rem;
  z-index:6;
  transition:.2s all;
  box-shadow: 0 0 25px #00000080;
  transform: rotate(45deg);
  animation: ${`.3s ${aFadeIn} forwards`};

  ${CardWrap}:hover & { 
    transform: translateY(2rem) translateX(-2rem);
  }
`;

export const PlayState = styled.span`
  position:absolute;
  top: .5rem;
  left:.5rem;
  width:calc(100% - 1rem);
  background: rgba(0,0,0,.5);
  border-radius: .5rem;
  height:.7rem;
  z-index:6;
  transition:.2s all;
  overflow:hidden;
  border:1px solid #000;

  &:before {
    content:'';
    position:absolute;
    top:0;
    left:0;
    height:.5rem;
    width: ${props => props.percent}%;
    background:${props => props.theme.primary};
  }

  ${CardWrap}:hover & { 
    transform: translateY(-2rem);
  }
`;

export const CardPopup = styled.div`
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index: 1;
  opacity:0;
  pointer-events:none;
  transition:.2s opacity;
  overflow:hidden;
  
  &:before {
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,0.9) 100%);
    opacity:1;
  }

  ${CardWrap}:hover & {
    opacity:1;
    pointer-events:initial
  }
`;

export const AutoPlay = styled.span`
  position:absolute;
  border-radius:50%;
  top:50%;
  left:50%;
  transform: translateY(-50%) translateX(-50%) scale(0.5);
  display:block;
  width:5rem;
  height:5rem;
  z-index:10;
  transition:.2s all;
  background:#00000080;
  border:2px solid #FFF; 

  ${CardWrap}:hover & { 
    transform: translateY(-50%) translateX(-50%) scale(1);
  }
  
  &:hover {
    border-color: ${props => props.theme.primary};
  }
`;

export const AutoPlayIcon = styled(FontAwesomeIcon)`
  color:#FFF;
  font-size:1.6rem;
  transition:.2s all;
  position:absolute;
  top:50%;
  left:50%;
  transform: translateY(-50%) translateX(-50%);

  ${AutoPlay}:hover & {
    color:${props => props.theme.primary};
  }
`;
