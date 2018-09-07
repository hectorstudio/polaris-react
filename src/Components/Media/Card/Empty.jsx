import React from 'react';
import styled from 'styled-components';

const EmptyArticle = styled.article`
    flex: 1 0 auto;
    width:14rem;
    max-width:20rem;
    margin:0 .5rem;
`;

const EmptyArticles = () => {
  const EmptyArticleList = [...Array(10)].map(() => <EmptyArticle key={Math.random()} />);

  return (
    <React.Fragment>
      {EmptyArticleList}
    </React.Fragment>
  );
};

export default EmptyArticles;
