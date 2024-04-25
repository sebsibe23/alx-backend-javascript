/**
 * Represents the Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates the new @see {@link HolbertonCourse}.
   *
   * @param {String} name - a name of the course.
   * @param {Number} length - How long a course is (in months).
   * @param {String[]} students - a names of students in course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets a name of this course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets a name of this course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets a length of this course (in months).
   */
  get length() {
    return this._length;
  }

  /**
   * Sets a length of this course (in months).
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets names of students in this course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets a names of students in this course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
