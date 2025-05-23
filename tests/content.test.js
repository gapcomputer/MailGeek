// Content script tests
describe('Chrome Extension Content Script', () => {
  beforeEach(() => {
    // Simulate a basic webpage context
    document.body.innerHTML = `
      <div id="test-container">
        <span class="email-marker"></span>
      </div>
    `;
  });

  test('chrome runtime message listener can be added', () => {
    const mockListener = jest.fn();
    chrome.runtime.onMessage.addListener(mockListener);
    
    expect(chrome.runtime.onMessage.addListener).toHaveBeenCalledWith(mockListener);
  });

  test('can send messages to runtime', () => {
    const testMessage = { type: 'EMAIL_DETECTED', data: 'test@example.com' };
    
    chrome.runtime.sendMessage(testMessage);
    
    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith(testMessage);
  });

  test('content script can interact with page DOM', () => {
    const emailMarker = document.querySelector('.email-marker');
    expect(emailMarker).not.toBeNull();
  });

  test('chrome storage can be used in content script', async () => {
    const testSettings = { enableEmailDetection: true };
    
    await chrome.storage.sync.set(testSettings);
    const retrievedSettings = await chrome.storage.sync.get('enableEmailDetection');
    
    expect(retrievedSettings.enableEmailDetection).toBe(true);
  });
});