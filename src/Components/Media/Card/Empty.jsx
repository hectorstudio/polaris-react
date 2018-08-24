import React from 'react';
import styled from 'styled-components';

const EmptyArticle = styled.article`
    flex: 1 0 auto;
    width:16rem;
    margin:0 1rem 0;
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
