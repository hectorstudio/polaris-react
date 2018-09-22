import styled, { keyframes } from 'styled-components';

const fadeInLow = keyframes`
  from { opacity: 0 }
  to { opacity: .2 }
`;

export const MediaFullWrap = styled.section`
  float:left;
  width:100%;
  padding:5rem;
  position:relative;
  display:flex;

  &:after {
    content:'';
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:${props => props.theme.background};
    opacity:.2;
    z-index: -1;
  }
`;

export const MediaLeftCol = styled.div`
  float:left;
  width:25%;
  min-width: 20rem;
  max-width: 25rem;
  margin-right: 2.5rem;
`;

export const MediaRightCol = styled.div`
  float:left;
  padding-left: 2.5rem;
  flex: 1;
`;

export const MediaName = styled.h1`
  font-size:3rem;
  color:#FFF;
  float:left;
  width:100%;
  margin:0 0 2rem;
`;

export const SubTitle = styled.h3`
  font-size:1.6rem;
  color:#FFF;
  float:left;
  width:100%;
  margin: 2rem 0;
  padding: 0 0 2rem;
  border-bottom: 1px solid #ffffff25;
`;

export const MediaRelease = styled.span`
  font-size:1.6rem;
  color:${props => props.theme.secondary};
  opacity:.5;
  font-weight:400;
  margin-left:1rem;
`;

export const MediaOverview = styled.p`
  font-size:1.4rem;
  line-height:2.6rem;
  color:${props => props.theme.secondary};
  font-weight:400;
  float:left;
  width:100%;
  margin:0 0 2rem;
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
`;
