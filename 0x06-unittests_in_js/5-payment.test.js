/**
 * Unit tests for the sendPaymentRequestToApi function using Mocha, Chai, and Sinon.
 *
 * This script verifies that sendPaymentRequestToApi correctly logs the total cost to the console.
 */

const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let bigBrother; // Sinon spy for console

  beforeEach(() => {
    // Create a spy on console.log if it doesn't exist
    if (!bigBrother) {
      bigBrother = sinon.spy(console, 'log');
    }
  });

  afterEach(() => {
    // Reset history of console.log spy after each test
    bigBrother.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assertions using Sinon and Chai
    expect(bigBrother.calledWith('The total is: 120')).to.be.true;
    expect(bigBrother.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    // Call the function under test with different arguments
    sendPaymentRequestToApi(10, 10);

    // Assertions using Sinon and Chai
    expect(bigBrother.calledWith('The total is: 20')).to.be.true;
    expect(bigBrother.calledOnce).to.be.true;
  });
});

