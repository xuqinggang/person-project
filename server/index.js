/***	build tools		***/
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware'

/***	server modules	***/
import express from 'express';
import path from 'path';

/***    config file 	***/
// build tools config
import webpack_config from '../webpack.config.babel.js';
import server_config from '../server.config.js';

/***	react isomorphic	***/
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
// require("babel-register")({
//   // Optional ignore regex - if any filenames **do** match this regex then they
//   // aren't compiled. 
//   ignore: /(.css|.scss)$/
// });
  // 
import register from 'ignore-styles' // ingore style files
register(['.sass', '.scss'])
// import '../client/assets/styles/index.scss';
// console.log('css', css)
// component
import App from '../client/component/App.jsx';

let app = express();


app.set('views', path.join(server_config.__dirname, 'server', 'views'));
app.set('view engine', 'ejs');

// development environment
if (process.env.NODE_ENV === 'development') {
	console.log('development')
	let compiler = webpack(webpack_config);
	app.use(webpackDevMiddleware(compiler, {
		hot: true,
		publicPath: webpack_config.output.publicPath,
		stats: {
			colors: true
		}
	}));
	app.use(webpackHotMiddleware(compiler, {
		// log: console.log
	}));
}

const initialView = renderToString(
	<App>
	</App>
);
// console.log(initialView,'initialView')
app.use('/', (req, res, next) => {
	res.render('index', {
		html: initialView
	});
});

app.listen(3001, () => {
	console.log('server is listening 3001 port!');
});