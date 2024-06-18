const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 *
 * This function reads a CSV file located at the given path,
 * processes the data to count the number of students and
 * groups them by their field of study. It then logs the total
 * number of students and the number of students in each field
 * to the console, along with a list of student names per field.
 *
 * If the file cannot be read, the function rejects the promise
 * with an error message indicating that the database cannot be
 * loaded.
 *
 * The CSV file is expected to have the first row as the header
 * containing the field names, and subsequent rows contain the
 * student records. The last column is assumed to be the field
 * of study for each student.
 *
 * The function splits the CSV data into lines, extracts the
 * field names from the header, and iterates over each student
 * record to group students by their field of study.
 *
 * After processing the data, it logs the total number of
 * students and the count and names of students in each field.
 *
 * @example
 * // Assuming the CSV file has the following content:
 * // firstname,lastname,age,field
 * // John,Doe,20,CS
 * // Jane,Smith,22,Math
 * // The output will be:
 * // Number of students: 2
 * // Number of students in CS: 1. List: John
 * // Number of students in Math: 1. List: Jane
 *
 * @throws Will throw an error if the file cannot be read.
 * @returns {Promise<boolean>} Resolves to true if processing
 *                             completes successfully.
 * by the author.
 *
 * Author: https://github.com/sebsibe23
 */

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames
        .slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord
          .slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object
        .values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
