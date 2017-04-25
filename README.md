# by xuqinggang
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

5.webpackJsonp is not defined
是没有引入CommonsChunkPlugin生成了公共文件导致的
在页面引入生成的公共文件，并且要在其他文件之前引入
6.nodemon 
nodemon will watch the files in the directory in which nodemon was started
可以利用ignore进行忽略

优化：
1.webpack 生成公共文件

6.scss 文件中 import相对路径的其他文件时，会报错（提示找不到该文件）
 ex ： Cannot resolve 'file' or 'directory' ../fonts/fontawesome-webfont.eot 
 解决办法：
 （1）.利用resolve-url-loader
 		{
      test   : /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
    }
	(2)不在scss文件 导入其他文件  而在js文件中进行import

7.
Module parse failed: G:\web\project\git\person-project\src\app\styles\fonts\font
awesome-webfont.woff2?v=4.7.0 Unexpected character '
是webpack没有解析该文件的loader

8.（表述不清）enhanceButton组件，中的focusRipple组件 通过按tab键自动定焦，并产生ripple纹浪。但是设定style transform scale时会短暂停顿一下。
解决方法：利用重排.
(
  i.e.
  document.querySelectorAll('.button')[0].onclick = function() {
      const div = document.createElement('div');
      div.className = "test"
      div.innerHTML = "123";

      document.body.appendChild(div);
      addStyle(div);
    }
    function addStyle(el) {
      //console.log(el.offsetWidth);
      el.style.transform = "scale(0.5)";
    }
  在注释的情况下，div元素会直接显示出缩小一倍后的状态，没有那种从大缩到一半的动作
  但若是去掉注释，加上el.offsetWidth或者其他可以导致重排的动作，则会出现那种状态
  (transtion-delay 对这种不好使)
)

9.
WARNING in ./src/app/components/shared/internal/EnHanceButton.js
There is another module with an equal name when case is ignored. //当忽略大小写的时候
This can lead to unexpected behavior when compiling on a filesystem with other case-semantic.
Rename module if multiple modules are expected or use equal casing if one module is expected.

原因：在某处导入 enhanceButton模块的时候，有两处或多处地方导入该模块时，模块名字大小写不一致，