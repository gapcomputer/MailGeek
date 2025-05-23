// Popup functionality tests
describe('Chrome Extension Popup', () => {
  beforeEach(() => {
    // Simulate popup HTML
    document.body.innerHTML = `
      <div id="popup-container">
        <button id="action-button">Perform Action</button>
      </div>
    `;
  });

  test('chrome runtime is mocked correctly', () => {
    expect(chrome).toBeDefined();
    expect(chrome.runtime.sendMessage).toBeDefined();
  });

  test('can send message through chrome runtime', () => {
    const mockMessage = { type: 'TEST_ACTION' };
    
    chrome.runtime.sendMessage(mockMessage);
    
    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith(mockMessage);
  });

  test('popup DOM is accessible', () => {
    const actionButton = document.getElementById('action-button');
    expect(actionButton).not.toBeNull();
  });

  test('can interact with chrome storage', async () => {
    const testData = { key: 'testValue' };
    
    await chrome.storage.sync.set(testData);
    const retrievedData = await chrome.storage.sync.get('key');
    
    expect(retrievedData.key).toBe('testValue');
  });
});