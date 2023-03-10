module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['<rootDir>/**/**/*.spec.ts'],
	testPathIgnorePatterns: ['/node_modules/'],
	coverageDirectory: './test-reports',
	coveragePathIgnorePatterns: ['node_modules', 'src/types'],
	reporters: ['default'],
  };