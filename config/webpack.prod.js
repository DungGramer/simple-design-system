const webpack = require("webpack");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const CopyPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const { paths, regex, postCSS } = require('./utils');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const webpackConfig = merge(common, {
  mode: 'production',
  target: ['es5', 'web'],

  output: {
    filename: 'assets/js/[name].[contenthash:8].js',
    clean: true,
    pathinfo: false,
    // libraryTarget: 'umd',
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'lottie-web': 'Lottie',
  },

  plugins: [
    new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production"),
			"process.env.VERSION": JSON.stringify(require("../package.json").version)
		}),
    /* new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }), */
    /* new CompressionPlugin({
			asset: "[path].gzip[query]",
			algorithm: "gzip",
			test: /\.(js|css)$/
		}), */
    new CleanWebpackPlugin(),
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
          name: 'lottie-web',
          var: 'Lottie',
          path: 'build/player/lottie_light.min.js',
        },
      ],
      publicPath: '/node_modules',
    }),

    new CopyPlugin({
      patterns: [
        { from: 'public/assets/images', to: 'assets/images' },
        // { from: 'public/favicon.ico', to: '' },
        { from: 'public/.htaccess', to: '' },
        { from: 'public/_redirects', to: '' },
        { from: 'public/robots.txt', to: '' },
        { from: 'public/security.txt', to: '' },
        { from: 'public/manifest.webmanifest', to: '' },
      ],
    }),
  ],
  devtool: false,

  // Stop compilation early in production
  bail: false,

  module: {
    rules: [
      // {
      //   test: regex.ts,
      //   use: [
      //     {
      //       loader: 'ts-loader',
      //       options: {
      //         transpileOnly: true,
      //       },
      //     },
      //   ],
      // },
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', postCSS, 'sass-loader'],
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
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
    compression: 'gzip',
    profile: true,
    store: 'pack',
  },
  optimization: {
    minimize: true,
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    sideEffects: true,
    usedExports: true,

    minimizer: [
      new TerserPlugin({
        // minify: TerserPlugin.uglifyJsMinify,
        parallel: false,
        terserOptions: {
          ecma: 5,
          output: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],

    splitChunks: {
      chunks: 'all',
      minSize: 20_000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50_000,

      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },

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

  stats: {
    all: false,
    assets: true,
    assetsSort: '!size',
    builtAt: true,
    cached: true,
    cachedAssets: true,
    children: false,
    chunks: true,
    chunkGroups: true,
    chunkModules: false,
    chunkOrigins: true,
    colors: true,
    depth: true,
    entrypoints: true,
    env: true,
    errors: true,
    errorDetails: true,
    hash: true,
    modules: false,
    moduleTrace: true,
    performance: true,
    providedExports: false,
    publicPath: true,
    reasons: true,
    source: false,
    timings: true,
    usedExports: false,
    version: true,
    warnings: true,
  },
});

// Analyze the library file sizes
const showBundleAnalyzer = process.env.ANALYZER === 'true';

if (showBundleAnalyzer) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
