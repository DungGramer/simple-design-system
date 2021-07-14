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
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  sourceType: 'unambiguous',
};
