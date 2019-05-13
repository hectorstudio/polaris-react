import styled, { keyframes } from 'styled-components';
import { media } from 'Styles/Utils';
import { NavLink } from 'react-router-dom';

const fadeInLow = keyframes`
  from { opacity: 0 }
  to { opacity: .05 }
`;

export const MediaFullWrap = styled.section`
  float:left;
  width:100%;
  padding:3rem 2.5rem;
  position:relative;
  display:flex;
  z-index:4;
  flex-wrap: wrap;

  &:after {
    content:'';
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100%;
    opacity:.3;
    z-index: -1;
    pointer-events: none;
    background:#2e2f41;
  }

  ${media.desktop`
    padding:5rem 3.5rem;
  `}

  ${media.large`
    padding:5rem;
  `}
`;

export const MediaLeftCol = styled.div`
  float:left;
  width:25%;
  min-width: 20rem;
  max-width: 25rem;
  margin-right: 2.5rem;
  display:none;

  ${media.tablet`
    display:block;
  `}
`;

export const MediaRightCol = styled.div`
  float:left;
  flex: 1;
  position:relative;

  ${media.tablet`
    padding-left: 2.5rem;
    display:block;
  `}
`;

export const MediaName = styled.h1`
  font-size:1.8rem;
  color:#FFF;
  float:left;
  width:100%;
  margin:0 0 1.5rem;
  line-height:2.6rem;
  padding-right: 5rem;

  ${media.mobile`
    margin:0 0 2rem;
  `}

  ${media.tablet`
    font-size:2.2rem;
  `}

  ${media.large`
    font-size:3rem;
  `}
`;

export const MediaNameLink = styled(NavLink)`
  font-size:1.8rem;
  color:#FFF;
  float:left;
  width:100%;
  margin:0 0 1.5rem;
  line-height:2.6rem;
  padding-right: 5rem;
  font-weight:600;

  &:hover {
    text-decoration:underline;
  }

  ${media.mobile`
    margin:0 0 2rem;
  `}

  ${media.tablet`
    font-size:2.2rem;
  `}

  ${media.large`
    font-size:3rem;
  `}
`;

export const SeasonNumber = styled.h3`
  font-size:1.4rem;
  color:rgba(255,255,255, .7);
  float:left;
  width:100%;
  margin:-1rem 0 1rem;
  line-height:2rem;
  font-weight:600;

  span {
    float:none !important;
    width:auto !important;
    margin-left: 1rem !important;
  }

  ${media.tablet`
    margin:-1rem 0 2rem;
  `}

  ${media.large`
    font-size:1.6rem;
    margin:0 0 2rem;
  `}
`;

export const SubTitle = styled.h3`
  font-size:1.6rem;
  color:#FFF;
  float:left;
  width:100%;
  margin: 0 0 2rem;
  padding: 2rem .5rem 0;
  border-top: 1px solid rgba(255,255,255, .05);
`;

export const MediaRelease = styled.span`
  font-size:1.2rem;
  color:${props => props.theme.secondary};
  opacity:.5;
  font-weight:400;
  float:left;
  width:100%;

  ${media.large`
    font-size:1.6rem;
    margin-left:1rem;
    float:none;
    width:auto;
  `}
`;

export const MediaOverview = styled.p`
  font-size:1.4rem;
  line-height:2.6rem;
  color:rgba(255,255,255, .5);
  font-weight:400;
  float:left;
  width:100%;
  margin:0 0 2rem;

  span {
    color: ${props => props.theme.primary};
    margin-left:1rem;
    cursor:pointer;

    &:hover {
      text-decoration:underline;
    }
  }
`;

export const MediaBackground = styled.span`
  background: url(${props => props.bgimg}) no-repeat center;
  background-size:cover;
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  z-index: -1;
  filter: blur(25px);
  opacity:0;
  animation: ${`.3s ${fadeInLow} forwards`};
  animation-delay: .3s;
  display:none;
  pointer-events: none;

  ${media.mobile`
    display:block;
  `}
`;
