module.exports = {
  presets: [
    [
      '@babel/preset-env',
      // {
      // 	corejs: '3',
      // 	targets: {
      // 		esmodules: true,
      // 	},
      // 	useBuiltIns: 'usage',
      // 	// debug: true,
      // 	// modules: 'commonjs',
      // },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],

  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    // [
    //   'react-css-modules',
    //   {
    //     filetypes: {
    //       '.scss': {
    //         syntax: 'postcss-scss',
    //         // plugins: ['postcss-nested'],
    //       },
    //     },
    //   },
    // ],
  ],

  // overrides: [
  //   {
  //     test: '**/examples/**',
  //     plugins: [
  //       ["transform-commonjs", { "synchronousImport": true }]
  //     ],
  //   },
  // ],

  sourceType: 'unambiguous',
};
