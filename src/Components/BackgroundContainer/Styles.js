import styled, { keyframes } from 'styled-components';

const fadeInLow = keyframes`
  from { opacity: 0 }
  to { opacity: .1 }
`;

const AppBackground = styled.span`
  background: url(${props => props.bgimg}) no-repeat center;
  background-size:cover;
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  z-index:1;
  filter: blur(25px);
  opacity:0;
  animation: ${`.3s ${fadeInLow} forwards`};
  animation-delay: .3s;
`;

export default AppBackground;
