const babelConf = require('./babel.config.js');

module.exports = (wallaby) => {
  return {
    files: [
      {
        pattern: 'babel.config.js',
        instrument: false
      },
      {
        pattern: '.env',
        instrument: false
      },
      {
        pattern: '.babelrc',
        instrument: false
      },
      {
        pattern: '__tests__/**/*.js',
        load: false,
        instrument: false
      },
      {
        pattern: '__mocks__/**/*',
        load: false,
        instrument: false
      },
      'src/**/*.js?(x)',
      {
        pattern: 'src/**/*.snap',
        load: false
      },
      '!src/**/*.test.js?(x)'
    ],

    tests: ['src/**/*.test.js?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    workers: {
      initial: 6,
      regular: 2
    },

    compilers: {
      'src/**/*.js?(x)': wallaby.compilers.babel(babelConf)
    },

    testFramework: 'jest',

    debug: true
  };
};
