/***	build tools		***/
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware'
/***	server modules	***/
import express from 'express';
import path from 'path';
import ejs from 'ejs';

/***    config file 	***/
// build tools config
import webpack_config from '../config_webpack/webpack.config.js';
import server_config from '../config_server/server.config.js';

/***	react isomorphic	***/
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';


import register from 'ignore-styles' // ingore style files
register(['.sass', '.scss'])


import App from '../src/client/component/App.jsx';

let app = express();

// ejs template
app.set('views', server_config.views_path);
app.set('view engine', 'ejs');


let compiler = webpack(webpack_config);
// development environment
if (process.env.NODE_ENV === 'development') {
	console.log('development');

	app.use(webpackDevMiddleware(compiler, {
		hot: true,
		publicPath: webpack_config.output.publicPath,
		stats: {
			colors: true
		}
	}));
	app.use(webpackHotMiddleware(compiler, {
		log: console.log
	}));
}

const initialView = renderToString(
	<App>
	</App>
);

app.use('/', function (req, res, next) {
	// to access memoryfs index.ejx which htmlwebpackPlugin caches in memory 
  	var filename = path.join(compiler.outputPath,'index.ejs');

  	compiler.outputFileSystem.readFile(filename, 'utf-8', function(err, result){
	  	let content = ejs.render(result, {
	    	html: initialView
		});

	    if (err) {
	      return next(err);
	    }

	    res.set('content-type','text/html');
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

app.listen(3001, () => {
	console.log('server is listening 3001 port!');
});