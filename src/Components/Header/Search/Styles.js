import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export const Input = styled.input`
    color: ${props => props.theme.dark};
    font-weight:700;
    background:none;
    border:0;
    line-height:5rem;
    color:#FFF;
    width:100%;
    position:absolute;
    top:0;
    left:0;
    padding-left:5rem;
    font-size:1.6rem;

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

export const SearchIcon = styled(FontAwesomeIcon)`
    font-size:1.6rem;
    transition:.2s all;
    position:absolute;
    top:50%;
    margin-top: -.8rem;
    left:1.7rem;
    transition: .2s color;
`;

export const DropdownWrap = styled.section`
    display: ${props => (props.hasSearch ? 'block' : 'none')};
    overflow:hidden;
    width:${props =>  props.theme.layout.search};
    box-shadow: 0 10px 15px rgba(0,0,0, .3);
    position:relative;
    z-index:2;
    border-radius: .2rem;
`

export const Results = styled.div`
    float:left;
    background:#FFF;
    width: 100%;
`

export const ErrorAlert = styled.span`
    display:block;
    width: 100%;
    line-height:3rem;
    color: ${props => props.theme.darken.dark};
    text-align:center;
    font-weight:800;
    letter-spacing: .1rem;
    font-size:1rem;
    float:left;
    text-transform:uppercase;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow:hidden;
    padding:0 1.5rem;
    border:.3rem solid #FFF;
    opacity: ${props => (props.hasResults ? '1' : '0')};
`

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