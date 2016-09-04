
require('es6-promise').polyfill();

module.exports = {

  entry: './src/js/main.js',

  output: {
    path: './build',
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.sass$/,
        loaders: ['style','css', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style','css']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  }

};
