# person-project
一：problem
1.
Module not found: Error: Cannot resolve module 'webpack/hot/dev-server' in /Users/baidu/project/person-project
 @ multi main

ERROR in multi main
Module not found: Error: Cannot resolve module 'webpack-hot-middleware/client' in /Users/baidu/project/person-project
 @ multi main


resove:
粗心所致
webpack resolve配置中的extensions: ['', '.js', '.jsx', '.es6'] 都丢了"." 号,导致无法解析到webpack-hot-middleware/client 模块


2.nodemon 监听了根目录下所有文件的改动了，导致客户端修改文件，服务也被重启

resolve: 
进行配置
ignore directory
(1) Create a json file named 'nodemon.json' in the root directory
(2) 
{
    "ignore": ["/client/*", "/client/**/*", "/client/**/**/*"]
}


3.
Module build failed: Error: React Hot Loader: The Webpack loader is now exported separately. If you use Babel, we recommend that you remove "react-hot-loader" from the "loaders" section of your Webpack configuration altogether, and instead add "react-hot-loader/babel" to the "plugins" section of your .babelrc file. If you prefer not to use Babel, replace "react-hot-loader" or "react-hot" with "react-hot-loader/webpack" in the "loaders" section of your Webpack configuration.

resolve:
Okay, so removing react-hot from the loaders in the Webpack config and then adding react-hot-loader/babel to the .babelrc plugins worked. Here's what those two files now look like for me:

webpack.config.js
loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      
.babelrc
{
  "presets": ["react", "es2015"],
  "plugins": ["react-hot-loader/babel"]
}

4.
ERROR in ./client/component/App.jsx
Module not found: Error: Cannot resolve module 'style!css' in /Users/baidu/project/person-project/client/component
 @ ./client/component/App.jsx 11:0-20

reason: 
webpack.config.js文件中的loaders 配置 loaders: [
	test: /\.css$/,
	loaders: [style!css] 
]

resolve:
webpack.config.js 文件中
module: {
	loaders: [
		{
			test: /\.css$/,
			loaders: ['style', 'css'] // or loader: 'style!css'
		}
	]
}