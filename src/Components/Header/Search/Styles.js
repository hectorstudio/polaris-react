import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export const Input = styled.input`
    color: ${props => props.theme.dark};
    font-weight:700;
    background:none;
    border:0;
    line-height:4rem;
    color:#FFF;
    width:100%;
    position:absolute;
    top:0;
    left:0;
    padding-left:4rem;

    &::-webkit-input-placeholder {
        color: rgba(255,255,255, .2);
    }

    &:focus {
        outline:none;
        color: ${props => props.theme.dark};
    }
`;

export const InputWrap = styled.div`
    background: ${props => props.hasFocus ? '#FFF' : 'rgba(255,255,255, .1)'};
    box-shadow: ${props => props.hasFocus ? '0 10px 15px rgba(0,0,0, .2)' : 'none'};
    margin:1rem 0;
    height: 4rem;
    width:30rem;
    border-radius:.2rem;
    transition: .2s all;
    position:relative;
`
export const LoadingIcon = styled(FontAwesomeIcon)`
    color: ${props => props.theme.dark};
    font-size:1.6rem;
    transition:.2s all;
    position:absolute;
    top:50%;
    margin-top: -.8rem;
    right:1.2rem;
    pointer-events:none;
    transition: .2s all;
    opacity: 1;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
    font-size:1.6rem;
    transition:.2s all;
    position:absolute;
    top:50%;
    margin-top: -.8rem;
    left:1.2rem;
    transition: .2s color;
`;