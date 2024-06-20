/**
 * Unit tests for the calculateNumber function.
 *
 * This script uses the assert module to validate the
 * correctness of the calculateNumber function, ensuring
 * it correctly rounds and sums the input numbers.
 */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 3 for floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('should return 3 by rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('should return 3 by rounding down both a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('should return 3 by rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('should return 4 by rounding up b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('should return 6 by rounding up both a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('should return 5 by rounding up a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('should return 5 by rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
