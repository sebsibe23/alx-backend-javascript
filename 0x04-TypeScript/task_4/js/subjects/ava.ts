/* Description:
   This TypeScript code defines a namespace
   'Subjects' with an interface 'Teacher' and a class 'Java'.
   The 'Teacher' interface represents a teacher
   and includes an optional property 'experienceTeachingJava'
   of type number.
   The 'Java' class extends the 'Subject' class and 
   provides methods for getting requirements and
   available teachers for the Java subject.
*/
namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }
  export class Java extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }
    getAvailableTeacher(): string {
      try {
        if (!this.teacher || this.teacher.experienceTeachingJava <= 0) {
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
