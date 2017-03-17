// plugins
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = require('./webpack.base') ({
  entry: {
    main: 'src/index.tsx',
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
  ]
});
