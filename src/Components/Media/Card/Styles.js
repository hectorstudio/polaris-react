import styled from 'styled-components';
import { aFadeIn } from 'Styles/Animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* eslint no-confusing-arrow: ["off"] */
export const CardWrap = styled.article`
  flex: 1 0 auto;
  width: ${props => props.theme.card[props.size].width};
  max-width: ${props => props.theme.card[props.size].maxWidth};
  min-width: ${props => props.theme.card[props.size].minWidth};
  margin: ${props => props.theme.card[props.size].margin};
  position:relative;
  animation: ${`.4s ${aFadeIn} alternate`};
`;

export const PosterWrap = styled.div`
  overflow:hidden;
  position:relative;
  border-radius: .3rem;
  background: #00000015;
`;

export const CardPoster = styled.span`
  width: 100%;
  float: left;
  background-image: url(${props => props.bgimg});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  padding-top: ${props => props.theme.card[props.size].paddingTop};
  position:relative;
  z-index:1;
  opacity:0;
  animation: ${`.3s ${aFadeIn} forwards`};
  animation-delay: .3s;
  filter: grayscale(0) saturate(125%);
  transition: .5s all;

  ${PosterWrap}:hover & { 
    filter: ${props => props.hover ? 'grayscale(25%) saturate(75%)' : 'grayscale(0) saturate(125%)'};
  }
`;

export const CardTitle = styled.h3`
  width: 100%;
  float: left;
  text-align: left;
  margin:1rem 0 0;
  font-size:1.4rem;
  color: #FFF;
  font-weight:600;
  font-family: ${props => props.theme.fonts.opensans};
  cursor:pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 2rem;
  line-height: 2.2rem;

  &:hover {
    text-decoration:underline;
  }
`;

export const CardEpisodeCount = styled.span`
  float:left;
  width:100%;
  font-size:1.2rem;
  font-weight:600;
  margin-top:.5rem;
  color: #FFFFFF75;
`;

export const Unwatched = styled.span`
  position:absolute;
  top:0;
  right:-3rem;
  background:${props => props.theme.primary};
  width: 6rem;
  height: 2rem;
  z-index:6;
  transition:.2s all;
  box-shadow: 0 0 25px #00000020;
  transform: rotate(45deg);
  animation: ${`.3s ${aFadeIn} forwards`};

  ${PosterWrap}:hover & { 
    transform: translateY(-2rem) translateX(2rem) rotate(45deg);
  }
`;

export const UnwatchedCount = styled.span`
  position:absolute;
  top:.5rem;
  right:.5rem;
  box-shadow: 0 0 25px #00000080;
  background:${props => props.theme.primary};
  padding: .4rem .8rem .3rem;
  border-radius:.2rem;
  font-family: ${props => props.theme.fonts.muli};
  color:#FFF;
  font-size:1.2rem;
  transition:.2s all;
  font-weight:900;

  ${PosterWrap}:hover & { 
    transform: translateY(-5rem) translateX(5rem);
  }
`;

export const PlayState = styled.span`
  position:absolute;
  bottom: .5rem;
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

  ${PosterWrap}:hover & { 
    transform: translateY(2rem);
  }
`;

export const CardPopup = styled.div`
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:calc(100% + 0.5px);
  height:calc(100% + 0.5px);
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
    opacity:.75;
  }

  ${PosterWrap}:hover & {
    opacity:1;
    pointer-events:initial
    cursor:pointer;
  }
`;

export const PopupLink = styled.span`
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

  ${PosterWrap}:hover & { 
    transform: translateY(-50%) translateX(-50%) scale(1);
  }
  
  &:hover {
    border-color: ${props => props.theme.primary};
  }
`;

export const PopupIcon = styled(FontAwesomeIcon)`
  color:#FFF;
  font-size:1.6rem;
  transition:.2s all;
  position:absolute;
  top:50%;
  left:50%;
  transform: translateY(-50%) translateX(-50%);

  ${PopupLink}:hover & {
    color:${props => props.theme.primary};
  }
`;
