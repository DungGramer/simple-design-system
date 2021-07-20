const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3',
        targets: {
          esmodules: true,
        },
        useBuiltIns: 'usage',
        debug: true,
        // modules: 'commonjs',
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    ['@babel/transform-runtime'],
    isDevelopment && require('react-refresh/babel'),
  ],
  sourceType: 'unambiguous',
};
