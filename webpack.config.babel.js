import path from 'path';
import webpack from 'webpack';

/***	development enviroment config	***/
import dev_env_config from './dev.env.config';
let webpack_config = {
	devtool: '#source-map',
	// watch: true,
	entry: [
		// index: [
		'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
		path.resolve('client/index.js')
		// ]
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve('output/client'),
		publicPath: 'http://localhost:3001/scripts/'
	},
	module: {
		// noParse: [
		// path.join(dev_env_config.node_modules_path, 'react/dist/react.min.js'),
		// path.join(dev_env_config.node_modules_path, 'react-dom/dist/react-dom.min.js'),
		// path.join(dev_env_config.node_modules_path, 'redux/dist/redux.min.js'),
		// path.join(dev_env_config.node_modules_path, 'react-redux/dist/react-redux.min.js'),
		// path.join(dev_env_config.node_modules_path, 'react-router/umd/ReactRouter.min.js'),
		// ],
		loaders: [
			{
				test: [/\.js$/, /\.jsx$/],
				loaders: ['babel?cacheDirectory']
			},
			{
				test: /\.scss$/,
				loaders: [
					'style',
					'css',
					'sass?sourceMap'
				]
			},
			{
				test: /\.css$/,
				loaders: [
					'style',
					'css'
				]
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.es6', '.scss', '.sass', '.css'],
		root: process.cwd(), // set root directory to facilitate set 'import path' 
		modulesDirectories: [
            'node_modules'
        ],
        alias: {
        	client: dev_env_config.client_path,
        	assets: dev_env_config.assets_path, // assets path
        	component: dev_env_config.component_path,
        	// 'react$': path.join(dev_env_config.node_modules_path, 'react/dist/react.min.js'),
        	// 'react-dom$': path.join(dev_env_config.node_modules_path, 'react-dom/dist/react-dom.min.js'),
        	// 'redux$': path.join(dev_env_config.node_modules_path, 'redux/dist/redux.min.js'),
        	// 'react-redux$': path.join(dev_env_config.node_modules_path, 'react-redux/dist/react-redux.min.js'),
        	// 'react-router$': path.join(dev_env_config.node_modules_path, 'react-router/umd/ReactRouter.min.js'),
        	// 'react-router$': path.join(dev_env_config.node_modules_path, 'react-dom/dist/react-dom.min.js')
        }
        // alias: {
        // 	react: path.join(dev_env_config.node_modules_path, 'react/dist/react.min.js')
        // }
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new webpack.optimize.CommonsChunkPlugin(
      		// 'vendor', 'vendor.js'
    	// )
	]

};
export default webpack_config;