const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  paths,
  regex,
  resolvePath,
  formatFileName,
  postCSS,
} = require('./untils');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const moduleClassName = '[name]__[local]--[hash:base64:5]';

const sizeLimit = 10000;

module.exports = {
  // Rules of how webpack will take our files, compile & bundle them for the browser
  entry: ['core-js/stable', paths.indexJS],

  /// There will be one main bundle, and one file per asynchronous chunk.
  output: {
    path: paths.dist,
    publicPath: '/',
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
      {
        test: regex.font,
        // type: 'asset/resource',
        loader: 'url-loader',
        options: {
          fallback: 'file-loader',
          limit: sizeLimit,
          // outputPath: 'assets/fonts',
          name: 'assets/fonts/' + formatFileName,
          esModule: false,
        },
      },
      {
        test: regex.svg,
        type: 'asset/inline', // Load svg inside HTML
      },

      {
        test: regex.js,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: resolvePath('config/babel.config.js'),
          },
        },
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
              modules: true,
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
              modules: true,
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
    modules: [resolvePath('node_modules'), '../src'],
    extensions: ['*', '.js', '.jsx', '.scss'],
    alias: {
      '~': paths.root,
      '@components': resolvePath('src/components'),
      '@pages': resolvePath('src/components/pages'),
      '@templates': resolvePath('src/components/templates'),
      '@atoms': resolvePath('src/components/UI/atoms'),
      '@molecules': resolvePath('src/components/UI/molecules'),
      '@organisms': resolvePath('src/components/UI/organisms'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.indexHTML,
      filename: 'index.html',
      favicon: 'public/favicon.ico',
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
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
};
