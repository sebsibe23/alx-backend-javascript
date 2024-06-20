# 0x06. Unittests in JS

## Overview

This project focuses on learning and implementing unit tests in JavaScript, utilizing various testing frameworks and libraries. You will gain hands-on experience in writing test suites, using assertion libraries, and performing integration tests on a Node.js server.

## Technologies and Tools

- **JavaScript (ES6)**
- **Node.js**
- **Express.js**
- **Mocha**
- **Chai**
- **Sinon**

## Project Timeline

- **Start Date:** June 19, 2024, 6:00 AM
- **End Date:** June 21, 2024, 6:00 AM
- **Checker Release:** June 19, 2024, 6:00 PM
- **Auto Review:** Will be launched at the deadline

## Resources

To successfully complete this project, refer to the following resources:

- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://github.com/request/request)
- [How to Test NodeJS Apps using Mocha, Chai, and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs)

## Learning Objectives

By the end of this project, you should be able to:

- Use Mocha to write a test suite.
- Utilize different assertion libraries (Node or Chai).
- Present long test suites effectively.
- Understand when and how to use spies.
- Understand when and how to use stubs.
- Explain what hooks are and when to use them.
- Perform unit testing with async functions.
- Write integration tests for a small Node.js server.

## Requirements

- Your code will be executed on **Ubuntu 18.04** using **Node 12.x.x**.
- Allowed editors: **vi, vim, emacs, Visual Studio Code**.
- All your files should end with a new line.
- A `README.md` file, at the root of the project folder, is mandatory.
- Your code should use the **.js** extension.
- When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error.

## Setup Instructions

1. **Clone the repository**:
   ```sh
   git clone <repository_url>
   ```

2. **Navigate to the project directory**:
   ```sh
   cd 0x06-unittests-in-js
   ```

3. **Install dependencies**:
   ```sh
   npm install
   ```

4. **Run the tests**:
   ```sh
   npm run test *.test.js
   ```

## Project Structure

The project directory should be structured as follows:

```
0x06-unittests-in-js/
│
├── test/
│   ├── sample.test.js
│   └── ...
├── src/
│   ├── app.js
│   └── ...
├── package.json
└── README.md
```

- **test/**: Contains all test files.
- **src/**: Contains the main application code.
- **package.json**: Contains project metadata and dependencies.
- **README.md**: Project documentation.

## Writing Tests

Here are some guidelines for writing tests:

- **Test Suite**: Use Mocha to define a test suite.
- **Assertions**: Use Chai for assertions.
- **Spies and Stubs**: Use Sinon for creating spies and stubs.
- **Async Tests**: Ensure your tests handle asynchronous code properly.
- **Integration Tests**: Test the full integration of your Node.js server.

### Example Test File

```javascript
const { expect } = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../src/app');

describe('GET /api/resource', () => {
    it('should return 200 OK', async () => {
        const res = await request(app).get('/api/resource');
        expect(res.status).to.equal(200);
    });
});
```

## Conclusion

This project will equip me with the skills needed to write comprehensive unit and integration tests for Node.js applications. Utilize the resources provided, adhere to the requirements, and ensure your tests are robust and error-free.

Happy coding!
