var path = require('path');
var webpack = require('webpack');

// plugins
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./webpack.base') ({
  entry: {
    main: path.join(process.cwd(), 'src/index.tsx'),
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux'
    ]
  },
  loaders: [
    // .ts, .tsx
    {
      test: /\.tsx?$/,
      loader: ['react-hot-loader', 'awesome-typescript-loader']
    },
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  devtool: "inline-source-map"
});
