const express = require('express');

/**
 * A simple Express server that responds with a greeting message.
 *
 * This script creates an HTTP server using the Express framework.
 * The server listens on a specified port and responds to incoming
 * requests with a plain text message "Hello Holberton School!".
 *
 * The server is configured to listen on port 1245. When a request
 * is received at the root URL (`/`), the server responds with the
 * greeting message.
 *
 * Usage:
 * 1. Run this script using Node.js.
 * 2. Open a web browser or use a tool like `curl` to send a
 *    request to `http://localhost:1245`.
 *
 * @module app
 * @example
 * // Start the server:
 * // node server.js
 * // Access the server:
 * // curl http://localhost:1245
 *
 * Author: https://github.com/sebsibe23
 */

const app = express();
const PORT = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
