import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
/***	webpack plugins	***/
// Webpack plugin that emits a json file with assets paths

import AssetsPlugin from 'assets-webpack-plugin';
import htmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: ['webpack/hot/dev-server', './src/backend/index.js'],
    output: {
        path: path.join(__dirname, 'dist/backend'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [path.join(__dirname, 'src/backend'), path.join(__dirname, 'src/app')],
                loaders:['babel?cacheDirectory']
            },
            {
                test:/\.less$/,
                include: path.join(__dirname, 'node_modules'),
                loaders: [
                    'style',
                    'css',
                    'less'
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    'style',
                    'css'
                ]
            },
            {	//排除styles目录下的全局样式，不使用css modules功能
                test:/\.scss$/,
                exclude: [
                    path.join(__dirname, 'src/app/styles'), 
                    path.join(__dirname, 'src/backend/styles'), 
                ],
                // loader: ExtractTextPlugin.extract("style?sourceMap", "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!resolve-url!sass?sourceMap")
                loaders: [
                    'style?sourceMap',
                    'css?modules&localIdentName=[name]_[local]',
                    'postcss?sourceMap',
                    // 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'resolve-url',
                    'sass?sourceMap=true'
                ]
            },
            {
                test:/\.scss$/,
                include: [
                    path.join(__dirname, 'src/app/styles'), 
                    path.join(__dirname, 'src/backend/styles'), 
                ],
                loaders: [
                    'style',
                    'css',
                    'resolve-url',
                    'sass?sourceMap=true'
                ]
            },
            {
                test: /\.html$/,
                loader: 'raw',
            },
            {
                test: /\.json/,
                loader: 'json',
            },
            {
                test: /.(jpeg|png|jpg)$/, 
                loader: 'url?limit=8192&name=img/[hash:8].[name].[ext]'
            },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        }),
        // new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/backend/index.html'),
            inject: 'body',
        }),
    ],
    resolve: {
        root: process.cwd(), // set root directory to facilitate set 'import path' 
        modulesDirectories: [
            'node_modules'
        ],
        // 客户端中文件指定某块的引用路径
        alias: {
            app: path.join(__dirname, 'src/app'),
            shared: path.join(__dirname, 'src/app/components/shared'),
            components: path.join(__dirname, 'src/backend/components'),
            views: path.join(__dirname, 'src/backend/views'),
            layouts: path.join(__dirname, 'src/backend/layouts'),
            styles: path.join(__dirname, 'src/backend/styles'),
            routes: path.join(__dirname, 'src/backend/routes'),
            // component: dev_env_config.src_component_path,
            // 'react$': path.join(dev_env_config.node_modules_path, 'react/dist/react.min.js'),
            // 'react-dom$': path.join(dev_env_config.node_modules_path, 'react-dom/dist/react-dom.min.js'),
            // 'redux$': path.join(dev_env_config.node_modules_path, 'redux/dist/redux.min.js'),
            // 'react-redux$': path.join(dev_env_config.node_modules_path, 'react-redux/dist/react-redux.min.js'),
            // 'react-router$': path.join(dev_env_config.node_modules_path, 'react-router/umd/ReactRouter.min.js'),
            // 'react-router$': path.join(dev_env_config.node_modules_path, 'react-dom/dist/react-dom.min.js')
        }
    }
}
