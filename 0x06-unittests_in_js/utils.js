/**
 * Utils object containing utility functions.
 */
const Utils = {
  /**
   * Function to perform arithmetic operations based on the type specified.
   * Rounds the input numbers and performs the operation accordingly.
   *
   * @param {string} type - The type of operation to perform. Can be 'SUM', 'SUBTRACT', or 'DIVIDE'.
   * @param {number} a - The first number for the operation.
   * @param {number} b - The second number for the operation.
   * @returns {number|string} - Result of the arithmetic operation or 'Error' if division by zero.
   * @throws {Error} - Throws an error if invalid type or non-numeric inputs are provided.
   */
  calculateNumber(type, a, b) {
    try {
      // Validate inputs
      if (typeof type !== 'string' || !['SUM', 'SUBTRACT', 'DIVIDE'].includes(type)) {
        throw new Error('Type must be one of: "SUM", "SUBTRACT", or "DIVIDE".');
      }
      if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Both parameters must be valid numbers.');
      }

      // Perform calculations based on the type
      if (type === 'SUM') {
        return Math.round(a) + Math.round(b);
      }
      if (type === 'SUBTRACT') {
        return Math.round(a) - Math.round(b);
      }
      if (type === 'DIVIDE') {
        return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
      }

      // Default return if type is not recognized (though should not happen with current checks)
      return 0;
    } catch (error) {
      // Log and re-throw the error for further handling
      console.error(error.message);
      throw error;
    }
  },
};

module.exports = Utils;
