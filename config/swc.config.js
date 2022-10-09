module.exports = {
  'jsc': {
    'transform': {
      'react': {
        'throwIfNamespace': true,
        'development': true,
        'useBuiltins': false,
        'runtime': 'automatic',
      },
    },
    'parser': {
      'syntax': 'ecmascript',
      'jsx': true,
      'decorators': true,
      'dynamicImport': true,
    },
  },
};
