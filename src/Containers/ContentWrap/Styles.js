import styled from 'styled-components';
import { aFadeIn } from 'Styles/Animations';
import { media } from 'Styles/Utils';

const Content = styled.div`
  flex: 1 1 auto;
  max-width:calc(100% + ${props => props.theme.layout.sidebar});
  height:100vh;
  float:left;
  animation: ${`.5s ${aFadeIn} alternate`};
  margin:0 0 0 ${props => (!props.navHidden ? `${props.theme.layout.sidebar}` : '0')};
  width: 100%;
  transition:.2s all;

  ${media.desktop`
    width: calc(100% - ${props => (!props.navHidden ? `${props.theme.layout.sidebar}` : '0')});
  `}
`;

export default Content;
