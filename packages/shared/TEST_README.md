# Shared Package Tests

This document describes the test setup for the shared package.

## Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage report
yarn test:coverage
```

## Test Results Summary

- ✅ **89 tests passing** across 5 test suites
- ✅ **95.83% coverage** on utils (math + scaling)
- ✅ **100% coverage** on tested components
- ✅ Clean test output with suppressed React Native mock warnings

## Test Structure

Tests are organized alongside the source code in `__tests__` directories:

```
src/
├── components/
│   ├── __tests__/
│   │   ├── HomeScreen.test.tsx (2 tests)
│   │   ├── Link.test.tsx (5 tests)
│   │   └── TopicSelector.test.tsx (7 tests)
│   ├── HomeScreen.tsx
│   ├── Link.tsx
│   └── TopicSelector.tsx
└── utils/
    ├── __tests__/
    │   ├── math.test.ts (63 tests)
    │   └── scaling.test.ts (12 tests)
    ├── math.ts
    └── scaling.ts
```

## Test Coverage

### Components (100% coverage on tested files)
- **HomeScreen**: 100% coverage - 2 tests
- **Link**: 100% coverage - 5 tests  
- **TopicSelector**: 100% coverage - 7 tests

### Utils (95.83% coverage)
- **math.ts**: 94.11% coverage - 63 tests
  - Basic operations (add, subtract, multiply, divide)
  - Advanced functions (power, sqrt, percentage, round)
  - Expression evaluation
  - Array operations (average, max, min)
  - Edge cases and error handling
- **scaling.ts**: 100% coverage - 12 tests

## Test Configuration

- **Test Framework**: Jest
- **Testing Library**: @testing-library/react-native
- **Test Environment**: Node
- **Babel Presets**: env, react, typescript, flow
- **Warning Suppression**: React Native Image prop warnings are filtered in jest.setup.js

## Writing New Tests

When adding new tests:

1. Create a `__tests__` directory next to the component/utility
2. Name test files with `.test.ts` or `.test.tsx` extension
3. Mock external dependencies as needed
4. Use `@testing-library/react-native` for component testing
5. Follow existing test patterns for consistency

## Math Calculator

The math calculator includes comprehensive functionality:
- See `src/utils/MATH_EXAMPLES.md` for detailed usage examples
- 63 tests covering all operations and edge cases
- Real-world examples (discounts, compound interest, grade calculation)

## Known Issues

- Watchman warnings are expected and don't affect test execution
- React Native Image prop warnings are suppressed in test output
- These are mock-related warnings that don't indicate actual issues
