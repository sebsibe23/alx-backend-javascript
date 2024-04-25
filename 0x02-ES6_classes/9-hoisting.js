/**
 * Class: HolbertonClass
 * Description: Represents a Holberton class with
 * a year and location.
 */
export class HolbertonClass {
  /**
   * Constructor for HolbertonClass.
   * @param {number} year - The year of the Holberton class.
   * @param {string} location - The location of the Holberton class.
   */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /**
   * Getter for the year property.
   * @returns {number} - The year of the Holberton class.
   */
  get year() {
    return this._year;
  }

  /**
   * Getter for the location property.
   * @returns {string} - The location of the Holberton class.
   */
  get location() {
    return this._location;
  }
}

/**
 * Class: StudentHolberton
 * Description: Represents a student attending Holberton.
 */
export class StudentHolberton {
  /**
   * Constructor for StudentHolberton.
   * @param {string} firstName - The first name of the student.
   * @param {string} lastName - The last name of the student.
   * @param {HolbertonClass} holbertonClass - The Holberton class
   * the student belongs to.
   */
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  /**
   * Getter for the fullName property.
   * @returns {string} - The full name of the student.
   */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Getter for the holbertonClass property.
   * @returns {HolbertonClass} - The Holberton class the
   * student belongs to.
   */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
   * Getter for the fullStudentDescription property.
   * @returns {string} - The full description of the student,
   * including name, class year, and location.
   */
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Create instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Create instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Create a list of students
const listOfStudents = [student1, student2, student3, student4, student5];

export default listOfStudents;
