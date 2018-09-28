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
  min-width:50rem;
  padding:2rem;
  margin-bottom:2rem;
  border-bottom:1px solid rgba(0,0,0, .2);
  background: rgba(0,0,0, .1);
`;

export const ModalHeading = styled.h3`
  font-size:1.8rem;
  color:#FFF;
  text-transform:capitalize;
  font-weight:600;
`;

export const LibraryItemWrap = styled.article`
  float:left;
  padding:0 2rem;
  width:100%;
  margin-bottom:2rem;
`;

export const LibraryItemFilePath = styled.span`
  padding:0 1.5rem;
  line-height:5rem;
  background: rgba(0,0,0,.2);
  border-radius:.3rem;
  color:#494957;
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
