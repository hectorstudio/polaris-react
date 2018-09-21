import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { aFadeIn } from 'Styles/Animations';

const fadeInLow = keyframes`
  from { opacity: 0 }
  to { opacity: .2 }
`;

export const VideoWrap = styled.article`
    width: 600px;
    float: left;
`;

export const MediaFullWrap = styled.section`
  float:left;
  width:100%;
  height:calc(100vh - ${props => props.theme.layout.header});
  padding:5rem;
  position:relative;

  &:after {
    content:'';
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:${props => props.theme.background};
    opacity:.4;
    z-index: -1;
  }
`;

export const MediaFull = styled.article`
  width:100%;
  float:left;
  position:relative;
  z-index:5;
  display:flex;
`;

export const MediaBackground = styled.span`
  background: url(${props => props.bgimg}) no-repeat center;
  background-size:cover;
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  z-index: -1;
  filter: blur(25px);
  opacity:0;
  animation: ${`.3s ${fadeInLow} forwards`};
  animation-delay: .3s;
`;

export const MediaLeftCol = styled.div`
  float:left;
  width:25rem;
  margin-right: 2.5rem;
`;

export const MediaRightCol = styled.div`
  float:left;
  padding-left: 2.5rem;
`;

export const MediaInfo = styled.div`
  float:left;
  width:100%;
  display:flex;
  position:relative;
  margin:0 0 1rem;
`;

export const MediaInfoList = styled.ul`
  margin:0;
  padding:0;

  li {
    display:inline-block;
    color: #FFF;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 2rem;
    transform: tranzslateY(-.05rem);
    text-transform:uppercase;
    margin-right:.5rem;
    padding-right:.5rem;

    &:last-child {
      margin:0;
      padding:0;
      border:0;
    }
  }
`;

export const MediaInfoSubhead = styled.span`
  text-transform:uppercase;
  color: #FFF;
  opacity:.5;
  font-size:1.1rem;
  font-weight:600;
  line-height:2rem
  letter-spacing:.1rem;
  margin-right:1.5rem;
`;

export const DropdownIcon = styled(FontAwesomeIcon)`
    color: #FFF;
    font-size:1.4rem;
    height:2rem;
`;

export const FileName = styled.p`
  color: #FFF;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
  transform: translateY(-.05rem);
`;

export const SelectStyle = {
  container: base => ({
    ...base,
    flex: 1,
  }),
  option: (base, { isDisabled, isFocused, isSelected }) => ({
    ...base,
    cursor: 'pointer',
    backgroundColor: '#191927 !important',
    transition: '.2s all',
    color: (isSelected || isFocused ? '#FF9B3D' : '#FFF'),
    opacity: (isDisabled ? 0.2 : 1),
  }),
  control: () => ({
    width: 'auto',
    background: 'none',
    cursor: 'pointer',
    color: '#FF9B3D',
    position: 'relative',
  }),
  menu: base => ({
    ...base,
    width: 'auto',
    borderRadius: '0',
    overflow: 'hidden',
    cursor: 'pointer',
    animation: `${`.4s ${aFadeIn} alternate`}`,
  }),
  menuList: base => ({
    ...base,
    padding: '1rem',
    backgroundColor: '#191927 !important',
    margin: '0',
    fontSize: '1.4rem',
    fontWeight: '600',
  }),
  valueContainer: () => ({
    fontWeight: 600,
    fontSize: '1.4rem',
    lineHeight: '2rem',
    padding: 0,
    height: '2rem',
    float: 'left',
    display: 'inline-block',
  }),
  dropdownIndicator: base => ({
    ...base,
    padding: 0,
    marginLeft: '1rem',
    color: '#FF9B3D',
    height: '1.6rem',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  singleValue: () => ({
    color: '#FFF',
    margin: 0,
  }),
};

// Media Info
export const MediaInfoWrap = styled.div`
  float:left;
  width:100%;
`;

export const MediaName = styled.h1`
  font-size:3rem;
  color:#FFF;
  font-weight:600;
  float:left;
  width:100%;
  margin:0 0 2rem;
`;

export const MediaRelease = styled.span`
  font-size:1.6rem;
  color:${props => props.theme.secondary};
  opacity:.5;
  font-weight:400;
  margin-left:1rem;
`;

export const MediaDetails = styled.ul`
  float:left;
  width:100%;
  margin:0 0 2rem;
  list-style-type:none;

  li {
    font-size:1.4rem;
    display:inline-block;
    padding-right:1rem;
    margin-right:1rem;
    border-right:1px solid rgba(255,255,255,.2);
    font-weight:600;
    color:${props => props.theme.secondary};

    &:last-child {
      border-right:0;
    }

    &:nth-child(2) {
      color: ${props => props.watched ? props.theme.secondary : props.theme.primary};
    }
  }
`;

export const MediaOverview = styled.p`
  font-size:1.4rem;
  line-height:2.6rem;
  color:${props => props.theme.secondary};
  font-weight:400;
  float:left;
  width:100%;
  margin:0 0 2rem;
`;
