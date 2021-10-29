const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { paths, regex, resolvePath } = require('./untils.js');
const port = process.env.PORT || 3090;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  output: {
    filename: '[name].[contenthash:8].js',
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port,
    watchOptions: {
      ignored: /node_modules/,
    },
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,

    contentBase: paths.public,
    watchContentBase: true,

    // injectClient: true,
  },

  module: {
    rules: [
      {
        test: regex.js,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: resolvePath('config/babel.config.js'),
            cacheDirectory: true,
            cacheCompression: false,
            sourceMaps: true,
            inputSourceMap: true,
            plugins: [require('react-refresh/babel')],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.indexHTML,
      filename: 'index.html',
      // favicon: 'public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],

  output: { publicPath: '/' },
});
