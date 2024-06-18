// This Node.js script prompts the user for their name and then
// prints a greeting message including the provided name. When
// the input stream ends, it prints a closing message.

// Functionality: The script uses standard input/output to read
//                the user's name and respond accordingly.

// Description:
// 1. The script starts by printing a welcome message asking for
//    the user's name.
// 2. It listens for readable events on the standard input stream
//    to read the user's input.
// 3. Once input is received, it prints the user's name.
// 4. When the input stream ends, it prints a closing message.

// process.stdout.write: Outputs a message to the standard output
//                       (console).
// process.stdin.on: Registers an event listener for the readable
//                   and end events on the standard input stream.
// process.stdin.read: Reads the data from the standard input
//                     stream when a readable event occurs.

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
