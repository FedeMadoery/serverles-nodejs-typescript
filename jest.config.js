module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@functions/(.*)': '<rootDir>/src/functions/$1',
  },
};
