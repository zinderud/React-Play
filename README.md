# Class 1:giriş
 
  npm install
  npm run build
 sadece  ürün tamamlandığında 
 webpack içindeki 
  // , new UglifyJsPlugin({ minimize: true })
  yotum satırını kaldırınız


``` javascript
import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component {
    render() {
        return <div id="header">Merhaba</div>;
    }
}

// For the sake of example, we'll assume there's a div named "root"
// on the page
render(<Header />, document.getElementById('root'));
```

 
### Webpack
 

``` javascript
 
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
```

 

###  
## How React applications are structured
Webpack has given us a structure with which to build applications: we can now treat components as individual modules, and import them around as necessary. We'll build an example, but let's stub out an `index.html` in the root of our project first:

``` html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>React</title>
    <!-- Your CSS, et al as necessary -->
</head>
<body>
    <div id="app"></div>
    <script type="text/javascript" src="dist/app.js"></script>
</body>
</html>
```

 