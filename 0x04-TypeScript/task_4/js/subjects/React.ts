/* Description:
   This TypeScript code defines a namespace 'Subjects'
   with an interface 'Teacher' and a class 'React'.
   The 'Teacher' interface represents a teacher and
   includes an optional property 'experienceTeachingReact'
   of type number.
   The 'React' class extends the 'Subject' class and
   provides methods for getting requirements and 
   available teachers for the React subject.
*/
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  export class React extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }
    getAvailableTeacher(): string {
      try {
        if (!this.teacher || this.teacher.experienceTeachingReact <= 0) {
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
