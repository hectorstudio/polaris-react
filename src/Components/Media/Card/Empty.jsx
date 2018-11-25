import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from 'Styles/Utils';

const EmptyArticle = styled.div`
    flex: 1 0 auto;
    width: ${props => props.wide ? props.theme.wideCard.width : 'calc(50% - 3rem)'};
    max-width: ${props => props.wide ? props.theme.wideCard.maxWidth : 'calc(50% - 3rem)'};
    margin: ${props => props.wide ? props.theme.wideCard.margin : '0 1rem 2rem'};
    margin-bottom:0;
    margin-top:0;

  ${media.mobile`
    width:calc(33.3333% - 3rem);
    max-width:calc(33.3333% - 3rem);
    margin: ${props => props.theme.card.margin};
  `}

  ${media.tablet`
    width:calc(25% - 3rem);
    max-width:calc(25% - 3rem);
    margin: ${props => props.theme.card.margin};
  `}

  ${media.desktop`
    width:calc(25% - 3rem);
    max-width:calc(25% - 3rem);;
  `}

  ${media.large`
    width: ${props => props.theme.card.width};
    max-width: ${props => props.theme.card.maxWidth};
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
