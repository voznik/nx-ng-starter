module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/elements-testing',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  displayName: 'elements-testing',
};
