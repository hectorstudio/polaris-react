import styled from 'styled-components';

export const LoginWrap = styled.section`
    display: flex;
    max-width: 45rem;
    width: 100%;
    align-self: center;
    margin: 0 auto;
    flex-direction: column;
`;

export const ForgotPasswordLink = styled.a`
    text-decoration:underline;
    color: ${props => props.theme.text};
    margin:0 auto;
    transition: .3s color;
    &:hover {
        color: ${props => props.theme.primary};
    }
`;