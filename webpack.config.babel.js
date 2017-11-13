import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
/***	webpack plugins	***/
import AssetsPlugin from 'assets-webpack-plugin'; //Webpack plugin that emits a json file with assets paths.
    import htmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: ['webpack/hot/dev-server','./src/app/index.js'],
    output: {
        path: path.join(__dirname, 'dist/app'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src/app'),
                loaders:['babel?cacheDirectory']
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
                    path.join(__dirname, 'src/app/views/Test'),
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
                    path.join(__dirname, 'src/app/views/Test'),
                    path.join(__dirname, 'src/app/styles'), 
                ],
                loaders: [
                    'style',
                    'css',
                    'resolve-url',
                    'sass?sourceMap=true'
                ]
            },
            // {
            //     test: /.(js|html)$/,
            //     loader: 'html?attrs=img:src img:data-src',
            // },
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
        // new ExtractTextPlugin('style.css'),
        // new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/app/index.html'),
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
            components: path.join(__dirname, 'src/app/components'),
            shared: path.join(__dirname, 'src/app/components/shared'),
            views: path.join(__dirname, 'src/app/views'),
            layouts: path.join(__dirname, 'src/app/layouts'),
            styles: path.join(__dirname, 'src/app/styles'),
            routes: path.join(__dirname, 'src/app/routes'),
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
