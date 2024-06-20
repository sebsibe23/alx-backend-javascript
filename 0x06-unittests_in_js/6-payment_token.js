/**
 * Simulates an API request to fetch a payment token.
 *
 * @param {boolean} success - Indicates whether the API request should succeed.
 * @returns {Promise} A Promise that resolves with an object containing data if successful.
 */
const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
  // Simulate API request based on success flag
  if (success) {
    resolve({ data: 'Successful response from the API' });
  }
});

module.exports = getPaymentTokenFromAPI;
