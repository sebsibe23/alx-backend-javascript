/**
 * Function to perform a specified arithmetic operation on two numbers
 * after rounding them to the nearest integer.
 *
 * @param {string} type - The type of operation to perform.
 * Can be 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param {number} a - The first number to be rounded and used
 * in the operation. Must be a valid number.
 * @param {number} b - The second number to be rounded and used
 * in the operation. Must be a valid number.
 * @returns {number|string} The result of the arithmetic operation
 * or 'Error' if division by zero occurs.
 * @throws {Error} If the parameters are not valid numbers or
 * if the operation type is invalid.
 */

const calculateNumber = (type, a, b) => {
  try {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both parameters must be numbers.');
    }
    if (typeof type !== 'string' || !['SUM', 'SUBTRACT', 'DIVIDE'].includes(type)) {
      throw new Error('Type must be "SUM", "SUBTRACT", or "DIVIDE".');
    }

    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
      return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }
    return 0; // This line is unreachable but added for completeness.
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

module.exports = calculateNumber;
