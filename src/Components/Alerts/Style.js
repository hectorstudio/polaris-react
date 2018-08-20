import styled from 'styled-components';

const getColor = (props) => {
  switch (props.type) {
    case 'error':
      return props.theme.alerts.error;
    case 'info':
      return props.theme.alerts.info;
    case 'success':
      return props.theme.alerts.success;
    default:
      return 'black';
  }
};

export const AlertWrap = styled.div`
    background: #FFF;
    margin:0 3rem 3rem;
    padding: 3rem;
    box-shadow: 0 10px 30px rgba(0,0,0, 0.05);
    position:relative;
    max-width:40rem;
`;

export const AlertType = styled.strong`
    color: ${props => getColor(props)};
    margin-right:.5rem;
    text-transform:capitalize;
    font-weight:600;
    font-size:1.4rem;
    &:after {
        content:':';
    }
`;

export const AlertMessage = styled.p`
    color: ${props => props.theme.text};
    font-weight:600;
    line-height: 1.75;
    display:inline-block;
    padding-left:5rem;
    font-size:1.4rem;
    letter-spacing:.05rem;
`;

export const IconWrap = styled.span`
    position:absolute;
    top:50%;
    left:3rem;
    margin-top: -1.6rem;
`;

export const Close = styled.span`
    position:absolute;
    top:1.3rem;
    right:1.5rem;
    font-size:1.4rem;
    cursor:pointer;
    color: ${props => props.theme.secondary};
    transition:.2s all;
    opacity: .5;

    &:hover {
        opacity:1;
        color: rgba(0,0,0, 1);
    }
`;
