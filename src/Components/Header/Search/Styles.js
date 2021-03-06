import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transparentize } from 'polished';
import { media } from 'Styles/Utils';

export const SearchIcon = styled(FontAwesomeIcon)`
  font-size:1.6rem;
  transition:.2s all;
  border-radius:50%;
  height:${props => props.theme.layout.header};
  width:${props => props.theme.layout.header} !important;
  padding:1.75rem;
  color:${props => (props.hasFocus ? 'rgba(255,255,255,.8)' : 'rgba(255,255,255,.5)')};
`;

export const InputWrap = styled.div`
  background: transparent;
  margin:0;
  height: 5rem;
  width:100%;
  border-radius:.2rem;
  transition: .2s all;
  position:relative;
  position:relative;
  float:left;
  background:${props => (props.hasFocus ? props.theme.background : transparentize(0.5, props.theme.text))};
  border-radius:5rem;
  overflow:hidden;

  ${SearchIcon} {
    background:${props => (props.hasFocus ? 'rgba(0,0,0, .2)' : 'rgba(0,0,0, 0)')};
  }

  ${media.desktop`

  `}
`;

export const LoadingIcon = styled(FontAwesomeIcon)`
  color:rgba(255,255,255,.3);
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
`;

export const Title = styled.h4`
  padding:1.5rem;
  font-size:1rem;
  letter-spacing: .1rem;
  text-transform:uppercase;
  border-bottom:1px solid #EEE;
  color: ${props => props.theme.dark};
`;

export const NoResultsError = styled.span`
  display:block;
  width: 100%;
  line-height:3rem;
  color: ${props => props.theme.darken.dark};
  box-shadow:0 10px 15px rgba(0,0,0, .3);
  text-align:center;
  font-weight:800;
  letter-spacing: .1rem;
  font-size:1rem;
  border-radius:.2rem;
  text-transform:uppercase;
  padding:0 1.5rem;
  background:#FFF;
  position:absolute;
  top: 6rem;
  left: 0;
`;

export const Suggestion = styled.article`
  float: left;
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  padding: .5rem;
  position: relative;
  padding-left: 5rem;
  justify-content: center;
  cursor:pointer;
  transition:.2s background;

  &:hover {
      background: #FAFAFA;
  }
`;

export const Name = styled.span`
  color: ${props => props.theme.dark};
  float: left;
  width: 100%;
  font-size: 1.4rem;
  padding-right: 2rem;
  line-height:1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  overflow:hidden;
  margin:0 0 .2rem;
`;

export const Year = styled.small`
  float:left;
  width:100%;
  text-transform:uppercase;
  font-size:1.2rem;
  font-weight:400;
  letter-spacing: .1rem;
  opacity:.75;
  color ${props => props.theme.text};
`;

export const Poster = styled.img`
  height:5rem;
  padding:.2rem;
  position: absolute;
  top: .5rem;
  left: .5rem;
`;
