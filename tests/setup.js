// Jest test setup for MailGeek Chrome Extension
const createChromeMock = require('./chrome-mock.js');

// Create global Chrome mock
global.chrome = createChromeMock();

// Additional global setup
beforeEach(() => {
  // Reset Chrome mock before each test
  global.chrome._reset();
  
  // Clear all mocks
  jest.clearAllMocks();
  
  // Reset DOM
  document.body.innerHTML = '';
});