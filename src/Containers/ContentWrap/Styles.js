import styled from 'styled-components';

const Content = styled.div`
    height: calc(100vh - ${props => props.theme.layout.header});
    width: 100%;
    margin: ${props => props.theme.layout.header} 0 0;
`;

export default Content;
