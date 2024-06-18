const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * This function reads the CSV file asynchronously, counts
 * the number of students, and groups them by their field
 * of study. It returns a promise that resolves when the
 * counting is done or rejects if an error occurs.
 * Author: Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, -1);

      // Process each line of the file
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, -1);
        const field = studentRecord[studentRecord.length - 1];

        // Group students by field
        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }

        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Count total students and print results
      const totalStudents = Object
        .values(studentGroups)
        .reduce((pre, cur) => pre + cur.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(
          `Number of students in ${field}: ${group.length}. List: ${studentNames}`
        );
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;

