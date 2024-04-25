/**
 * Class: Airport
 * Description: Represents an airport with a name and code.
 */
export default class Airport {
  /**
   * Constructor for Airport.
   * @param {string} name - The name of the airport.
   * @param {string} code - The code of the airport.
   */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * Getter for the name property.
   * @returns {string} - The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * Setter for the name property.
   * @param {string} value - The name of the airport.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Getter for the code property.
   * @returns {string} - The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * Setter for the code property.
   * @param {string} value - The code of the airport.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Symbol.toStringTag method implementation.
   * @returns {string} - The code of the airport.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
