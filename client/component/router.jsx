import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router'

import App from 'component/App.jsx';
export default function(history) {
	return (
		<Router history={history} >
			<Route path='/' component={App} />
		</Router>
	)
};