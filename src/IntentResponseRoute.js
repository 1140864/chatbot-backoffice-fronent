import React from "react";

import { Switch, Route } from 'react-router-dom'

import IntentResponse from "./IntentResponse";
import NewResponse from "./NewResponse";

import Config from './config/Config';

const IntentResponseRoute = () => (
    <Switch>
        <Route exact path={`${Config.gitHubPages}/intent/:name`} component={IntentResponse}/>
        <Route path={`${Config.gitHubPages}/intent/:name/new`} compoment={NewResponse}/>
    </Switch>
);

export default IntentResponseRoute