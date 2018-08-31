import { darken } from 'polished';

const Theme = {
  primary: '#FF9B3D',
  secondary: '#C9CCD1',
  text: '#556488',
  pink: '#E83773',
  purple: '#BF00B7',
  dark: '#000F32',
  light: '#F5F7FA',
  background: darken(0.08, '#000F32'),
  darken: {
    primary: darken(0.2, '#FF9B3D'),
    dark: darken(0.1, '#000F32'),
  },
  alerts: {
    success: '#81A35A',
    error: '#E83C50',
    info: '#4C6EAC',
  },
  layout: {
    header: '4rem',
    sidebar: '25rem',
    search: '30rem',
  },
  fonts: {
    opensans: '"Open-sans", sans-serif',
    muli: '"Muli", sans-serif',
  },
};

export default Theme;
