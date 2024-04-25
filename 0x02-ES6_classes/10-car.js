/**
 * Class: Car
 * Description: Represents a car with brand, motor, and color properties.
 */
export default class Car {
  /**
   * Constructor for Car.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The type of motor in the car.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /**
   * Getter for the brand property.
   * @returns {string} - The brand of the car.
   */
  get brand() {
    return this._brand;
  }

  /**
   * Setter for the brand property.
   * @param {string} value - The brand of the car.
   */
  set brand(value) {
    this._brand = value;
  }

  /**
   * Getter for the motor property.
   * @returns {string} - The type of motor in the car.
   */
  get motor() {
    return this._motor;
  }

  /**
   * Setter for the motor property.
   * @param {string} value - The type of motor in the car.
   */
  set motor(value) {
    this._motor = value;
  }

  /**
   * Getter for the color property.
   * @returns {string} - The color of the car.
   */
  get color() {
    return this._color;
  }

  /**
   * Setter for the color property.
   * @param {string} value - The color of the car.
   */
  set color(value) {
    this._color = value;
  }

  /**
   * Static method: [Symbol.species]
   * Description: Returns the constructor of the current class.
   * @returns {Function} - The constructor of the current class.
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Method: cloneCar
   * Description: Creates a clone of the Car instance.
   * @returns {Car} - A new instance of Car.
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
