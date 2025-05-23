import MailGeekPopup from '../src/popup.js';

describe('MailGeekPopup', () => {
  test('should initialize correctly', () => {
    expect(MailGeekPopup).toBeTruthy();
  });

  test('should have an updateUI method', () => {
    expect(MailGeekPopup.updateUI).toBeDefined();
  });
});