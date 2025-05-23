import MailGeekContent from '../src/content.js';

describe('MailGeekContent', () => {
  test('should initialize correctly', () => {
    expect(MailGeekContent).toBeTruthy();
  });

  test('should have a processEmails method', () => {
    expect(MailGeekContent.processEmails).toBeDefined();
    expect(MailGeekContent.processEmails()).toEqual([]);
  });
});