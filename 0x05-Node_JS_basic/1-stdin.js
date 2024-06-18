// Display a welcome message to the user
process.stdout.write(
  'Welcome to Holberton School, what is your name?\n'
);

// Set up a readable event listener on stdin
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  // If a chunk is read, display the user's name
  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Set up an end event listener on stdin
process.stdin.on('end', () => {
  // Display a closing message when input ends
  process.stdout.write(
    'This important software is now closing\n'
  );
});
