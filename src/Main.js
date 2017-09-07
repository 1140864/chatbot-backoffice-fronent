import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import IntentRoute from './IntentRoute'

import Config from './config/Config'

const Main = () => (
    <main>
        <Switch>
            <Route exact path={`${Config.gitHubPages}/`} component={Home}/>
            <Route path={`${Config.gitHubPages}/home`} component={Home}/>
            <Route path={`${Config.gitHubPages}/intent`} component={IntentRoute}/>

        </Switch>
    </main>
)

export default Main