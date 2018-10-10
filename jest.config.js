module.exports = {
    preset: 'react-native',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    setupFiles: ['<rootDir>/__tests__/setupTests.js'],
    setupTestFrameworkScriptFile: '<rootDir>/__tests__/setupJest.js',
    transformIgnorePatterns: [
      'node_modules/(?!react-native|react-navigation|react-native-button)/'
    ],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/file.js',
    },
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules', 'target'],
    unmockedModulePathPatterns: ['<rootDir>/node_modules/react'],
    testMatch: ['**/?(*.)(test).js?(x)'],
    testPathIgnorePatterns: ['.expo', '/gen/', '/android/', '/assets/', '/ios/'],
    globals: {
      __DEV__: true
    }
  };
  