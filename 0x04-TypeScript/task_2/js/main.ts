/**
 * Represents the interface for a director with work-related tasks.
 */
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * Represents the interface for a teacher with work-related tasks.
 */
export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Represents a director who implements the DirectorInterface.
 */
export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

/**
 * Represents a teacher who implements the TeacherInterface.
 */
export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

/**
 * Creates an employee instance based on the provided salary.
 * @param salary The salary of the employee.
 * @returns An instance of either Director or Teacher.
 * @throws Error if there is an issue creating the employee instance.
 */
export function createEmployee(salary: number | string): Director | Teacher {
  try {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    }
    return new Director();
  } catch (error) {
    throw new Error('An error occurred while creating the employee instance.');
  }
}

/**
 * Checks if an employee is a director.
 * @param employee The employee object to check.
 * @returns True if the employee is a director, false otherwise.
 */
export function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

/**
 * Executes the work tasks for an employee.
 * @param employee The employee to execute work for.
 * @returns The result of the employee's work tasks.
 * @throws Error if there is an issue executing the work tasks.
 */
export function executeWork(employee: Director | Teacher): string {
  try {
    if (isDirector(employee)) {
      return (employee as Director).workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
  } catch (error) {
    throw new Error('An error occurred while executing the work tasks.');
  }
}

/**
 * Represents the possible subjects for teaching.
 */
export type Subjects = 'Math' | 'History';

/**
 * Teaches a class based on the subject for the day.
 * @param todayClass The subject for the day.
 * @returns A string indicating the subject being taught.
 */
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
  throw new Error('Invalid subject');
}

try {
  // Testing the functions and classes

  // Create an employee instance
  const employee = createEmployee(600);

  // Execute work for the employee
  console.log(executeWork(employee));

  // Teach a class
  console.log(teachClass('Math'));
} catch (error) {
  console.error('An error occurred:', error);
}
