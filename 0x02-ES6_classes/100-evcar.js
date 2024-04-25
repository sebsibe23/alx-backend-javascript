import Car from './10-car';

/**
 * Class: EVCar
 * Description: Represents an electric vehicle that extends the Car class.
 */
export default class EVCar extends Car {
  /**
   * Constructor for EVCar.
   * @param {string} brand - The brand of the electric car.
   * @param {string} motor - The type of motor in the electric car.
   * @param {string} color - The color of the electric car.
   * @param {number} range - The range of the electric car in miles.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  /**
   * Getter for the range property.
   * @returns {number} - The range of the electric car in miles.
   */
  get range() {
    return this._range;
  }

  /**
   * Setter for the range property.
   * @param {number} value - The range of the electric car in miles.
   */
  set range(value) {
    this._range = value;
  }

  /**
   * Method: cloneCar
   * Description: Creates a clone of the EVCar instance.
   * @returns {EVCar} - A new instance of EVCar.
   */
  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}
