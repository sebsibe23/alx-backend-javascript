/**
 * Unit test for the getPaymentTokenFromAPI function using Mocha and Chai.
 *
 * This script verifies that getPaymentTokenFromAPI resolves
 * with the expected response when success is true.
 */

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI(success), where success == true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(done); // If there's an error, let Mocha know
  });
});
