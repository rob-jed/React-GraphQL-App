import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Search from 'scenes/Search';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Search} />

        </Switch>
    </Router>
);

export default Routes;
