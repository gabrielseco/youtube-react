var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  eslint: {
    configFile: '.eslintrc'
  },
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      },
      __DEVTOOLS__: true
    }),
  ],
  module: {
    loaders: [
      {
      test: /\.js$/,
      loaders: ['react-hot', 'babel','eslint-loader'],
      include: path.join(__dirname, 'src'),
      exclude: /(node_modules|bower_components)/
      },
    {
      test: /\.scss$/,
      loader:ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
    },
    {
       test: /\.css$/,
       loader:ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),

   }

   ]

  }
}
