import Building from './5-building';

/**
 * Class: SkyHighBuilding
 * Description: Represents a sky-high
 * building that extends the Building class.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Constructor for SkyHighBuilding.
   * @param {number} sqft - The square footage of
   * the building.
   * @param {number} floors - The number of floors
   * in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * Getter for the floors property.
   * @returns {number} - The number of floors
   * in the building.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Setter for the floors property.
   * @param {number} value - The number of floors
   * in the building.
   */
  set floors(value) {
    this._floors = value;
  }

  /**
   * Method: evacuationWarningMessage
   * Description: Generates an evacuation warning
   * message for the building.
   * @returns {string} - The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
