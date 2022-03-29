module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  // moduleDirectories: [
  //   'node_modules',
  //   'app/javascript',
  // ],
  moduleFileExtensions: [
    'js',
    'ts',
  ],
  // setupFiles: [
  //   '<rootDir>/app/javascript/jest.init.js',
  // ],
  transform: {
    // '^.*\\.(vue)$': '@vue/vue3-jest',
    '^.+\\.(js|ts)(\\.es6)*$': 'babel-jest',
  },
  // moduleNameMapper: {
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/spec/javascripts/fileMock.js',
  //   '\\.(css|less)$': 'identity-obj-proxy',
  //   '@aml-studio/(.*)$': '<rootDir>/packages/aml-studio/$1',
  //   '@specs/(.*)$': '<rootDir>/spec/javascripts/$1',
  //   // '^vue$': '@vue/compat',
  // },
  // reporters: [
  //   'default',
  //   'jest-junit',
  // ],
  testPathIgnorePatterns: [
    '<rootDir>/*/node_modules/',
    '<rootDir>/node_modules/',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!(vue-sparklines|p-debounce)).+\\.js$',
  ],
  globals: {
    RUNNER_ENV: 'WEB',
  },
  // https://ivantanev.com/make-jest-faster/
  // doc: https://jestjs.io/docs/cli#--maxworkersnumstring
  maxWorkers: '50%',
};
