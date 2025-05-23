import fs from 'fs';
import path from 'path';

describe('Content Script', () => {
  test('content.js exists', () => {
    const contentScriptPath = path.join(__dirname, '..', 'content.js');
    expect(fs.existsSync(contentScriptPath)).toBe(true);
  });

  test('content script logs message', () => {
    const originalLog = console.log;
    const mockLog = jest.fn();
    console.log = mockLog;

    require('../content.js');

    expect(mockLog).toHaveBeenCalledWith('MailGeek Content Script');

    console.log = originalLog;
  });
});