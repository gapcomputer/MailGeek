import { describe, it, expect, beforeEach, vi } from 'vitest';
import $ from 'jquery'; // Import jQuery

// Mocking browser extension APIs and jQuery
global.$ = $;
global.chrome = {
  tabs: {
    query: vi.fn()
  },
  runtime: {
    sendMessage: vi.fn()
  }
};

// Mock the DOM elements
document.body.innerHTML = `
  <div id="ll"></div>
`;

describe('Popup Script', () => {
  beforeEach(async () => {
    // Reset mocks before each test
    vi.resetAllMocks();
    
    // Dynamically import the popup script
    await import('../popup.js');
  });

  it('should initialize jQuery functionality', () => {
    const $ll = $('#ll');
    expect($ll.length).toBe(1);
    expect($ll.text()).toBe("Turn Off");
  });

  it('should handle tab querying', () => {
    const mockTabsQuery = vi.spyOn(chrome.tabs, 'query');
    // Add specific test scenarios for tab querying
    expect(mockTabsQuery).toBeDefined();
  });
});