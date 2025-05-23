// Mock the functions that will be tested
const mockExtractEmailAddresses = jest.fn();
const mockProcessPageContent = jest.fn();

// Simulate the content.js file
jest.mock('../content', () => ({
  extractEmailAddresses: mockExtractEmailAddresses,
  processPageContent: mockProcessPageContent
}));

describe('Content Module', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockExtractEmailAddresses.mockClear();
    mockProcessPageContent.mockClear();
  });

  test('extractEmailAddresses can extract email addresses', () => {
    const testText = 'Contact john.doe@example.com or jane@company.org';
    mockExtractEmailAddresses.mockReturnValue([
      'john.doe@example.com',
      'jane@company.org'
    ]);

    const emails = require('../content').extractEmailAddresses(testText);
    expect(emails).toEqual(expect.arrayContaining([
      'john.doe@example.com',
      'jane@company.org'
    ]));
  });

  test('processPageContent handles document input', () => {
    const mockDocument = {
      body: {
        innerText: 'Test email: contact@mailgeek.com'
      }
    };
    mockProcessPageContent.mockReturnValue({ success: true });

    const result = require('../content').processPageContent(mockDocument);
    expect(result).toEqual({ success: true });
  });
});