import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import createFetchMiddleware from 'redux-composable-fetch';
import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers.js';
import DevTool from './DevTool.js';

// const FetchMiddleware = createFetchMiddleware({
//   afterFetch({ action, result }) {
//     return result.json().then(data => {
//       return Promise.resolve({
//         action,
//         result: data,
//       });
//     });
//   },
// });

// const finalCreateStore = compose(
//   applyMiddleware(ThunkMiddleware, FetchMiddleware, routerMiddleware(browserHistory)),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore);

const finalCreateStore = compose(
  applyMiddleware(ThunkMiddleware, routerMiddleware(browserHistory)),
  DevTool.instrument()
)(createStore);

const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer,
});

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  return store;
}
