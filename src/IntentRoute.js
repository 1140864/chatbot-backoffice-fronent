import React from "react";

import { Switch, Route } from 'react-router-dom'

import Intent from "./Intent";
import IntentResponseRoute from "./IntentResponseRoute";

const IntentRoute = () => (
    <Switch>
        <Route exact path='/intent' component={Intent}/>
        <Route path='/intent/:name' component={IntentResponseRoute}/>
    </Switch>
);

export default IntentRoute