import fs from 'fs';
import path from 'path';

describe('Content Script', () => {
  let contentScriptContent;
  
  beforeAll(() => {
    // Read the content.js file
    contentScriptContent = fs.readFileSync(path.resolve(__dirname, '../content.js'), 'utf8');
  });

  test('content.js should exist', () => {
    expect(contentScriptContent).toBeTruthy();
  });

  test('content.js uses DOM manipulation methods', () => {
    expect(contentScriptContent).toMatch(/document\.(getElementsByClassName|addEventListener|querySelector)/);
  });

  test('content.js handles Chrome extension messaging', () => {
    expect(contentScriptContent).toMatch(/chrome\.(runtime|storage)/);
  });
});