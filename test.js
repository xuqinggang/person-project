var ejs = require('ejs');
var fs = require('fs');
console.log('start');


var file = fs.readFileSync('./output/client/index.ejs', 'utf8');
console.log('1', file);
var rendered = ejs.render(file, {
	html: 'asdf',
	assets: {
		vendor: {
			js: 'sadf'
		},
		client: {
			js: '22'
		}
	}

});

console.log(rendered);
import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import routes from './routes';
// import DevTools from './redux/DevTools';
import injectTapEventPlugin from "react-tap-event-plugin";
// 导入重置样式
import './styles/reset.scss'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();
// ReactDOM.render((
//   <Provider store={store}>
//     <div>
//       {routes(history)}
//       <DevTools />
//     </div>
//   </Provider>
// ), document.getElementById('root'));
ReactDOM.render((
  <Provider store={store}>
    <div>
      {routes(history)}
    </div>
  </Provider>
), document.getElementById('root'));
if (module && module.hot) {
	module.hot.accept();
}
