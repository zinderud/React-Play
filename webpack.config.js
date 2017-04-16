
const path = require('path');
const webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV || 'dev';
var WebpackDevServer = require('webpack-dev-server');
var appName = 'app';
var host = '0.0.0.0';
var port = '9000';
const PATHS = {
    src: path.join(__dirname + '/src'),
    dist: path.join(__dirname + '/dist'),
};

var config= {
    entry: ['babel-polyfill', path.join(PATHS.src, '/app.js')],

    resolve: {
        extensions: ['.js', '.jsx']
    },

    output: {
        path: PATHS.dist,
        filename: 'app.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
         new webpack.NoErrorsPlugin()
        // , new UglifyJsPlugin({ minimize: true })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, include: PATHS.src, query: {
                cacheDirectory: false, presets: ['es2015', 'react'],


            }
        },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.scss$/, loader: "style-loader!css-loader" }
        ]
    }
};

 
  new WebpackDevServer(webpack(config), {
    contentBase: './dist',
    hot: true
     
  }).listen(port, host, function (err, result) {
    if (err) {
      console.log(err);
    }
  });
  console.log('-------------------------');
  console.log('Local web server runs at http://' + host + ':' + port);
  console.log('-------------------------');


  module.exports = config;