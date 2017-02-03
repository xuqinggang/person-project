import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Frame from '../layouts/Frame.js';
import Home from '../views/Home/Home.js';
import Detail from '../views/Article/Article.js';

const routes = browserHistory => (
  <Router history={browserHistory}>
    <Route path="/" component={Frame}>
      <IndexRoute component={Home} />
      <Route path="/detail/:id" component={Detail} />
    </Route>
  </Router>
);

export default routes;
