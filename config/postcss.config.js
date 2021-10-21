const autoprefixer = require('autoprefixer');
const flexBugsFixes = require('postcss-flexbugs-fixes');
const postcssNormalize = require('postcss-normalize');

module.exports = {
  plugins: [
    autoprefixer({ grid: 'autoplace' }),
    flexBugsFixes(),
    postcssNormalize(),
  ],
};
