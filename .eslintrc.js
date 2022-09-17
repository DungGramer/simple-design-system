module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],

  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  root: true,

  rules: {
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',

    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],

    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/', 'TODO', 'FIXME', 'DEBUG', 'XXX'],
          exceptions: ['-', '+', 'TODO', 'FIXME', 'DEBUG', 'XXX'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
};
