/**
 * Comprehensive Chrome Extension API Mock Utility
 * Provides a flexible and extensible mocking environment for Chrome extension testing
 */
module.exports = () => {
  // Storage mock with get/set functionality
  const storageMock = {
    _storage: {},
    get: jest.fn((keys, callback) => {
      const result = {};
      if (typeof keys === 'string') {
        result[keys] = storageMock._storage[keys];
      } else if (Array.isArray(keys)) {
        keys.forEach(key => {
          result[key] = storageMock._storage[key];
        });
      } else if (typeof keys === 'object') {
        Object.keys(keys).forEach(key => {
          result[key] = storageMock._storage[key] || keys[key];
        });
      }
      
      if (callback) {
        callback(result);
      }
      return Promise.resolve(result);
    }),
    set: jest.fn((items, callback) => {
      Object.keys(items).forEach(key => {
        storageMock._storage[key] = items[key];
      });
      
      if (callback) {
        callback();
      }
      return Promise.resolve();
    }),
    clear: jest.fn(() => {
      storageMock._storage = {};
      return Promise.resolve();
    })
  };

  // Runtime mock with message passing simulation
  const runtimeMock = {
    _listeners: [],
    sendMessage: jest.fn((message, callback) => {
      // Simulate async message sending
      return new Promise((resolve) => {
        setTimeout(() => {
          // Optionally trigger listeners
          runtimeMock._listeners.forEach(listener => {
            listener(message, {}, () => {});
          });
          
          if (callback) {
            callback({ success: true });
          }
          resolve({ success: true });
        }, 0);
      });
    }),
    onMessage: {
      addListener: jest.fn((listener) => {
        runtimeMock._listeners.push(listener);
      }),
      removeListener: jest.fn()
    }
  };

  // Tabs mock for tab-related operations
  const tabsMock = {
    query: jest.fn((queryInfo, callback) => {
      // Simulate tab querying
      const mockTabs = [{ id: 1, url: 'https://example.com' }];
      
      if (callback) {
        callback(mockTabs);
      }
      return Promise.resolve(mockTabs);
    }),
    sendMessage: jest.fn((tabId, message, callback) => {
      // Simulate sending message to a specific tab
      return Promise.resolve({ result: 'success' });
    })
  };

  // Construct the full Chrome mock
  return {
    storage: {
      sync: storageMock,
      local: { ...storageMock }
    },
    runtime: runtimeMock,
    tabs: tabsMock,
    // Add more mocks as needed
    _reset: function() {
      // Reset all mocks to initial state
      Object.values(this.storage).forEach(storage => {
        storage._storage = {};
      });
      this.runtime._listeners = [];
    }
  };
};