/**
 * Unit tests for the sendPaymentRequestToApi
 * function using Mocha, Chai, and Sinon.
 *
 * This script verifies that sendPaymentRequestToApi
 * correctly utilizes the calculateNumber method of Utils.
 */

const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    // Spy on the Utils object to monitor method calls
    const bigBrother = sinon.spy(Utils);

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assertions using Sinon and Chai
    expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);

    // Restore the spy to its original state after test
    bigBrother.calculateNumber.restore();
  });
});
