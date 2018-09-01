import { darken, lighten } from 'polished';

const Theme = {
  primary: '#FF9B3D',
  secondary: '#C9CCD1',
  text: '#556488',
  pink: '#E83773',
  purple: '#BF00B7',
  dark: '#000F32',
  light: '#F5F7FA',
  background: '#191927',
  header: '#222230',
  border: '#252537',
  darken: {
    primary: darken(0.2, '#FF9B3D'),
    dark: darken(0.1, '#000F32'),
  },
  lighten: {
    background: lighten(0.1, '#191927'),
  },
  alerts: {
    success: '#81A35A',
    error: '#E83C50',
    info: '#4C6EAC',
  },
  layout: {
    header: '8.1rem',
    sidebar: '25rem',
    search: '30rem',
  },
  fonts: {
    opensans: '"Open-sans", sans-serif',
    muli: '"Muli", sans-serif',
  },
};

export default Theme;
