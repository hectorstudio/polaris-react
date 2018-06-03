import React from 'react'
import { Switch, Route } from 'react-router-dom' 

import Libraries from '../Libraries'

const Routes = () => (
    <Switch>
        <Route exact path='/library/:name' component={ Libraries } />
    </Switch>
)

export default Routes