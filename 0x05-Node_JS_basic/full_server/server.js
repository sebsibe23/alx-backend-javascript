import express from 'express';
import mapRoutes from './routes';

/**
 * A simple Express server with modular routing.
 *
 * This script creates an HTTP server using the Express framework.
 * The server listens on a specified port and utilizes modular
 * routing by importing route definitions from an external module.
 *
 * The server is configured to listen on port 1245. Route
 * definitions are applied to the Express application by calling
 * the `mapRoutes` function, which is imported from the `routes`
 * module.
 *
 * Usage:
 * 1. Ensure the `routes` module is correctly defined and
 *    exports a function that maps routes to an Express app.
 * 2. Run this script using Node.js.
 * 3. Open a web browser or use a tool like `curl` to send
 *    requests to the server.
 *
 * @module app
 * @example
 * // Start the server:
 * // node server.js
 *
 * Author: Bezaleel Olakunori <https://github.com/B3zaleel>
 */

const app = express();
const PORT = 1245;

mapRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;
