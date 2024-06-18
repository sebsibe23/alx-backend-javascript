/**
 * Contains the miscellaneous route handlers.
 *
 * This class defines various route handlers for the application.
 * It includes methods that handle requests to different endpoints.
 * Currently, it includes a handler for the homepage route.
 *
 * Usage:
 * 1. Import this class in your route mapping module.
 * 2. Use the static methods of this class as route handlers.
 *
 * Example:
 * ```
 * import AppController from './AppController';
 *
 * app.get('/', AppController.getHomepage);
 * ```
 *
 * @module AppController
 * @example
 * // Map the homepage route:
 * // app.get('/', AppController.getHomepage);
 *
 * Author: https://github.com/sebsibe23
 */
class AppController {
  /**
   * Handles the request to the homepage.
   *
   * This method sends a greeting message to the client when the
   * homepage is accessed.
   *
   * @param {Request} request The HTTP request object.
   * @param {Response} response The HTTP response object.
   */
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
