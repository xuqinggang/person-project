ureStore();
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();
// ReactDOM.render((
//     <TestMenu/>
//   // <Provider store={store}>
//   //   <div>
//   //     {routes(history)}
//   //     <DevTools />
//   //   </div>
//   // </Provider>
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
