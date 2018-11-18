import styled from 'styled-components';
import { aFadeIn } from 'Styles/Animations';

const Content = styled.div`
    flex: 1 1 auto;
    max-width:100%;
    height:100vh;
    float:left;
    animation: ${`.5s ${aFadeIn} alternate`};
    margin: 0 0 0 ${props => (props.navHidden ? 0 : props.theme.layout.sidebar)};
    transition:.2s all;
`;

export default Content;
