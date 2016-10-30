import path from 'path';
import webpack from 'webpack';

/***	webpack plugins	***/
import AssetsPlugin from 'assets-webpack-plugin'; //Webpack plugin that emits a json file with assets paths.
import htmlWebpackPlugin from 'html-webpack-plugin';

/***	development enviroment config	***/
import dev_env_config from '../config_env/dev.env.config';

/***	server config	***/
import server_config from '../config_server/server.config';

let webpack_config = {
	target: 'web', // Compile for usage in a browser-like environment1
	profile: dev_env_config.isProduction ? false : true, // Capture timing information for each module.
	devtool: dev_env_config.isProduction ? false : 'module-eval-source-map',
	// watch: true,
	entry: {
		client: [
			dev_env_config.client_index_path,
			'webpack-hot-middleware/client?noInfo=true&quiet=true&reload=true'
		],
		vendor: [
			'react', 'react-dom', 'react-router', 'react-redux'
		]
	},
	output: {
		libraryTarget: 'var',
		filename: '[name].[hash].js',
		path: dev_env_config.dist_client_path,
		publicPath: '/scripts/'
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
			},
			{
        		test: /\.ejs$/,
        		loader: 'html-loader' // avoid parse 'ejs variable' by html-loader
      		},
		]
	},
	resolve: {
		// extensions: ['', '.js', '.jsx', '.es6', '.scss', '.sass', '.css'],
		root: process.cwd(), // set root directory to facilitate set 'import path' 
		modulesDirectories: [
            'node_modules'
        ],
        alias: {
        	client: dev_env_config.src_client_path,
        	assets: dev_env_config.src_assets_path, // assets path
        	component: dev_env_config.src_component_path,
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

		new webpack.EnvironmentPlugin(['NODE_ENV']), // This plugin will allow you to reference environment variables through process.env
		new webpack.optimize.CommonsChunkPlugin({
        	name: 'vendor',
        	filename: 'vendor/vendor.[hash].js'
        }),
		new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new htmlWebpackPlugin({
            filename: './index.ejs',
            template: server_config.views_index_path,
            inject: 'body',
        }),
     //    new AssetsPlugin({
		   //  filename: 'assets.path.config.json',
		   //  fullpath: true,
		   //  path: path.resolve('./'),
		   //  prettyPrint: !base_env_config.isProduction,
		   //  update: true
    	// }),
        
	]

};
export default webpack_config;