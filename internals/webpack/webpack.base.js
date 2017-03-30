'use strict';

const path = require('path');
const webpack = require('webpack');

// variables
const isProduction = process.env.NODE_ENV === 'production';
const sourcePath = path.resolve(process.cwd(), 'app');
const outputPath = path.resolve(process.cwd(), 'build');

// plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({
    filename: 'bundle.js',
    path: outputPath,
    publicPath: '/',
  }, options.output),
  target: 'web',
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.js', '.ts', '.tsx'],
    mainFields: ['main'],
  },
  module: {
    loaders: options.loaders.concat([
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: !isProduction,
                importLoaders: 1,
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
            },
          ],
        }),
      },
      {test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader'},
      {test: /\.html$/, loader: 'html-loader'},
      {test: /\.png$/, loader: 'url-loader?limit=10000'},
      {test: /\.jpg$/, loader: 'file-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.ts$/, enforce: 'pre', loader: 'tslint-loader', options: {}},
    ]),
  },
  plugins: options.plugins.concat([
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: sourcePath,
        postcss: [
          require('postcss-import')({addDependencyTo: webpack}),
          require('postcss-url')(),
          require('postcss-cssnext')(),
          require('postcss-reporter')(),
          require('postcss-browser-reporter')({disabled: isProduction}),
        ],
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: !isProduction,
    }),
  ]),
  devtool: options.devtool,
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    /* eslint camelcase: [2, {properties: "never"}] */
    child_process: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  performance: options.performance || {},
});
