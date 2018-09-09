import styled from 'styled-components';

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
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:${props => props.theme.background};
    opacity:.4;
    z-index:2;
  }

  &:before {
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-image: url(${props => props.bg});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    opacity:.05;
    z-index:1;
    filter: grayscale(100%);
  }
`;

export const MediaFull = styled.article`
  width:100%;
  float:left;
  position:relative;
  z-index:5;
  display:flex;
`;

export const MediaLeftCol = styled.div`
  float:left;
  width:25rem;
  margin-right: 2.5rem;
`;

export const MediaRightCol = styled.div`
  float:left;
  padding-left: 2.5rem;
  border-left:1px dashed #32323d;
`;

export const MediaName = styled.h1`
  font-size:3rem;
  color:#FFF;
  font-weight:300;
  font-family:${props => props.theme.fonts.opensans};
`;

export const MediaInfo = styled.div`
  float:left;
  width:100%;
`;

export const SelectStyle = {
  option: (base, state) => ({
    ...base,
    borderBottom: '1px dotted pink',
    color: state.isFullscreen ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-selects styles are passed to <View />
    width: 200,
    background: '#FFF',
  }),
  singleValue: (base, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...base,
      color: '#000',
      opacity,
      transition,
    };
  },
};
