/**
 * Represents a teacher with first name,
 * last name, employment details, and location.
 */
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}

/**
 * Represents a director who extends the Teacher
 * interface with the number of reports.
 */
export interface Directors extends Teacher {
  numberOfReports: number;
}

/**
 * Represents a function type that takes first
 * name and last name parameters and returns a string.
 */
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Returns a formatted string representing
 * the teacher's
 * name using the first letter of the
 * first name and the full last name.
 * @param firstName The first name of the teacher.
 * @param lastName The last name of the teacher.
 * @returns A formatted string representing
 * the teacher's name.
 */
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

/**
 * Represents a constructor for a student class.
 */
export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

/**
 * Represents a student class with methods for 
 * working on homework and displaying the first name.
 */
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

/**
 * Represents a student class that implements
 * the IStudentClass interface.
 */
export class StudentClass implements IStudentClass {
  private _firstName!: string;
  private _lastName!: string;

  /**
   * Constructs a new instance of the StudentClass.
   * @param firstName The first name of the student.
   * @param lastName The last name of the student.
   */
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  /**
   * Performs the work on homework.
   * @returns A string indicating that the student
   * is currently working.
   */
  workOnHomework(): string {
    return 'Currently working';
  }

  /**
   * Displays the first name of the student.
   * @returns The first name of the student.
   */
  displayName(): string {
    return this._firstName;
  }
}

/**
 * Creates a new instance of the student class
 * using the provided constructor and name parameters.
 * @param ctor The constructor for the student class.
 * @param firstName The first name of the student.
 * @param lastName The last name of the student.
 * @returns A new instance of the student class.
 * @throws Error if there is an issue
 * creating the student instance.
 */
export function createStudent(
  ctor: IStudentClassConstructor,
  firstName: string,
  lastName: string
): IStudentClass {
  try {
    return new ctor(firstName, lastName);
  } catch (error) {
    throw new Error('An error occurred while creating the student instance.');
  }
}

try {
  // Testing the functions and classes

  // Create an instance of the StudentClass
  const student = createStudent(StudentClass, 'John', 'Doe');

  // Print the student's display name
  console.log(student.displayName());

  // Print the student's work on homework status
  console.log(student.workOnHomework());

  // Print the teacher's name using the printTeacher function
  const teacherName = printTeacher('Jane', 'Smith');
  console.log(teacherName);
} catch (error) {
  console.error('An error occurred:', error);
}
