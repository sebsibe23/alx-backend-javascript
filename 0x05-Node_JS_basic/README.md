# 0x05. NodeJS Basics

## Overview

This project is designed to provide a comprehensive understanding of NodeJS and ExpressJS, as well as the use of ES6 with Babel-node and Nodemon to enhance development efficiency. The goal is to gain the ability to explain and apply these concepts independently.

## Project Timeline

- **Start Date:** June 18, 2024, 6:00 AM
- **End Date:** June 19, 2024, 6:00 AM
- **Checker Release:** June 18, 2024, 12:00 PM
- **Auto Review:** June 19, 2024, 6:00 AM

## Resources

To successfully complete this project, refer to the following resources:

- [Node JS getting started](#)
- [Process API documentation](#)
- [Child process](#)
- [Express getting started](#)
- [Mocha documentation](#)
- [Nodemon documentation](#)

## Learning Objectives

By the end of this project, you will be able to:

1. Run JavaScript using NodeJS.
2. Use NodeJS modules.
3. Utilize specific NodeJS modules to read files.
4. Use process to access command line arguments and the environment.
5. Create a small HTTP server using NodeJS.
6. Create a small HTTP server using ExpressJS.
7. Create advanced routes with ExpressJS.
8. Use ES6 with NodeJS using Babel-node.
9. Use Nodemon to develop faster.

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files will be interpreted/compiled on Ubuntu 18.04 LTS using Node.js (version 12.x.x)
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Code should use the `.js` extension
- Code will be tested using Jest with the command `npm run test`
- Code will be verified against lint using ESLint
- Code needs to pass all tests and lint checks. Verify the entire project with `npm run full-test`
- All functions/classes must be exported using `module.exports = myFunction;`

## Provided Files

### `database.csv`

```csv
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

### `package.json`

```json
{
  "name": "nodejs-basics",
  "version": "1.0.0",
  "description": "NodeJS Basics Project",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "full-test": "npm run lint && npm run test",
    "lint": "eslint ."
  },
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.7"
  },
  "devDependencies": {
    "jest": "^26.6.3",
    "eslint": "^7.14.0",
    "babel-jest": "^26.6.3",
    "babel-preset-env": "^1.7.0"
  },
  "author": "",
  "license": "ISC"
}
```

### `babel.config.js`

```js
module.exports = {
  presets: ['@babel/preset-env'],
};
```

### `.eslintrc.js`

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
```

## Installation

Ensure all required dependencies are installed by running:

```bash
npm install
```

## Testing and Linting

To run tests:

```bash
npm run test
```

To lint the code:

```bash
npm run lint
```

To verify the entire project (both linting and testing):

```bash
npm run full-test
```

---

