import styled from 'styled-components';

export const CardWrap = styled.article`
  flex: 1 0 auto;
  width:14rem;
  max-width:20rem;
  margin:0 .25rem .5rem;
  cursor:pointer;
  position:relative;

  &:before {
    content:'';
    position:absolute;
    width:calc(100% + .2rem);
    height:calc(100% + .2rem);
    top:-.1rem;
    left:-.1rem;
    background: linear-gradient(45deg, #ff9b3d 0%,#e83773 50%,#bf00b7 100%);
    box-sizing: border-box;
    z-index:0;
    opacity:0;
    transition:.2s opacity;
  }

  &:hover {
    &:before {
      opacity:1;
    }
  }
`;

export const CardPoster = styled.span`
  width: 100%;
  float: left;
  background-image: url(${props => props.bgimg});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  box-shadow: 0 3px 3px rgba(0,0,0, 0.15);
  padding-top: calc(513 / 342 * 100%);
  position:relative;
  z-index:1;
  position:relative;
`;

export const CardTitle = styled.h3`
  width: 100%;
  float: left;
  text-align: center;
  margin:1rem 0 0;
  font-size:1.2rem;
  font-weight:800;
  color: #FFF;
`;

export const CardPopup = styled.div`
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: #000000bf;
  z-index: 1;
  opacity:0;
  pointer-events:none;
  transition:.2s opacity;

  ${CardWrap}:hover & {
    opacity:1;
    pointer-events:initial
  }
`;
