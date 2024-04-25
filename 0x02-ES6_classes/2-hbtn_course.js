epresents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new instance of the HolbertonCourse class.
   * @param {string} name - The name of the course.
   * @param {number} length - The duration of the course in months.
   * @param {string[]} students - An array of student names enrolled in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }
}
/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = null;
    this._length = null;
    this._students = null;

    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of this course.
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this course.
   * @param {string} value - The name of the course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of this course (in months).
   * @returns {number} The length of the course in months.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of this course (in months).
   * @param {number} value - The length of the course in months.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the names of students in this course.
   * @returns {string[]} An array of student names.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students in this course.
   * @param {string[]} value - An array of student names.
   */
  set students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
