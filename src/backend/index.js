import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import Frame from 'layouts/Frame';
// // import DevTools from './redux/DevTools';
// import injectTapEventPlugin from "react-tap-event-plugin";
// 导入重置样式
import 'app/styles/index.scss'
import  'styles/index.scss';
// import Perf from 'react-addons-perf'
// window.Perf = Perf;
// Perf.start();
const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store);

// injectTapEventPlugin();
ReactDOM.render((
    <Provider store={store}>
        <Frame history={ history } />
    </Provider>
), document.getElementById('root'));

if (module && module.hot) {
    module.hot.accept();
}
