import React from 'react'
import styled from 'styled-components'

import { Switch, Route } from 'react-router-dom'

import MediaList from '../Components/Media'

const ContentWrap = styled.section`
    flex: 1 1 auto;
    padding: 1rem;
    overflow-y: auto;
    height:100vh;
`;

const Content = () => (
    <ContentWrap>
        <Switch>
            <Route exact path='/library/:name' component={MediaList} />
        </Switch>
    </ContentWrap>
)

export default Content