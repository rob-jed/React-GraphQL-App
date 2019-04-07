import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Search from 'scenes/Search';
import User from 'scenes/User';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/user/:userLogin" component={User} />
        </Switch>
    </Router>
);

export default Routes;
