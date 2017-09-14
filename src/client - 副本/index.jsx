import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';
import {
	browserHistory
} from 'react-router';

import router from 'component/router.jsx';
import App from 'component/App.jsx';
console.log('1133x1122xx1111');

ReactDOM.render(
	<App>
    </App>, document.getElementById('container'));
if (module && module.hot) {
	module.hot.accept();
}