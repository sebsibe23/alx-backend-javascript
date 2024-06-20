/**
 * Unit tests for the sendPaymentRequestToApi function using Mocha, Chai, and Sinon.
 *
 * This script verifies that sendPaymentRequestToApi correctly logs the total cost to the console.
 */

const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    // Spy on console.log to monitor its calls
    const bigBrother = sinon.spy(console);

    // Stub Utils.calculateNumber to return a fixed value
    const dummy = sinon.stub(Utils, 'calculateNumber');
    dummy.returns(10);

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assertions using Sinon and Chai
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
    expect(dummy.callCount).to.be.equal(1);
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
    expect(bigBrother.log.callCount).to.be.equal(1);

    // Restore the stub and spy to their original state after test
    dummy.restore();
    bigBrother.restore();
  });
});
