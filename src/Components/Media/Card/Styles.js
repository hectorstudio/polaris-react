import styled from 'styled-components';
import { aFadeIn } from 'Styles/Animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* eslint no-confusing-arrow: ["off"] */
export const CardWrap = styled.article`
  width:100%;
  position:relative;
  animation: ${`.4s ${aFadeIn} alternate`};
  z-index:1;
`;

export const PosterWrap = styled.div`
  display:block;
  position:relative;
  background: #00000025;
  box-shadow:0 15px 25px rgba(0,0,0, .3);
  float:left;
  width:100%;
  overflow:hidden;
`;

export const CardPoster = styled.span`
  width: 100%;
  float: left;
  padding:.2rem;
  background-image: url(${props => props.bgimg});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  padding-top: ${props => props.wide ? props.theme.wideCard.paddingTop : props.theme.card.paddingTop};
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
  margin:1.5rem 0 0;
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

export const CardInfo = styled.span`
  font-size:1.2rem;
  margin-top:.4rem;
  width: 100%;
  float: left;
  text-align: left;
  color: #FFFFFF75;
  font-weight:600;
  cursor:pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 2rem;
  line-height: 1.2rem;
`;

export const Unwatched = styled.span`
  position:absolute;
  top:-2.5rem;
  left:-0.75rem;
  width: 1rem;
  height: 7rem;
  z-index:6;
  transform: rotate(45deg);
  transition:.2s all;
  background: ${props => props.theme.playbar};
  animation: ${`.3s ${aFadeIn} forwards`};
  box-shadow:0 0 15px rgba(0,0,0 .8);
  
  ${PosterWrap}:hover & { 
    transform: translateY(-5rem) translateX(-5rem);
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
  left: .5rem;
  width:calc(100% - 1rem);
  background: #000;
  height:.7rem;
  z-index:6;
  transition:.2s all;
  overflow:hidden;
  border-radius:.5rem;

  &:before {
    content:'';
    position:absolute;
    top:0;
    left:0;
    height:.5rem;
    margin:.1rem;
    border-radius:.2rem 0 0 .2rem;
    width: ${props => props.percent}%;
    background:${props => props.theme.playbar};
  }

  ${PosterWrap}:hover & { 
    transform: translateY(2rem);
  }
`;

export const CardPopup = styled.div`
  content:'';
  position:absolute;
  top:-1.25px;
  left:-1.25px;
  width:calc(100% + 2.5px);
  height:calc(100% + 2.5px);
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

export const ResumeOption = styled.button`
  background:none;
  width:100%;
  border:none;
  text-align: left;
  color: #FFFFFF60;
  line-height: 4rem;
  font-size: 1.6rem;
  transition:.2s all;

  &:hover {
    color:#FFF;
  }
`;
