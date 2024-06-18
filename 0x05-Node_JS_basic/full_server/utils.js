import fs from 'fs';

/**
 * Reads the data of students in a CSV data file.
 *
 * This function reads a CSV file containing student data and
 * groups the students by their fields of study. The CSV file
 * should have a header row defining the field names, and each
 * subsequent row represents a student record.
 *
 * The function returns a promise that resolves to an object
 * where each key is a field of study and the value is an array
 * of student objects. Each student object contains the properties
 * defined in the header row except for the last field which is
 * used to group the students.
 *
 * Usage:
 * 1. Call this function with the path to a valid CSV file.
 * 2. The returned promise resolves to an object mapping fields
 *    of study to arrays of student records.
 *
 * Example CSV format:
 * ```
 * firstname,lastname,age,field
 * John,Doe,20,CS
 * Jane,Smith,22,Math
 * ```
 *
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Promise<{String: {firstname: String, lastname: String,
 * age: number}[]}>} A promise that resolves to an object containing
 * the student data grouped by field.
 * @throws {Error} If the file cannot be read or if the path is not
 * provided.
 *
 * Author: https://github.com/sebsibe23
 */

const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
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
        resolve(studentGroups);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
