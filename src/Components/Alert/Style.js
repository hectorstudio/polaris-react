import styled from 'styled-components';

const getColor = (props) => {
    switch (props.type) {
        case 'error':
            return props.theme.alerts.error
        case 'info':
            return props.theme.alerts.info
        case 'success':
            return props.theme.alerts.success
        default:
            return 'black'
    }
}

export const AlertWrap = styled.div`
    background: #FFF;
    margin:0 3rem 3rem;
    padding: 3rem 4rem 4rem 3rem;
    box-shadow: 0 10px 30px rgba(0,0,0, 0.05);
    position:relative;
    max-width:35rem;
`;

export const AlertType = styled.strong`
    color: ${props => getColor(props)};
    margin-right:.5rem;
    text-transform:capitalize;
    font-weight:800;
    font-size:1.4rem;
    &:after {
        content:':';
    }
`;

export const AlertMessage = styled.p`
    color: ${props => props.theme.secondary};
    font-weight:700;
    line-height: 1.75;
    display:inline-block;
    padding-right:1.5rem;
    font-size:1.4rem;
    letter-spacing:.05rem;
`;

export const IconWrap = styled.span`
    position:absolute;
    bottom:3rem;
    right:3rem;
`;

export const Close = styled.span`
    position:absolute;
    top:1.3rem;
    right:1.5rem;
    font-size:1.4rem;
    cursor:pointer;
    color: ${props => props.theme.secondary};
    transition:.2s color;

    &:hover {
        color: rgba(0,0,0, 1);
    }
`;
