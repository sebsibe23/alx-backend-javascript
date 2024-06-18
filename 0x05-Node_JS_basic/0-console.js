/**
 * This function displays a message on the STDOUT.
 * @param {String} msg The message to display.
 * The message is printed using console.log.
 * @throws Will throw an error if the input is not a string.
 * Author: Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const displayMessage = (msg) => {
  try {
    if (typeof msg !== 'string') {
      throw new Error('Input must be a string.');
    }
    console.log(msg);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = displayMessage;
