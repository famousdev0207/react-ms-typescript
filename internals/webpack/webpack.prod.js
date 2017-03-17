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
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },
  loaders: [
    // .ts, .tsx
    {
      test: /\.tsx?$/,
      loader: ['awesome-typescript-loader?module=es6']
    }
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true
    }),

    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    })
  ],

  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename))
  },
});
