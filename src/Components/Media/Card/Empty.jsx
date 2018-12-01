import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from 'Styles/Utils';

const EmptyArticle = styled.div`
  flex: 1 0 auto;
  width: ${props => props.wide ? props.theme.wideCard.width : 'calc(50% - 3rem)'};
  max-width: ${props => props.wide ? props.theme.wideCard.maxWidth : 'calc(50% - 3rem)'};
  margin: 0 1.5rem;


  ${media.tablet`
    width: ${props => props.wide ? 'calc(50% - 3rem)' : 'calc(25% - 3rem)'};
    max-width: ${props => props.wide ? 'calc(50% - 3rem)' : 'calc(25% - 3rem)'};
  `}

  ${media.desktop`
    width: ${props => props.wide ? 'calc(33.3333% - 3rem)' : 'calc(25% - 3rem)'};
    max-width: ${props => props.wide ? 'calc(33.3333% - 3rem)' : 'calc(25% - 3rem)'};
  `}

  ${media.large`
    width: ${props => props.wide ? props.theme.wideCard.width : props => props.theme.card.width};
    max-width: ${props => props.wide ? props.theme.wideCard.maxWidth : props => props.theme.card.maxWidth};
    margin:0 1.5rem;
  `}
`;

const EmptyArticles = ({ length, wide }) => {
  const EmptyList = [...Array(length)].map(() => <EmptyArticle wide={wide} key={Math.random()} />);

  return (
    <Fragment>
      {EmptyList}
    </Fragment>
  );
};

EmptyArticles.propTypes = {
  length: PropTypes.number,
  wide: PropTypes.bool,
};

EmptyArticles.defaultProps = {
  length: 20,
  wide: false,
};

export default EmptyArticles;
