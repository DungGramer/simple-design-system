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
  ],

  sourceType: 'unambiguous',
};
