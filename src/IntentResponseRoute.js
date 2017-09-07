import React from "react";

import { Switch, Route } from 'react-router-dom'

import IntentResponse from "./IntentResponse";
import NewResponse from "./NewResponse";

const IntentResponseRoute = () => (
    <Switch>
        <Route exact path='/intent/:name' component={IntentResponse}/>
        <Route path='/intent/:name/new' compoment={NewResponse}/>
    </Switch>
);

export default IntentResponseRoute