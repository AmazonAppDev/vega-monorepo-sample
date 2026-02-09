/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

import {MathCalculator, calculator} from '../math';

describe('MathCalculator', () => {
  let calc: MathCalculator;

  beforeEach(() => {
    calc = new MathCalculator();
  });

  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(calc.add(5, 3)).toBe(8);
    });

    it('should add negative numbers', () => {
      expect(calc.add(-5, -3)).toBe(-8);
    });

    it('should add positive and negative numbers', () => {
      expect(calc.add(10, -3)).toBe(7);
    });

    it('should handle zero', () => {
      expect(calc.add(0, 5)).toBe(5);
      expect(calc.add(5, 0)).toBe(5);
    });

    it('should handle decimal numbers', () => {
      expect(calc.add(1.5, 2.3)).toBeCloseTo(3.8);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(calc.subtract(10, 3)).toBe(7);
    });

    it('should subtract negative numbers', () => {
      expect(calc.subtract(-5, -3)).toBe(-2);
    });

    it('should handle zero', () => {
      expect(calc.subtract(5, 0)).toBe(5);
      expect(calc.subtract(0, 5)).toBe(-5);
    });

    it('should handle decimal numbers', () => {
      expect(calc.subtract(5.5, 2.2)).toBeCloseTo(3.3);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(calc.multiply(5, 3)).toBe(15);
    });

    it('should multiply negative numbers', () => {
      expect(calc.multiply(-5, -3)).toBe(15);
      expect(calc.multiply(-5, 3)).toBe(-15);
    });

    it('should handle zero', () => {
      expect(calc.multiply(5, 0)).toBe(0);
      expect(calc.multiply(0, 5)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(calc.multiply(2.5, 4)).toBe(10);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers', () => {
      expect(calc.divide(10, 2)).toBe(5);
    });

    it('should divide negative numbers', () => {
      expect(calc.divide(-10, 2)).toBe(-5);
      expect(calc.divide(10, -2)).toBe(-5);
    });

    it('should handle decimal results', () => {
      expect(calc.divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => calc.divide(10, 0)).toThrow(
        'Division by zero is not allowed',
      );
    });
  });

  describe('power', () => {
    it('should calculate power of positive numbers', () => {
      expect(calc.power(2, 3)).toBe(8);
      expect(calc.power(5, 2)).toBe(25);
    });

    it('should handle power of zero', () => {
      expect(calc.power(5, 0)).toBe(1);
    });

    it('should handle negative exponents', () => {
      expect(calc.power(2, -2)).toBe(0.25);
    });

    it('should handle decimal exponents', () => {
      expect(calc.power(4, 0.5)).toBe(2);
    });
  });

  describe('sqrt', () => {
    it('should calculate square root of positive numbers', () => {
      expect(calc.sqrt(4)).toBe(2);
      expect(calc.sqrt(9)).toBe(3);
      expect(calc.sqrt(16)).toBe(4);
    });

    it('should handle zero', () => {
      expect(calc.sqrt(0)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(calc.sqrt(2)).toBeCloseTo(1.414, 2);
    });

    it('should throw error for negative numbers', () => {
      expect(() => calc.sqrt(-4)).toThrow(
        'Cannot calculate square root of negative number',
      );
    });
  });

  describe('percentage', () => {
    it('should calculate percentage of a number', () => {
      expect(calc.percentage(100, 10)).toBe(10);
      expect(calc.percentage(200, 50)).toBe(100);
    });

    it('should handle decimal percentages', () => {
      expect(calc.percentage(100, 12.5)).toBe(12.5);
    });

    it('should handle zero', () => {
      expect(calc.percentage(100, 0)).toBe(0);
      expect(calc.percentage(0, 50)).toBe(0);
    });
  });

  describe('evaluate', () => {
    it('should evaluate simple addition', () => {
      expect(calc.evaluate('5 + 3')).toBe(8);
    });

    it('should evaluate simple subtraction', () => {
      expect(calc.evaluate('10 - 3')).toBe(7);
    });

    it('should evaluate simple multiplication', () => {
      expect(calc.evaluate('5 * 3')).toBe(15);
    });

    it('should evaluate simple division', () => {
      expect(calc.evaluate('10 / 2')).toBe(5);
    });

    it('should evaluate complex expressions', () => {
      expect(calc.evaluate('10 + 5 * 2')).toBe(20);
      expect(calc.evaluate('(10 + 5) * 2')).toBe(30);
    });

    it('should handle expressions with decimals', () => {
      expect(calc.evaluate('5.5 + 2.5')).toBe(8);
    });

    it('should handle expressions without spaces', () => {
      expect(calc.evaluate('10+5*2')).toBe(20);
    });

    it('should throw error for invalid expressions', () => {
      expect(() => calc.evaluate('10 + abc')).toThrow('Invalid expression');
    });

    it('should throw error for expressions with invalid characters', () => {
      expect(() => calc.evaluate('10 + $5')).toThrow('Invalid expression');
    });
  });

  describe('round', () => {
    it('should round to nearest integer by default', () => {
      expect(calc.round(5.4)).toBe(5);
      expect(calc.round(5.5)).toBe(6);
      expect(calc.round(5.6)).toBe(6);
    });

    it('should round to specified decimal places', () => {
      expect(calc.round(5.456, 2)).toBe(5.46);
      expect(calc.round(5.454, 2)).toBe(5.45);
    });

    it('should handle negative numbers', () => {
      expect(calc.round(-5.5)).toBe(-5);
      expect(calc.round(-5.6)).toBe(-6);
    });

    it('should handle zero decimal places', () => {
      expect(calc.round(5.789, 0)).toBe(6);
    });
  });

  describe('average', () => {
    it('should calculate average of positive numbers', () => {
      expect(calc.average([1, 2, 3, 4, 5])).toBe(3);
    });

    it('should calculate average of negative numbers', () => {
      expect(calc.average([-1, -2, -3])).toBe(-2);
    });

    it('should calculate average of mixed numbers', () => {
      expect(calc.average([10, -5, 15, -10])).toBe(2.5);
    });

    it('should handle single element array', () => {
      expect(calc.average([5])).toBe(5);
    });

    it('should handle decimal results', () => {
      expect(calc.average([1, 2, 3])).toBeCloseTo(2);
    });

    it('should throw error for empty array', () => {
      expect(() => calc.average([])).toThrow(
        'Cannot calculate average of empty array',
      );
    });
  });

  describe('max', () => {
    it('should find maximum of positive numbers', () => {
      expect(calc.max([1, 5, 3, 9, 2])).toBe(9);
    });

    it('should find maximum of negative numbers', () => {
      expect(calc.max([-1, -5, -3])).toBe(-1);
    });

    it('should find maximum of mixed numbers', () => {
      expect(calc.max([10, -5, 15, -10])).toBe(15);
    });

    it('should handle single element array', () => {
      expect(calc.max([5])).toBe(5);
    });

    it('should throw error for empty array', () => {
      expect(() => calc.max([])).toThrow('Cannot find max of empty array');
    });
  });

  describe('min', () => {
    it('should find minimum of positive numbers', () => {
      expect(calc.min([1, 5, 3, 9, 2])).toBe(1);
    });

    it('should find minimum of negative numbers', () => {
      expect(calc.min([-1, -5, -3])).toBe(-5);
    });

    it('should find minimum of mixed numbers', () => {
      expect(calc.min([10, -5, 15, -10])).toBe(-10);
    });

    it('should handle single element array', () => {
      expect(calc.min([5])).toBe(5);
    });

    it('should throw error for empty array', () => {
      expect(() => calc.min([])).toThrow('Cannot find min of empty array');
    });
  });

  describe('singleton instance', () => {
    it('should export a working calculator instance', () => {
      expect(calculator.add(5, 3)).toBe(8);
      expect(calculator.multiply(4, 5)).toBe(20);
    });
  });

  describe('edge cases', () => {
    it('should handle very large numbers', () => {
      expect(calc.add(1e10, 1e10)).toBe(2e10);
    });

    it('should handle very small numbers', () => {
      expect(calc.add(1e-10, 1e-10)).toBeCloseTo(2e-10);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => calc.divide(1, 0)).toThrow(
        'Division by zero is not allowed',
      );
    });
  });

  describe('chained operations', () => {
    it('should support chaining multiple operations', () => {
      const result = calc.add(calc.multiply(5, 2), calc.divide(10, 2));
      expect(result).toBe(15);
    });

    it('should calculate complex formula', () => {
      // Calculate: (10 + 5) * 2 - 8 / 4
      const step1 = calc.add(10, 5); // 15
      const step2 = calc.multiply(step1, 2); // 30
      const step3 = calc.divide(8, 4); // 2
      const result = calc.subtract(step2, step3); // 28
      expect(result).toBe(28);
    });
  });
});
