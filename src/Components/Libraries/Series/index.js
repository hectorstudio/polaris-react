import React from 'react'
import styled from 'styled-components'

const SeriesWrap = styled.div`
    width:100%;
    float:left;
    display:flex;
    flex-wrap: wrap;
`;

const Results = styled.p`
    color:red;
`

const Series = () => {
    return (
        <SeriesWrap>
            <Results>No Results</Results>
        </SeriesWrap>
    );
}

export default Series;
