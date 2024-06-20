/**
 * Function to calculate the sum of two numbers after rounding
 * them to the nearest integer.
 *
 * @param {number} a - The first number to be rounded and added.
 * Must be a valid number.
 * @param {number} b - The second number to be rounded and added.
 * Must be a valid number.
 * @returns {number} The sum of the two rounded numbers.
 * @throws {Error} If the parameters are not valid numbers.
 */

const calculateNumber = (a, b) => {
  try {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both parameters must be numbers.');
    }
    return Math.round(a) + Math.round(b);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

module.exports = calculateNumber;
