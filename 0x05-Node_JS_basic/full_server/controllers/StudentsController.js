import readDatabase from '../utils';

/**
 * Contains the student-related route handlers.
 *
 * This class defines route handlers for student-related endpoints.
 * It includes methods to get a list of all students and to get
 * students by major.
 *
 * Usage:
 * 1. Import this class in your route mapping module.
 * 2. Use the static methods of this class as route handlers.
 *
 * Example:
 * ```
 * import StudentsController from './StudentsController';
 *
 * app.get('/students', StudentsController.getAllStudents);
 * app.get('/students/:major', StudentsController.getAllStudentsByMajor);
 * ```
 *
 * @module StudentsController
 * @example
 * // Map the routes:
 * // app.get('/students', StudentsController.getAllStudents);
 * // app.get('/students/:major', StudentsController.getAllStudentsByMajor);
 *
 * Author: https://github.com/sebsibe23
 */

/**
 * The list of supported majors.
 */
const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  /**
   * Handles the request to get all students.
   *
   * This method reads student data from a CSV file and sends a
   * response with the list of all students, grouped by their
   * field of study.
   *
   * @param {Request} request The HTTP request object.
   * @param {Response} response The HTTP response object.
   */
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];
        // A comparison function for ordering a list of strings in ascending
        // order by alphabetic order and case insensitive
        const cmpFxn = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [field, group] of Object.entries(studentGroups).sort(cmpFxn)) {
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  /**
   * Handles the request to get students by major.
   *
   * This method reads student data from a CSV file and sends a
   * response with the list of students in a specified major.
   *
   * @param {Request} request The HTTP request object.
   * @param {Response} response The HTTP response object.
   */
  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(dataPath)
      .then((studentGroups) => {
        let responseText = '';

        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
