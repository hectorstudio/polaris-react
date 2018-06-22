import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { headShake } from 'react-animations';

const loginError = keyframes`${headShake}`;

// Containers
export const FormWrap = styled.form`
    padding:5rem;
    background:#FFF;
    box-shadow: 0 10px 60px rgba(0,0,0, 0.05);
    margin:0 0 3rem;
    transition: .2s border;
    border:1px solid;
    border-color: ${(props => props.error ? props.theme.alerts.error : 'transparent')};
    animation: ${(props => props.error ? `.5s ${loginError} alternate` : 'none')};
`;

// Heading
export const Heading = styled.h1`
    font-size:2.8rem;
    line-height:1.5;
    font-weight:800;
    margin: 3rem 0 0;
    color: ${props => props.theme.dark};
`

export const SubHeading = styled.p`
    font-size:1.8rem;
    font-weight:700;
    margin:0 0 5rem;
    color: ${props => props.theme.secondary};
`

// Form Elements
export const LoginInputWrap = styled.div`
    float:left;
    width:100%;
    position:relative;
    padding-bottom: .2rem;
    margin:0 0 2rem;
    &:after, &:before {
        content:'';
        position:absolute;
        height: .2rem;
        bottom:0;
        left:0;
        z-index:3;
        width:100%;
        transition:.3s width;
    }

    &:after {
        background: ${(props => props.error ? props.theme.alerts.error : props.theme.light)};
    }

    &:before {
        z-index:4;
        width:${props => props.isFocused ? 100 : 0}%;
        background-image: linear-gradient(-135deg, #5683C6 0%, #6D9CE3 50%, #4678C3 100%);
    }    
`;

export const LoginInput = styled.input`
    height: 5rem;
    border:0;
    width:100%;
    float:left;
    font-size:1.8rem;
    font-weight:700;
    color: ${props => props.theme.darken.primary};
    

    &::placeholder {
        color: ${props => props.theme.text};
    }

    &:focus {
        outline:none;
    }
`

export const LoginButton = styled.button`
    height: 6rem;
    margin: 3rem 0 5rem;
    color: #FFF;
    width:100%;
    text-align:center;
    border:0;
    background: ${props => props.theme.primary};
    font-size:2rem;
    font-weight:700;
    box-shadow:0 10px 15px rgba(0,0,0, .1);
    transition:.2s all;
    cursor: pointer;

    &:disabled {
        filter: grayscale(75%);
        opacity:.5;
        cursor: initial;

        &:hover {
            box-shadow:0 10px 15px rgba(0,0,0, .1);
        }
    }

    &:hover {
        box-shadow:0 10px 15px rgba(0,0,0, .25);
    }

    &:focus {
        outline: none;
    }
`

// Register
export const RegisterPara = styled.p`
    font-size:1.6rem;
    color: ${props => props.theme.secondary}
    font-weight:700;
`;

export const RegisterLink = styled(Link)`
    color: ${props => props.theme.primary};
    margin-left:.5rem;
    font-weight: 700;

    &:hover {
        text-decoration:underline;
    }
`;

// Forgot Password
export const ForgotPasswordLink = styled(Link)`
    text-decoration:underline;
    color: ${props => props.theme.text};
    margin:0 auto;
    transition: .3s color;
    font-weight:700;

    &:hover {
        color: ${props => props.theme.primary};
    }
`;