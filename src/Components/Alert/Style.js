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
    background:#FFF;
    color:#000;
    margin:0 3rem 3rem;
    padding: 3rem;
    box-shadow: 0 10px 30px rgba(0,0,0, 0.05);
`;

export const AlertMessage = styled.p`
    color: ${props => props.theme.secondary};
    font-weight:800;
    display:inline-block;
`;

export const AlertType = styled.strong`
    color: ${props => getColor(props)}
    font-weight:800;
    text-transform: capitalize;
    display:inline-block;
`;