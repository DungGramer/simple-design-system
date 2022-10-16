const { paths, regex, resolvePath, formatFileName, postCSS } = require('./utils');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const moduleClassName = '[name]__[local]--[hash:base64:5]';

const sizeLimit = 10_000;

module.exports = {
  // Rules of how webpack will take our files, compile & bundle them for the browser
  entry: paths.indexJS,

  /// There will be one main bundle, and one file per asynchronous chunk.
  output: {
    path: paths.dist,
    publicPath: '/',
    // libraryTarget: 'commonjs2',
  },

  target: 'web',
  module: {
    rules: [
      // File Loader
      {
        test: regex.avif,
        type: 'asset/resource',
        loader: 'url-loader',
        options: {
          fallback: 'file-loader',
          limit: sizeLimit,
          mimetype: 'image/avif',
          name: formatFileName,
        },
      },
      {
        test: regex.image,
        type: 'asset/resource',
        loader: 'url-loader',
        options: {
          fallback: 'file-loader',
          limit: sizeLimit,
          name: formatFileName,
        },
      },
      // {
      //   test: regex.font,
      //   exclude: /fontawesome/,
      //   type: 'asset/resource',
      //   loader: 'url-loader',
      //   options: {
      //     fallback: 'file-loader',
      //     limit: sizeLimit,
      //     outputPath: 'assets/fonts',
      //     name: formatFileName,
      //     esModule: false,
      //   },
      // },
      {
        test: regex.svg,
        // type: 'asset/inline', // Load svg inside HTML
        // issuer: regex.jts,
        // use: ['@svgr/webpack'],
        loader: 'react-svg-loader',
        options: {
          jsx: true, // true outputs JSX tags
        },
      },

      {
        test: regex.js,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: resolvePath('config/babel.config.js'),
              cacheDirectory: true,
              cacheCompression: false,
              sourceMaps: true,
              inputSourceMap: true,
            },
          },
        ],
      },
      {
        test: regex.css,
        exclude: regex.cssModule,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          postCSS,
        ],
        sideEffects: true,
      },
      {
        test: regex.cssModule,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: {
                localIdentName: moduleClassName,
              },
            },
          },
          postCSS,
        ],
      },
      {
        test: regex.sass,
        exclude: regex.sassModule,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 3,
            },
          },
          postCSS,
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
              sassOptions: {
                fiber: false,
              },
            },
          },
        ],
        sideEffects: true,
      },
      {
        test: regex.sassModule,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 3,
              modules: {
                localIdentName: moduleClassName,
              },
            },
          },
          postCSS,
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "~/styles/abstracts/_abstracts-dir";',

              // Prefer `dart-sass`
              implementation: require('sass'),
              sassOptions: {
                fiber: false,
              },
            },
          },
        ],
      },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.scss', '.css'],
    alias: {
      '~': paths.src,
      '@public': resolvePath('public'),
      '@components': resolvePath('src/components'),
      '@pages': resolvePath('src/components/pages'),
      '@templates': resolvePath('src/components/templates'),
      '@atoms': resolvePath('src/components/UI/atoms'),
      '@molecules': resolvePath('src/components/UI/molecules'),
      '@organisms': resolvePath('src/components/UI/organisms'),
    },
  },
};
