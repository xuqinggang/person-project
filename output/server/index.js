'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _webpackConfig = require('../config_webpack/webpack.config.js');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _serverConfig = require('../config_server/server.config.js');

var _serverConfig2 = _interopRequireDefault(_serverConfig);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRedux = require('react-redux');

var _ignoreStyles = require('ignore-styles');

var _ignoreStyles2 = _interopRequireDefault(_ignoreStyles);

var _index = require('../src/app/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ingore style files


/***	react isomorphic	***/


/***    config file 	***/
// build tools config
/***	build tools		***/
(0, _ignoreStyles2.default)(['.sass', '.scss']);
/***	server modules	***/


var app = (0, _express2.default)();

// ejs template
app.set('views', _serverConfig2.default.views_path);
app.set('view engine', 'ejs');

var compiler = (0, _webpack2.default)(_webpackConfig2.default);
// development environment
if (process.env.NODE_ENV === 'development') {
	console.log('development');

	app.use((0, _webpackDevMiddleware2.default)(compiler, {
		hot: true,
		publicPath: _webpackConfig2.default.output.publicPath,
		stats: {
			colors: true
		}
	}));
	app.use((0, _webpackHotMiddleware2.default)(compiler, {
		log: console.log
	}));
}

var initialView = (0, _server.renderToString)(_react2.default.createElement(_index2.default, null));

app.use('/', function (req, res, next) {
	console.log('2');
	// to access memoryfs index.ejx which htmlwebpackPlugin caches in memory 
	var filename = _path2.default.join(compiler.outputPath, 'index.ejs');

	compiler.outputFileSystem.readFile(filename, 'utf-8', function (err, result) {
		var content = _ejs2.default.render(result, {
			html: initialView
		});

		if (err) {
			return next(err);
		}

		res.set('content-type', 'text/html');
		res.send(content);
		res.end();
	});
});
// console.log(assets_path_config,'assets_path_config')
// console.log('assets_path_config', assets_path_config);
// console.log(initialView,'initialView')
// app.use('/', (req, res, next) => {
// 	const assets_path_config = require('../assets.path.config.json');
// 	res.render('index', {
// 		html: initialView,
// 		assets: assets_path_config
// 	});
// });

app.listen(3001, function () {
	console.log('server is listening 3001 port!');
});
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(app, 'app', 'server/index.js');

	__REACT_HOT_LOADER__.register(compiler, 'compiler', 'server/index.js');

	__REACT_HOT_LOADER__.register(initialView, 'initialView', 'server/index.js');
}();

;