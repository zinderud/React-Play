 
 const path = require('path');
 const webpack = require('webpack');
const PATHS = {
    src: path.join(__dirname + '/src'),
    dist: path.join(__dirname + '/dist'),
};

module.exports = {
    entry: ['babel-polyfill', path.join(PATHS.src, '/app.js')],

    resolve: {
        extensions: [ '.js', '.jsx']
    },

    output: {
        path: PATHS.dist,
        filename: 'app.js'
    },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
    module: {
        loaders: [{ test: /\.jsx?$/, loader: 'babel-loader',  exclude: /node_modules/, include: PATHS.src, query: { cacheDirectory: true, presets: ['es2015', 'react'],
        
          
          }
        },
           { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};

