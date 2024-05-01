/* Description:
   This TypeScript code defines a namespace
   'Subjects' with an interface 'Teacher'
   and a class 'Cpp'.
   The 'Teacher' interface represents
   a teacher and includes an optional
   property 'experienceTeachingC' of type number.
   The 'Cpp' class extends the 'Subject' class
   and provides methods for getting requirements
   and available teachers for the C++ subject.
*/
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      try {
        if (!this.teacher || this.teacher.experienceTeachingC <= 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      } catch (error) {
        console.error('An error occurred:', error);
        return 'Error occurred while getting available teacher';
      }
    }
  }
}
