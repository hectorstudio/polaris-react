import { darken, lighten } from 'polished';

const Theme = {
  primary: '#FF9B3D',
  secondary: '#C9CCD1',
  text: '#556488',
  dark: '#000F32',
  light: '#F5F7FA',
  background: '#191927',

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
    opensans: '"Open Sans", sans-serif',
    muli: '"Muli", sans-serif',
  },
  card: {
    small: {
      width: '14rem',
      maxWidth: '100%',
      minWidth: '14rem',
      margin: '0 1rem 1.5rem',
      paddingTop: 'calc(513 / 342 * 100%)',
    },
    large: {
      width: '100%',
      maxWidth: '100%',
      minWidth: '100%',
      margin: '0',
      paddingTop: 'calc(513 / 342 * 100%)',
    },
    wide: {
      width: '20rem',
      maxWidth: '100%',
      minWidth: '16rem',
      margin: '0 1rem 1.5rem',
      paddingTop: '12rem',
    },
    largeWide: {
      width: '26rem',
      maxWidth: '100%',
      minWidth: '20rem',
      margin: '0',
      paddingTop: '15rem',
    },
  },
};

export default Theme;
