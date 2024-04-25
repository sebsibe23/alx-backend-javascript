/**
 * Class: HolbertonClass
 * Description: Represents a Holberton class
 * with size and location properties.
 */
export default class HolbertonClass {
  /**
   * Constructor for HolbertonClass.
   * @param {number} size - The size of the class.
   * @param {string} location - The location of the class.
   */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /**
   * Getter for the size property.
   * @returns {number} - The size of the class.
   */
  get size() {
    return this._size;
  }

  /**
   * Setter for the size property.
   * @param {number} value - The size of the class.
   */
  set size(value) {
    this._size = value;
  }

  /**
   * Getter for the location property.
   * @returns {string} - The location of the class.
   */
  get location() {
    return this._location;
  }

  /**
   * Setter for the location property.
   * @param {string} value - The location of the class.
   */
  set location(value) {
    this._location = value;
  }

  /**
   * Symbol.toPrimitive method implementation.
   * @param {string} hint - The hint for the conversion.
   * @returns {number|string|object} - The converted value based on the hint.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
