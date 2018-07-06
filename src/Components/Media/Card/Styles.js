import styled from 'styled-components';

export const CardWrap = styled.article`
    flex: 1 1 100%;
    max-width: 100%;
    padding:.5rem;
    box-sizing:border-box;
    margin:0 0 1rem;

    @media (min-width: 425px) {
        flex: 1 1 50%;
        max-width: 50%;
    }
`;

export const CardPoster = styled.img`
    width: 100%;
    float: left;
    border: 3px solid #FFF;
    border-radius:5px;
    box-shadow: 0 0 60px rgba(0,0,0, 0.15);
`;