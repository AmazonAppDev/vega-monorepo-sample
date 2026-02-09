# Math Calculator Examples

The `MathCalculator` class provides a comprehensive set of mathematical operations with proper error handling.

## Basic Usage

```typescript
import { calculator, MathCalculator } from '@hellosharedworkspace/shared';

// Use the singleton instance
const result = calculator.add(5, 3); // 8

// Or create your own instance
const calc = new MathCalculator();
const sum = calc.add(10, 20); // 30
```

## Basic Operations

### Addition
```typescript
calculator.add(5, 3);        // 8
calculator.add(-5, 3);       // -2
calculator.add(1.5, 2.3);    // 3.8
```

### Subtraction
```typescript
calculator.subtract(10, 3);  // 7
calculator.subtract(5, 10);  // -5
```

### Multiplication
```typescript
calculator.multiply(5, 3);   // 15
calculator.multiply(-5, 3);  // -15
calculator.multiply(2.5, 4); // 10
```

### Division
```typescript
calculator.divide(10, 2);    // 5
calculator.divide(10, 3);    // 3.333...
calculator.divide(10, 0);    // Throws Error: Division by zero is not allowed
```

## Advanced Operations

### Power
```typescript
calculator.power(2, 3);      // 8 (2³)
calculator.power(5, 2);      // 25 (5²)
calculator.power(2, -2);     // 0.25 (2⁻²)
calculator.power(4, 0.5);    // 2 (√4)
```

### Square Root
```typescript
calculator.sqrt(4);          // 2
calculator.sqrt(9);          // 3
calculator.sqrt(2);          // 1.414...
calculator.sqrt(-4);         // Throws Error: Cannot calculate square root of negative number
```

### Percentage
```typescript
calculator.percentage(100, 10);   // 10 (10% of 100)
calculator.percentage(200, 50);   // 100 (50% of 200)
calculator.percentage(100, 12.5); // 12.5 (12.5% of 100)
```

### Rounding
```typescript
calculator.round(5.456);         // 5
calculator.round(5.456, 2);      // 5.46
calculator.round(5.454, 2);      // 5.45
calculator.round(-5.5);          // -5
```

## Expression Evaluation

Evaluate mathematical expressions as strings:

```typescript
calculator.evaluate('5 + 3');           // 8
calculator.evaluate('10 - 3');          // 7
calculator.evaluate('5 * 3');           // 15
calculator.evaluate('10 / 2');          // 5
calculator.evaluate('10 + 5 * 2');      // 20 (follows order of operations)
calculator.evaluate('(10 + 5) * 2');    // 30 (parentheses supported)
calculator.evaluate('5.5 + 2.5');       // 8 (decimals supported)
```

## Array Operations

### Average
```typescript
calculator.average([1, 2, 3, 4, 5]);    // 3
calculator.average([10, -5, 15, -10]);  // 2.5
calculator.average([]);                 // Throws Error: Cannot calculate average of empty array
```

### Maximum
```typescript
calculator.max([1, 5, 3, 9, 2]);        // 9
calculator.max([10, -5, 15, -10]);      // 15
calculator.max([]);                     // Throws Error: Cannot find max of empty array
```

### Minimum
```typescript
calculator.min([1, 5, 3, 9, 2]);        // 1
calculator.min([10, -5, 15, -10]);      // -10
calculator.min([]);                     // Throws Error: Cannot find min of empty array
```

## Chained Operations

Combine multiple operations:

```typescript
// Calculate: (10 + 5) * 2 - 8 / 4
const step1 = calculator.add(10, 5);           // 15
const step2 = calculator.multiply(step1, 2);   // 30
const step3 = calculator.divide(8, 4);         // 2
const result = calculator.subtract(step2, step3); // 28

// Or use nested calls
const result2 = calculator.subtract(
  calculator.multiply(
    calculator.add(10, 5),
    2
  ),
  calculator.divide(8, 4)
); // 28
```

## Real-World Examples

### Calculate Discount Price
```typescript
function calculateDiscountPrice(originalPrice: number, discountPercent: number): number {
  const discount = calculator.percentage(originalPrice, discountPercent);
  return calculator.round(calculator.subtract(originalPrice, discount), 2);
}

calculateDiscountPrice(100, 20); // 80.00 (20% off $100)
```

### Calculate Compound Interest
```typescript
function compoundInterest(
  principal: number,
  rate: number,
  time: number,
  n: number = 1
): number {
  // A = P(1 + r/n)^(nt)
  const ratePerPeriod = calculator.divide(rate, n);
  const onePlusRate = calculator.add(1, ratePerPeriod);
  const exponent = calculator.multiply(n, time);
  const multiplier = calculator.power(onePlusRate, exponent);
  const amount = calculator.multiply(principal, multiplier);
  return calculator.round(amount, 2);
}

compoundInterest(1000, 0.05, 10); // 1628.89 ($1000 at 5% for 10 years)
```

### Calculate Average Grade
```typescript
function calculateGrade(scores: number[]): { average: number; grade: string } {
  const avg = calculator.round(calculator.average(scores), 2);
  let grade = 'F';
  
  if (avg >= 90) grade = 'A';
  else if (avg >= 80) grade = 'B';
  else if (avg >= 70) grade = 'C';
  else if (avg >= 60) grade = 'D';
  
  return { average: avg, grade };
}

calculateGrade([85, 92, 78, 95, 88]); // { average: 87.6, grade: 'B' }
```

## Error Handling

All operations that can fail throw descriptive errors:

```typescript
try {
  calculator.divide(10, 0);
} catch (error) {
  console.error(error.message); // "Division by zero is not allowed"
}

try {
  calculator.sqrt(-4);
} catch (error) {
  console.error(error.message); // "Cannot calculate square root of negative number"
}

try {
  calculator.evaluate('10 + abc');
} catch (error) {
  console.error(error.message); // "Invalid expression: contains invalid characters"
}

try {
  calculator.average([]);
} catch (error) {
  console.error(error.message); // "Cannot calculate average of empty array"
}
```

## Testing

The calculator is fully tested with 63 test cases covering:
- Basic arithmetic operations
- Advanced mathematical functions
- Expression evaluation
- Array operations
- Edge cases (large numbers, small numbers, infinity)
- Error handling
- Chained operations

Run tests with:
```bash
yarn test src/utils/__tests__/math.test.ts
```
