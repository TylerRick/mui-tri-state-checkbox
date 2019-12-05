const typescript = require('neutrino-typescript')
const typescriptLint = require('neutrino-typescript-eslint')
// const react = require('@neutrinojs/react');
const reactComponents = require('@neutrinojs/react-components')
const jest = require('@neutrinojs/jest')
// const standardjs = require('@neutrinojs/standardjs');
const eslint = require('@neutrinojs/eslint')
const library = require('@neutrinojs/library')
// const web = require('@neutrinojs/web');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    typescript(),
    typescriptLint(),
    eslint({
      eslint: {
        baseConfig: {
          extends: [
            // 'eslint:recommended',
            // 'plugin:react/recommended',
          ]
        },
        rules: {
          '@typescript-eslint/no-explicit-any': ['off'],
          '@typescript-eslint/no-use-before-define': ['off'],
          '@typescript-eslint/explicit-function-return-type': ['off'],
          '@typescript-eslint/member-delimiter-style': ['off'],
          '@typescript-eslint/no-unused-vars': ['off'],
        }
      }
    }),

    reactComponents(),

    (neutrino) => {
      neutrino.config.optimization.minimize(false)
    },

    jest(),
  ],
};
