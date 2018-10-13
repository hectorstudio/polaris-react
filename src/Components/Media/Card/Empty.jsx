import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EmptyArticle = styled.div`
    flex: 1 0 auto;
    width: ${props => props.wide ? props.theme.wideCard.width : props.theme.card.width};
    max-width: ${props => props.wide ? props.theme.wideCard.maxWidth : props.theme.card.maxWidth};
    margin: ${props => props.wide ? props.theme.wideCard.margin : props.theme.card.margin};
    margin-bottom:0;
    margin-top:0;
`;

const EmptyArticles = ({ length, wide }) => {
  const EmptyList = [...Array(length)].map(() => <EmptyArticle wide={wide} key={Math.random()} />);

  return (
    <React.Fragment>
      {EmptyList}
    </React.Fragment>
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
