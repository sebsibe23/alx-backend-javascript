/**
 * Updates a grades of a list of students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - a list of students.
 * @param {*} city - a city of students.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - a new grades to be given to a student.
 * @author sebsibe solomon https://github.com/sebsibe23
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
