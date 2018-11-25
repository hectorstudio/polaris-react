import { css } from 'styled-components';

export const sizes = {
  large: 1080,
  desktop: 1024,
  tablet: 768,
  mobile: 500,
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
