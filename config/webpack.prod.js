const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const CopyPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');

const { paths, regex, postCSS } = require('./untils');

module.exports = merge(common, {
  mode: 'production',
  target: ['web', 'es5'],

  output: {
    filename: 'assets/js/[name].[contenthash:8].js',
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    'react-router-dom': 'ReactRouterDOM',
    'lottie-web': 'Lottie',
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
    new WebpackCdnPlugin({
      modules: [
        {
          name: 'react',
          var: 'React',
          path: 'umd/react.production.min.js',
        },
        {
          name: 'react-dom',
          var: 'ReactDOM',
          path: 'umd/react-dom.production.min.js',
        },
        {
          name: 'react-router',
          var: 'ReactRouter',
          path: 'umd/react-router.min.js',
        },
        {
          name: 'react-router-dom',
          var: 'ReactRouterDOM',
          path: 'umd/react-router-dom.min.js',
        },
        {
          name: 'lottie-web',
          var: 'Lottie',
          path: 'build/player/lottie_light.min.js',
        },
      ],
      publicPath: '/node_modules',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        // { from: 'public/assets/images', to: 'assets/images' },
        // { from: 'public/favicon.ico', to: '' },
        { from: 'public/.htaccess', to: '' },
        { from: 'public/_redirects', to: '' },
        { from: 'public/robots.txt', to: '' },
        { from: 'public/security.txt', to: '' },
      ],
    }),
  ],
  output: {
    clean: true,
    // libraryTarget: 'umd',
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
  optimization: {
    minimize: true,
    // minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
});
