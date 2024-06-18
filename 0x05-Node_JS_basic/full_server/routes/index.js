import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Binds the routes to the appropriate handler in the
 * given Express application.
 *
 * This function maps specific routes to their corresponding handler functions
 * in the Express application. It binds the homepage route to the AppController's
 * getHomepage method, and routes related to students to methods in the
 * StudentsController class.
 *
 * @param {Express} app The Express application instance.
 * @module mapRoutes
 * @example
 * // Map routes in your Express application:
 * // import mapRoutes from './mapRoutes';
 * // mapRoutes(app);
 *
 * Author: https://github.com/sebsibe23
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
