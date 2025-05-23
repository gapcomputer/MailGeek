module.exports = {
  // Indicates that the test environment is a browser-like environment
  testEnvironment: 'jsdom',
  
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  
  // Collect coverage information
  collectCoverage: true,
  
  // Specify the coverage directory
  coverageDirectory: 'coverage',
  
  // Specify which files to collect coverage for
  collectCoverageFrom: [
    'popup.js',
    'content.js'
  ],
  
  // Set up files to run before tests
  setupFiles: [
    '<rootDir>/jest.setup.js'
  ],
  
  // Ignore specific paths
  testPathIgnorePatterns: [
    '/node_modules/',
    '/e2e/'
  ]
};