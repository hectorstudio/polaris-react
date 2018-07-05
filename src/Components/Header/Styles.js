import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderWrap = styled.header`
    flex: 1 1 100%;
    display:flex;
    height: 6rem;
    background: #FFF;
    box-shadow: 0 10px 60px rgba(0,0,0, 0.05);
`;

export const HomeLink = styled(Link)`
    width: 6rem;
    height:6rem;
    padding:1.5rem;
    align-self: center;
    margin: auto;
`;

export const BackButton = styled.button`
    width: 6rem;
    height:6rem;
    padding:1.5rem;
    background:none;
    border:0;
    border-right:1px solid #F2F2F2;
`;