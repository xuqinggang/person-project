/*
	build tools
 */
import webpack from 'webpack';
import webpack_devMiddleware from 'webpack-dev-middleware';
/*
	server modules
 */
import express from 'express';

/*
	config file
 */
// build tools confing
import webpack_config from '../webpack.config.babel.js'

console.log('!!', webpack_config)
let app = express();

if (process.env.NODE_ENV === 'development') {
	let compiler = webpack(webpack_config);
	app.use(webpack_devMiddleware(compiler, {

	}));
}
app.use('/', (req, res, next) => {
	res.send('asdf');
	res.end();
});

app.listen(3001, () => {
	console.log('server is listening 3001 port!');
});