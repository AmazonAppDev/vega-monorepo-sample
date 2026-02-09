// Jest setup file for React Native testing

// Suppress React Native Image prop type warnings in tests
const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
  console.error = jest.fn((...args) => {
    const message = args[0];
    if (
      typeof message === 'string' &&
      (message.includes('Warning: Failed prop type') ||
       message.includes('Invalid prop `source` supplied to `Image`') ||
       message.includes('Warning:'))
    ) {
      return;
    }
    originalError.call(console, ...args);
  });

  console.warn = jest.fn((...args) => {
    const message = args[0];
    if (
      typeof message === 'string' &&
      (message.includes('Warning:') || message.includes('prop type'))
    ) {
      return;
    }
    originalWarn.call(console, ...args);
  });
});

afterAll(() => {
  console.error = originalError;
  console.warn = originalWarn;
});
