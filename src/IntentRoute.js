import React from "react";

import { Switch, Route } from 'react-router-dom'

import Intent from "./Intent";
import IntentResponseRoute from "./IntentResponseRoute";

import Config from './config/Config'

const IntentRoute = () => (
    <Switch>
        <Route exact path={`${Config.gitHubPages}/intent`} component={Intent}/>
        <Route path={`${Config.gitHubPages}/intent/:name`} component={IntentResponseRoute}/>
    </Switch>
);

export default IntentRoute