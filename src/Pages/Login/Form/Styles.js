import styled from 'styled-components';

export const FormWrap = styled.form`
    padding:5rem;
    background:#FFF;
    box-shadow: 0 10px 60px rgba(0,0,0, 0.05);
    margin:0 0 3rem;
`;

export const Heading = styled.h1`
    font-size:2.8rem;
    line-height:1.5;
    font-weight:800;
    color: ${props => props.theme.dark};
`

export const SubHeading = styled.p`
    font-size:1.8rem;
    font-weight:700;
    color: ${props => props.theme.text};
`