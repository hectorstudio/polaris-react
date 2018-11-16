import styled from 'styled-components';
import { aFadeIn, aFadeOut } from 'Styles/Animations';
import { media } from 'Styles/Utils';

const UserFormWrap = styled.section`
  display: flex;
  width: 100%;
  margin: 0 auto;
  height:100vh;
  align-self: center;
  flex-direction: column;
  background:#FFF;
  animation: ${(props => (props.success ? `.25s ${aFadeOut} forwards` : `.5s ${aFadeIn} alternate`))};

  ${media.tablet`
    background:none;
    height:auto;
    max-width: 50rem;
  `};
`;

export default UserFormWrap;
