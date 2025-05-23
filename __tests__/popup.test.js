// Mock the functions that will be tested
const mockInit = jest.fn();
const mockHandleSomePopupAction = jest.fn();

// Simulate the popup.js file
jest.mock('../popup', () => ({
  init: mockInit,
  handleSomePopupAction: mockHandleSomePopupAction
}));

describe('Popup Module', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockInit.mockClear();
    mockHandleSomePopupAction.mockClear();
  });

  test('init function can be called', () => {
    require('../popup').init();
    expect(mockInit).toHaveBeenCalled();
  });

  test('handleSomePopupAction can be called', () => {
    const mockEvent = { preventDefault: jest.fn() };
    require('../popup').handleSomePopupAction(mockEvent);
    expect(mockHandleSomePopupAction).toHaveBeenCalledWith(mockEvent);
  });
});