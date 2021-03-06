const path = require('path');

const resolvePath = (dir) => path.join(__dirname, '../', dir);

const paths = {
  root: resolvePath(''),
  src: resolvePath('src'),
  public: resolvePath('public/'),
  dist: resolvePath('dist/'),
  indexHTML: resolvePath('public/index.html'),
  indexJS: resolvePath('src/index.js'),
  assets: resolvePath('public/assets'),
  fonts: resolvePath('public/fonts'),
  image: resolvePath('public/images'),
  nodeModule: resolvePath('node_modules'),
};

const regex = {
  css: /\.css$/i,
  cssModule: /\.module\.css$/i,
  sass: /\.(scss|sass)$/i,
  sassModule: /\.module\.(scss|sass)$/i,
  avif: /\.avif$/i,
  image: /\.(png|jpe?g|gif|bmp|ico)$/i,
  svg: /\.svg$/i,
  font: /\.(woff|woff2|eot|ttf|otf)$/i,
  js: /\.(js|jsx)$/i,
  ts: /\.(ts|tsx)$/i,
  jts: /\.[jt]sx?$/,
};

const formatFileName = '[name].[hash:8].[ext]';

const postCSS = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      config: resolvePath('config/postcss.config.js'),
    },
  },
};

module.exports = {
  paths,
  regex,
  formatFileName,
  resolvePath,
  postCSS,
};
