import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export const InputWrap = styled.div`
    background: ${props => props.hasFocus ? '#FFF' : 'rgba(255,255,255, .1)'};
    box-shadow: ${props => props.hasFocus ? '0 10px 15px rgba(0,0,0, .3)' : 'none'};
    margin:.5rem 0;
    height: 5rem;
    width: ${props => props.theme.layout.search};
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
    right:1.7rem;
    pointer-events:none;
    transition: .2s all;
    opacity: 1;
`;

export const ErrorAlert = styled.span`
    display:block;
    width: 100%;
    line-height:3rem;
    color: ${props => props.theme.darken.dark};
    text-align:center;
    font-weight:800;
    letter-spacing: .1rem;
    font-size:1rem;
    text-transform:uppercase;
    padding:0 1.5rem;
    border-radius:.2rem;
    border:.3rem solid #FFF;
    background:#FFF;
    box-shadow:0 10px 15px rgba(0,0,0, .3);
    position:absolute;
    top:6rem;
    left:0;
`


export const SearchIcon = styled(FontAwesomeIcon)`
    font-size:1.6rem;
    transition:.2s all;
    position:absolute;
    top:50%;
    margin-top: -.8rem;
    left:1.7rem;
    transition: .2s color;
`;

export const Title = styled.h4`
    padding:1.5rem;
    border-bottom:1px solid #EEE;
    font-weight:800;
    font-size:1rem;
    letter-spacing: .1rem;
    color:#AAA;
    text-transform:uppercase;
`

export const Suggestion = styled.span`

`

export const SuggestionPoster = styled.img`
    width: 5rem;
    float:left;
`;