'use strict';

const path = require('path');
const webpack = require('webpack');

// plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./webpack.base')({
  entry: {
    main: path.join(process.cwd(), 'app/index.tsx'),
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
    ],
  },
  loaders: [
    // .ts, .tsx
    {
      test: /\.tsx?$/,
      loader: ['react-hot-loader', 'awesome-typescript-loader'],
    },
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
  ],
  devtool: 'inline-source-map',
});
