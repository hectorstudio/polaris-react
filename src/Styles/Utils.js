import { css } from 'styled-components';

export const sizes = {
  giant: 1170,
  desktop: 1024,
  tablet: 768,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator;
}, {});
