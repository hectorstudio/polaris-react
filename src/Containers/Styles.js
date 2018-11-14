import styled from 'styled-components';

// Animations
import { aFadeIn } from 'Styles/Animations';

export const AppWrap = styled.main`
  display: flex;
  height: 100vh;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: ${props => (props.authed ? 'initial' : 'center')};
`;

export const PageWrap = styled.div`
  flex: 1 1 auto;
  max-width:100%;
  height:calc(100vh - ${props => props.theme.layout.header});
  float:left;
  animation: ${`.5s ${aFadeIn} alternate`};
  margin: 0 0 0 ${props => props.theme.layout.sidebar};
  overflow-x: hidden;
`;

export const InnerContent = styled.section`
  width:100%;
  float:left;
  padding:5rem;
`;

export const PageHeading = styled.h1`
  color:#FFF;
  font-weight: 700;
  font-size:2.4rem;
  margin:0 0 3rem;
`;

export const NoResults = styled.span`
  float: left;
  width: 100%;
  font-weight: 600;
  line-height: 4rem;
  font-size: 1.4rem;
  text-align: ${props => (props.alignLeft ? 'left' : 'center')};
  color: #FFF;
  width: calc(100% - 3rem);
  margin:0 1.5rem;
  opacity:.8;

  button {
    background:none;
    border:none;
    color:${props => props.theme.primary};
    font-weight:600;
    font-size: 1.4rem;

    &:hover {
      text-decoration:underline;
    }
  }
`;
