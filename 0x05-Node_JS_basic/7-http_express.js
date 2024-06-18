const express = require('express');
const fs = require('fs');

/**
 * A simple Express server that provides student data from a CSV file.
 *
 * This script creates an HTTP server using the Express framework.
 * The server listens on a specified port and responds to incoming
 * requests with either a greeting message or a list of students
 * from a CSV file.
 *
 * The server is configured to listen on port 1245. When a request
 * is received at the root URL (`/`), the server responds with the
 * greeting message. When a request is received at `/students`,
 * the server reads the CSV file and responds with the list of
 * students, grouped by their field of study.
 *
 * The CSV file path is provided as a command-line argument. If
 * the file cannot be read, an error message is returned.
 *
 * Usage:
 * 1. Run this script using Node.js with the CSV file path as an
 *    argument.
 * 2. Open a web browser or use a tool like `curl` to send
 *    requests to `http://localhost:1245` or
 *    `http://localhost:1245/students`.
 *
 * @module app
 * @example
 * // Start the server with a CSV file:
 * // node server.js students.csv
 * // Access the server:
 * // curl http://localhost:1245
 * // curl http://localhost:1245/students
 *
 * Author: https://github.com/sebsibe23
 */

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Promise<String>} A promise that resolves to a report
 *                            string.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const reportParts = [];
        const fileLines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames.slice(
          0,
          dbFieldNames.length - 1,
        );

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(
            0,
            studentRecord.length - 1,
          );
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentGroups).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        reportParts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          reportParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportParts.join('\n'));
      }
    });
  }
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
      res.end(); // Ending the response
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
      res.end(); // Ending the response
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
