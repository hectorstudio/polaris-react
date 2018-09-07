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
  bottom:0;
  left:-1.5rem;
  background:${props => props.theme.primary};
  width: 6.5rem;
  height: 1rem;
  z-index:6;
  transform: rotate(45deg);
  transition:.2s all;

  ${CardWrap}:hover & { 
    transform: rotate(45deg) translateY(2rem) translateX(2rem);
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
  border-radius:.4rem;
  
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
