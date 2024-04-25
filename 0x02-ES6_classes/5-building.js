/**
 * Class: Building
 * Description: Represents a building with square footage.
 */
export default class Building {
  /**
   * Constructor for Building.
   * @param {number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  /**
   * Getter for the sqft property.
   * @returns {number} - The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Setter for the sqft property.
   * @param {number} value - The square footage of the building.
   */
  set sqft(value) {
    this._sqft = value;
  }
}
