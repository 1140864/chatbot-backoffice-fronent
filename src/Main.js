import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import IntentRoute from './IntentRoute'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/intent' component={IntentRoute}/>

        </Switch>
    </main>
)

export default Main