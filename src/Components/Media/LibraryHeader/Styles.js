import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LibraryHeaderWrap = styled.header`
  float: left;
  width: calc(100% - 2rem);
  min-width: calc(100% - 2rem);
  margin: 0 1rem 2rem;
`;

export const AddLibraryButton = styled.button`
  background: #1a2239;
  border: 1px solid #1a2239;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0 1.5rem;
  float: right;
  color: #f9fbff;
  border-radius: .3rem;
  line-height: 4.5rem;
  letter-spacing: .1rem;
`;

export const ModalHeader = styled.header`
  float:left;
  width:100%;
  max-width:60rem;
  width:100%;
  padding:2rem;
  border-bottom:1px solid rgba(0,0,0, .2);
  background: rgba(0,0,0, .1);
`;

export const ModalHeading = styled.h3`
  font-size:1.8rem;
  color:#FFF;
  text-transform:capitalize;
  font-weight:600;
`;

export const ModalBody = styled.div`
  float:left;
  width:100%;
  padding:2rem;
`;

export const AddLibraryWrap = styled.article`
  padding-top: 1rem;
  border-top:1px solid rgba(0,0,0, .2);
  float:left;
  width:100%;
  position:relative;
`;

export const AddLibraryInput = styled.input`
  padding:0 6.5rem 0 1.5rem;
  line-height:5rem;
  background: #FFF;
  border-radius:.3rem;
  color:#737382;
  display:block;
  float:left;
  width:100%;
  border:0;
  transition:.2s;
  font-weight:600;
  font-size:1.5rem;
  
  &:focus {
    outline:none;
    background: rgba(0,0,0,.2);
    color:#FFF;
  }
`;

export const SubmitLibrary = styled(FontAwesomeIcon)`
  font-size: 2rem;
  height: 4.8rem;
  cursor: pointer;
  border: 0;
  background: 0;
  position: absolute;
  right: 0;
  border-radius: .3rem;
  margin: 0 .1rem .1rem 0;
  bottom: 0;
  width: 4.8rem !important;
  padding: 0 1.5rem;
  color:#FFF;
  pointer-events: ${(props => props.disabled ? 'none' : 'initial')};
  background: ${(props => props.disabled ? '#DDD' : props.theme.alerts.success)};
`;

export const LibraryItemWrap = styled.article`
  float:left;
  width:100%;
  margin:0 0 1rem;
`;

export const LibraryItemFilePath = styled.span`
  padding:0 1.5rem;
  line-height:5rem;
  background: rgba(0,0,0,.2);
  border-radius:.3rem;
  color:#737382;
  display:block;
  float:left;
  width:75%;
`;

export const LibraryItemDelete = styled(FontAwesomeIcon)`
  float:right;
  color:${props => props.theme.alerts.error};
  font-size: 2rem;
  height: 5rem;
  cursor:pointer;
`;
