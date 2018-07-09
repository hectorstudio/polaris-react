import styled from 'styled-components';

export const CardWrap = styled.article`
    flex: 1;
    min-width:20rem;
    box-sizing:border-box;
    margin:0 1rem 2rem;
`;

export const CardPoster = styled.img`
    width: 100%;
    float: left;
    border-radius:3px;
    display:block;
    border:4px solid #FFF;
    box-shadow: 0 5px 60px rgba(0,0,0, 0.1);
`;

export const CardTitle = styled.h3`
    width: 100%;
    float: left;
    text-align: center;
    margin:1rem 0 0;
    font-size:1.2rem;
    font-weight:800;
    color: #FFF;
`