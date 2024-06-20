/**
 * Sends a payment request to an API using Utils for calculation and logs the total cost.
 *
 * @param {number} totalAmount - The total amount of the payment.
 * @param {number} totalShipping - The total shipping cost.
 */
const Utils = require('./utils');

/**
 * Sends a payment request to an API and logs the total cost.
 *
 * @param {number} totalAmount - The total amount of the payment.
 * @param {number} totalShipping - The total shipping cost.
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculate the total cost by summing totalAmount and totalShipping
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Log the total cost to the console
  console.log(`The total is: ${totalCost}`);
};

module.exports = sendPaymentRequestToApi;
