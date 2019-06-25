module.exports = {
  "preset": 'ts-jest',
  "testEnvironment": 'node',
  "setupFiles": ['<rootDir>/enzyme.config.js'],
  "transform": {
    "^.+\\.(css|less)$": "./styleMock.js"
  },
  "snapshotSerializers": ["enzyme-to-json/serializer"]
};