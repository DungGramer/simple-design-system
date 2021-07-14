const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

// const CopyPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { paths, regex, postCSS } = require('./untils');

module.exports = merge(common, {
  mode: 'production',
  target: ['web', 'es5'],

  output: {
    filename: 'assets/js/[name].[contenthash:8].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.indexHTML,
      filename: 'index.html',
      favicon: 'public/favicon.ico',

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
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[id].[contenthash:8].css',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     // { from: 'public/assets/images', to: 'assets/images' },
    //     { from: 'public/favicon.ico', to: '' },
    //   ],
    // }),
    new CleanWebpackPlugin(),
  ],
  output: {
    clean: true,
  },
  devtool: 'source-map',

  // Stop compilation early in production
  bail: false,

  module: {
    rules: [
      {
        test: regex.css,
        exclude: regex.cssModule,
        use: [MiniCssExtractPlugin.loader, 'css-loader', postCSS],
      },
      {
        test: regex.cssModule,
        exclude: regex.css,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          postCSS,
        ],
      },
      {
        test: regex.sass,
        exclude: regex.sassModule,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          postCSS,
          'sass-loader',
        ],
        sideEffects: true,
      },
      {
        test: regex.sassModule,
        exclude: regex.sass,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          postCSS,
          'sass-loader',
        ],
      },
    ],
  },
});
