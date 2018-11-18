import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderWrap = styled.header`
    height: auto;
    float:left;
    width: 100%;
    z-index:5;
    padding:4rem 4.5rem 0;
`;

export const NavIcon = styled(FontAwesomeIcon)`
    color: rgba(255,255,255, .5);
    font-size:1.6rem;
    transition:.2s all;
`;

export const NavButton = styled.button`
    float:${props => (props.alignLeft ? 'left' : 'right')};
    background:none;
    border:none;
    transition:.2s background;
    width:${props => props.theme.layout.header};
    height:${props => props.theme.layout.header};

    &:hover {
      ${NavIcon}{
        color: #FFF;
      }
    }
`;
