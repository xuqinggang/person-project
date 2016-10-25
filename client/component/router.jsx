import App from './component/App.jsx';
import { Router, Route, IndexRoute, Redirect } from 'react-router'
export default function(history) {
	return (
		<Router history={history} >
			<Route path='/' component={App} />
		</Router>
	)
};