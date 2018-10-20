import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserListItem = styled.li`
  width:100%;
  padding:0 0 0 2rem;
  border-bottom:1px solid rgba(0,0,0, .2);
  line-height:5rem;
  text-transform:capitalize;
  color:rgba(255,255,255, .6);
  font-size:1.4rem;
  background: ${props => (props.success ? props.theme.alerts.success : 'center')};
  font-weight: ${props => (props.success ? '600' : '400')};
  text-align: ${props => (props.success ? 'center' : 'left')};
  
  &:last-child {
    border:0;
  }
`;

export const DeleteUser = styled(FontAwesomeIcon)`
  font-size:1.4rem;
  color:${props => props.theme.alerts.error};
  cursor:pointer;
  float:right;
  transition:.2s all;
  height:5rem;
  opacity:.5;
  padding:1.7rem;
  width:5rem !important;
  background:rgba(0,0,0, .1);
  border-left:1px solid rgba(0,0,0, .2);

  &:hover {
    opacity:1;
  }
`;

export const CopyInvite = styled(FontAwesomeIcon)`
  font-size:1.4rem;
  color:#FFF;
  cursor:pointer;
  float:right;
  transition:.2s all;
  height:5rem;
  opacity:.5;
  padding:1.7rem;
  width:5rem !important;
  background:rgba(0,0,0, .1);
  border-left:1px solid rgba(0,0,0, .2);

  &:hover {
    opacity:1;
  }
`;

export const GenerateInvite = styled(FontAwesomeIcon)`
  font-size:1.4rem;
  color:#FFF;
  cursor:pointer;
  float:right;
  transition:.2s all;
  height:5rem;
  opacity:.5;
  padding:1.7rem;
  width:5rem !important;
  background:rgba(0,0,0, .1);
  border-left:1px solid rgba(0,0,0, .2);
  position:absolute;
  top:0;
  right:0;

  &:hover {
    opacity:1;
  }
`;
