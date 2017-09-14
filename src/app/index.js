import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import routes from './routes';
// import DevTools from './redux/DevTools';
import injectTapEventPlugin from "react-tap-event-plugin";
import TestMenu from './views/Test/kzWeb/Menu/TestMenu';
import Menu, { MenuItem, SubMenu } from './views/Test/kzWeb/Menu';
// import Menu, {SubMenu, MenuItem} from 'rc-menu';
// 导入重置样式
// import './styles/reset.scss'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();
ReactDOM.render((
    <TestMenu/>
  // <Provider store={store}>
  //   <div>
  //     {routes(history)}
  //     <DevTools />
  //   </div>
  // </Provider>
), document.getElementById('root'));
// ReactDOM.render((
//   <Provider store={store}>
//     <div>
//       {routes(history)}
//     </div>
//   </Provider>
// ), document.getElementById('root'));
if (module && module.hot) {
	module.hot.accept();
}
