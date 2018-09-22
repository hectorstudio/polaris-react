import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EmptyArticle = styled.article`
    flex: 1 0 auto;
    width: ${props => props.theme.card[props.size].width};
    max-width: ${props => props.theme.card[props.size].maxWidth};
    min-width: ${props => props.theme.card[props.size].minWidth};
    margin:0 1rem;
`;

const EmptyArticles = ({ size, length }) => {
  const EmptyList = [...Array(length)].map(() => <EmptyArticle size={size} key={Math.random()} />);

  return (
    <React.Fragment>
      {EmptyList}
    </React.Fragment>
  );
};

EmptyArticles.propTypes = {
  size: PropTypes.string,
  length: PropTypes.number,
};

EmptyArticles.defaultProps = {
  size: 'small',
  length: 10,
};

export default EmptyArticles;
