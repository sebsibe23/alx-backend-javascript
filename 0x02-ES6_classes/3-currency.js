

rt default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Gets the code of this Currency.
   * @returns {string} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the code of this Currency.
   * @param {string} value - The currency code.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Gets the name of this Currency.
   * @returns {string} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this Currency.
   * @param {string} value - The currency name.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Creates the full string representation of this Currency.
   * @returns {string} The full currency string.
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
