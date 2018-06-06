import React from 'react';
// import { Router, Route, IndexRoute } from 'react-router';
import { Router, Route, Switch } from 'react-router'
import Home from '../views/Home/Home.js';
import Detail from '../views/Article/Article.js';
import Test from '../views/Test/Test5.js';

const routes = browserHistory => (
    <Router history={ browserHistory } >
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/detail/:id" component={ Detail } />
            <Route path="/category/test" component={ Test } />
        </Switch>
    </Router>
);

export default routes;

