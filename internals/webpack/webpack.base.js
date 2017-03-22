var path = require('path');
var webpack = require('webpack');

// variables
var isProduction = process.env.NODE_ENV === 'production';
var sourcePath = path.resolve(process.cwd(), 'app');
var outputPath = path.resolve(process.cwd(), 'build');

// plugins
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // https://github.com/Microsoft/TypeScript/issues/11677 
    mainFields: ['main']
  },
  module: {
    loaders: options.loaders.concat([
      // css 
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
                localIdentName: '[local]__[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      },
      // static assets 
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.png$/, loader: 'url-loader?limit=10000' },
      { test: /\.jpg$/, loader: 'file-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      {  test: /\.ts$/, enforce: 'pre', loader: 'tslint-loader', options: { /* Loader options go here */ }}
    ])
  },
  plugins: options.plugins.concat([
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: sourcePath,
        postcss: [
          require('postcss-import')({ addDependencyTo: webpack }),
          require('postcss-url')(),
          require('postcss-cssnext')(),
          require('postcss-reporter')(),
          require('postcss-browser-reporter')({ disabled: isProduction })
        ]
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: Infinity
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: !isProduction
    })
  ]),
  devServer: {
    contentBase: sourcePath,
    hot: true,
    stats: {
      warnings: false
    }
  },
  devtool: options.devtool,
  node: {
    // workaround for webpack-dev-server issue 
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty'
  },
  performance: options.performance || {} 
});
