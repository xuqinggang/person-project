import path from 'path';

let webpack_config = {
	watch: true,
	entry: {
		index: 'index.jsx'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve('./output/client')
	},
	modules: {
		loaders: [
			{
				test: [/\.js$/, /\.jsx$/],
				loaders: ['react-hot', 'bable']
			},
			// {
			// 	test: /\.scss$/,
			// 	loaders: []
			// }
		]
	},
	resolve: {
		extensions: ['', 'js', 'jsx', 'es6'],
		root: path.resolve('./client'),
		modulesDirectories: ["node_modules"]
	}

};
export default webpack_config;