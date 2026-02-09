/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

/**
 * Performs basic mathematical operations
 */
export class MathCalculator {
  /**
   * Adds two numbers
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Subtracts b from a
   */
  subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Multiplies two numbers
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Divides a by b
   * @throws Error if b is zero
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  /**
   * Calculates the power of a number
   */
  power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  /**
   * Calculates the square root of a number
   * @throws Error if number is negative
   */
  sqrt(n: number): number {
    if (n < 0) {
      throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(n);
  }

  /**
   * Calculates the percentage of a number
   */
  percentage(value: number, percent: number): number {
    return (value * percent) / 100;
  }

  /**
   * Evaluates a simple mathematical expression
   * Supports +, -, *, / operators
   * Example: "10 + 5 * 2" returns 20
   */
  evaluate(expression: string): number {
    // Remove whitespace
    const cleaned = expression.replace(/\s+/g, '');

    // Validate expression
    if (!/^[\d+\-*/().]+$/.test(cleaned)) {
      throw new Error('Invalid expression: contains invalid characters');
    }

    try {
      // Use Function constructor for safe evaluation
      // This is safer than eval() but still be cautious in production
      // eslint-disable-next-line no-new-func
      const result = new Function(`return ${cleaned}`)();

      if (typeof result !== 'number' || !isFinite(result)) {
        throw new Error('Expression did not evaluate to a valid number');
      }

      return result;
    } catch (error) {
      throw new Error(
        `Failed to evaluate expression: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      );
    }
  }

  /**
   * Rounds a number to specified decimal places
   */
  round(value: number, decimals: number = 0): number {
    const multiplier = Math.pow(10, decimals);
    return Math.round(value * multiplier) / multiplier;
  }

  /**
   * Calculates the average of an array of numbers
   * @throws Error if array is empty
   */
  average(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error('Cannot calculate average of empty array');
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }

  /**
   * Finds the maximum value in an array of numbers
   * @throws Error if array is empty
   */
  max(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error('Cannot find max of empty array');
    }
    return Math.max(...numbers);
  }

  /**
   * Finds the minimum value in an array of numbers
   * @throws Error if array is empty
   */
  min(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error('Cannot find min of empty array');
    }
    return Math.min(...numbers);
  }
}

// Export a singleton instance
export const calculator = new MathCalculator();
