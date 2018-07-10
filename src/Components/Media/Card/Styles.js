import styled from 'styled-components';

export const CardWrap = styled.article`
    flex: 1 0 auto;
    width:16rem;
    margin:0 1rem 2rem;
`;

export const CardPoster = styled.span`
    width: 100%;
    float: left;
    border:2px solid ${[props => props.theme.darken.dark]};
    background-image: url(${props => props.bgimg});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    box-shadow: 0 5px 60px rgba(0,0,0, 0.1);
    padding-top: calc(513 / 342 * 100%);
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