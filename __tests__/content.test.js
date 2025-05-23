// Import the functions to test
const { extractEmailAddresses, processPageContent } = require('../content');

describe('Content Module', () => {
  test('extractEmailAddresses extracts valid email addresses', () => {
    const testText = 'Contact john.doe@example.com or jane@company.org';
    const emails = extractEmailAddresses(testText);
    expect(emails).toEqual(expect.arrayContaining([
      'john.doe@example.com',
      'jane@company.org'
    ]));
  });

  test('processPageContent handles various scenarios', () => {
    const mockDocument = {
      body: {
        innerText: 'Test email: contact@mailgeek.com'
      }
    };
    const result = processPageContent(mockDocument);
    expect(result).toBeDefined();
    // Add more specific assertions based on your content.js implementation
  });
});