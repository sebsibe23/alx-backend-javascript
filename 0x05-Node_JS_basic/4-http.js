const http = require('http');

/**
 * A simple HTTP server that responds with a greeting message.
 *
 * This script creates an HTTP server using the Node.js `http`
 * module. The server listens on a specified port and host, and
 * responds to incoming requests with a plain text message
 * "Hello Holberton School!".
 *
 * The server is configured to listen on port 1245 and the host
 * 'localhost'. When a request is received, the server sets the
 * appropriate headers to indicate that the response content
 * type is plain text and the content length is the length of
 * the response message. It then writes the response message
 * to the client.
 *
 * After setting up the server, it starts listening on the
 * specified port and host. A message is logged to the console
 * to indicate that the server is running and listening for
 * requests.
 *
 * Usage:
 * 1. Run this script using Node.js.
 * 2. Open a web browser or use a tool like `curl` to send a
 *    request to `http://localhost:1245`.
 * 3. The server will respond with "Hello Holberton School!".
 *
 * @module app
 * @example
 * // Start the server:
 * // node server.js
 * // Access the server:
 * // curl http://localhost:1245
 *  Author: https://github.com/sebsibe23
 *
 */

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
  res.end(); // Ending the response
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
