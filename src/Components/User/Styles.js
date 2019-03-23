import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { aHeadShake } from 'Styles/Animations';
import { media } from 'Styles/Utils';

// Containers
export const FormWrap = styled.form`
    padding:3rem;
    background:#FFF;
    margin:1rem;
    transition: .2s border;
    border-radius:.2rem;
    border:1px solid;
    border-color: ${(props => (props.error ? props.theme.alerts.error : 'transparent'))};
    animation: ${(props => (props.error ? `.5s ${aHeadShake} alternate` : 'none'))};

    ${media.tablet`
      padding:5rem;
      margin:3rem;
      box-shadow: 0 10px 60px rgba(0,0,0, 0.3);
    `};
`;

// Heading
export const Heading = styled.h1`
    font-size:2.8rem;
    line-height:1.5;
    font-weight:800;
    margin: 3rem 0 0;
    color: ${(props => props.theme.dark)};
`;

export const SubHeading = styled.p`
    font-size:1.6rem;
    font-weight:600;
    margin:0 0 3rem;
    color: ${props => props.theme.text};
`;

// Form Elements
export const InputWrap = styled.div`
    float:left;
    width:100%;
    position:relative;
    padding-bottom: .2rem;
    margin:0 0 2rem;
    border: 1px solid;
    border-color: ${(props => (!props.isValid ? '#DDD' : props.theme.alerts.error))}

    &:after, &:before {
        content:'';
        position:absolute;
        height: .1rem;
        bottom:0;
        left:0;
        z-index:3;
        width:100%;
        transition:.3s width;
    }

    &:after {
        background: ${(props => (props.error ? props.theme.alerts.error : props.theme.light))};
    }

    &:before {
        z-index:4;
        width:${props => (props.isFocused ? 100 : 0)}%;
        background: ${props => props.theme.primary};
    }    
`;

export const TextInput = styled.input`
    height: 5rem;
    border:0;
    width:100%;
    float:left;
    font-size:1.8rem;
    font-weight:600;
    text-indent: 1.5rem;
    background:#FFF;
    color: ${props => props.theme.dark};

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 100px #FFF inset;
    }

    &:-webkit-autofill {
        -webkit-text-fill-color: ${props => props.theme.dark};
    }

    &::placeholder {
        color: ${props => props.theme.text};
        opacity: .5;
    }

    &:focus {
        outline:none;
    }
`;

export const FormButton = styled.button`
    height: 6rem;
    margin: 2rem 0 0;
    color: #FFF;
    width:100%;
    text-align:center;
    border:0;
    background: ${props => props.theme.dark};
    font-size:1.4rem;
    font-family: ${props => props.theme.fonts.opensans};
    font-weight:700;
    letter-spacing:.1rem;

    transition:.2s all;
    text-transform:uppercase;
    cursor: pointer;
    border-radius:.2rem;

    &:disabled {
        filter: grayscale(100%);
        opacity:.2;
        cursor: initial;

        &:hover {
            background: ${props => props.theme.dark};
        }
    }

    &:hover {
        background: ${props => props.theme.lighten.background};
    }

    &:focus {
        outline: none;
    }
`;

// Register
export const FormLinkPara = styled.p`
    font-size:1.6rem;
    color: ${props => props.theme.text}
    font-weight:600;
    text-align:center;
    margin: 2rem 0 0;
`;

export const Links = styled(Link)`
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
    font-weight:600;

    &:hover {
        color: ${props => props.theme.primary};
    }
`;

export const Help = styled.span`
    padding:1.5rem;
    background:${props => props.theme.alerts.error};
    box-shadow: 0 10px 60px rgba(0,0,0, 0.3);
    margin: 0 3rem;
    transition: .2s border;
    border-radius:.2rem;
    border:1px solid;
    text-align:left;
    color: #FFF;
    font-size:1.4rem;
    font-weight:600;
    line-height:2rem;
    border: 1px solid ${props => props.theme.alerts.error};
`;
