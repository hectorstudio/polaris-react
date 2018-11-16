import { darken, lighten } from 'polished';

const Theme = {
  primary: '#FF9B3D',
  secondary: '#C9CCD1',
  text: '#556488',
  dark: '#38496b',
  light: '#F5F7FA',
  background: '#111d2e',
  playbar: '#FF9B3D',

  darken: {
    primary: darken(0.2, '#FF9B3D'),
    dark: darken(0.1, '#38496b'),
    background: darken(0.1, '#111d2e'),
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
    header: '8rem',
    sidebar: '25rem',
    search: '30rem',
  },
  fonts: {
    opensans: '"Open Sans", sans-serif',
    muli: '"Muli", sans-serif',
  },
  card: {
    width: '18rem',
    maxWidth: '22rem',
    margin: '0 1.5rem 3rem',
    paddingTop: 'calc(513 / 342 * 100%)',
  },
  wideCard: {
    width: '16rem',
    maxWidth: '20rem',
    margin: '0 1.5rem 3rem',
    paddingTop: '15rem',
  },
};

export default Theme;
