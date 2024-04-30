/**
 * Represents a student with first name, last name, age, and location.
 */
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Define two student objects
const studentA: Student = {
  firstName: "sebsibe",
  lastName: "solomon",
  age: 28,
  location: "AA, Ethiopia",
};
const studentB: Student = {
  firstName: "solomon",
  lastName: "heramo",
  age: 40,
  location: "AA, Ethiopia",
};

// Create an array of students
const studentsList: Array<Student> = [
  studentA,
  studentB,
];

// CSS styles for the table display
const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }
  td:nth-child(1) {
    text-align: center;
  }
`;

/**
 * Displays information about students in a table.
 * @param students The list of students to display.
 * @throws Error if there is an issue creating or appending the table to the document.
 */
export const displayStudents = (students: Array<Student>): void => {
  try {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
    tableHead.insertAdjacentElement('beforeend', headRow);

    for (const student of students) {
      const bodyRow = document.createElement('tr');
      bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
      bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
      tableBody.insertAdjacentElement('beforeend', bodyRow);
    }

    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
  } catch (error) {
    throw new Error('An error occurred while displaying the students.');
  }
};

try {
  // Call the displayStudents function with the studentsList array
  displayStudents(studentsList);

  // Create a style element and append it to the document head
  const styleSheetElement = document.createElement('style');
  styleSheetElement.innerHTML = styleSheet;
  document.head.insertAdjacentElement('beforeend', styleSheetElement);

  // Set the document title
  document.title = 'Task 0';
} catch (error) {
  console.error('An error occurred:', error);
}
