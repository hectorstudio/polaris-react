import React, { Component } from 'react'
import styled from 'styled-components'

const EmptyArticle = styled.article`
    flex: 1 0 auto;
    width:16rem;
    margin:0 1rem 0;
`;

class EmptyArticles extends Component {
    render() { 
        console.log(this.props.length);
        const EmptyArticleList = [...Array(10)].map((_, i) => 
            <EmptyArticle key={i}></EmptyArticle>
        );


        return ( 
            <React.Fragment>
                {EmptyArticleList}
            </React.Fragment>
        );
    }
}
 
export default EmptyArticles;