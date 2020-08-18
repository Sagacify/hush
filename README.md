# Hush

[![CircleCI](https://circleci.com/gh/Sagacify/hush.svg?style=svg)](https://circleci.com/gh/Sagacify/hush)
[![Coverage Status](https://coveralls.io/repos/github/Sagacify/hush/badge.svg?branch=master)](https://coveralls.io/github/Sagacify/hush?branch=master)
[![npm version](https://img.shields.io/npm/v/@sagacify/hush.svg)](https://www.npmjs.com/package/@sagacify/hush)
[![Dependency Status](https://img.shields.io/david/Sagacify/hush.svg?style=flat-square)](https://david-dm.org/Sagacify/hush)

## Description

Hush is a package meant to simplify secrets management in applications.
It reads secrets injected via docker inside containers.

## Installation

```sh
$ npm install @sagacify/hush
```

## Usage

### Import in your project
```js
const { readSecret } = require('@sagacify/hush');

// Read secret AWS_ACCESS_KEY in the default docker secret injection folder
const secret = readSecret('AWS_ACCESS_KEY');

// Read secret AWS_ACCESS_KEY in a custom secret folder
const secret = readSecret('AWS_ACCESS_KEY', 'path/to/my/custom/secret/folder/');
```

### API

**readSecret(fileName, secretsPath = '/run/secrets/')**

*Arguments*
- fileName: the name of the file inside the secretsPath
- secretsPath: path to the folder containing the secrets

*Returns*
- If the secret is empty or the file existing: returns null
- Else: returns the secret

## Npm scripts

### Running code formating

```sh
$ npm run format
```

### Running tests

```sh
$ npm test
```

### Running lint tests

```sh
$ npm run test:lint
```

### Running coverage tests

```sh
$ npm run test:cover
```

This will create a coverage folder with all the report in `coverage/index.html`

### Running all tests

```sh
$ npm run test:all
```

*Note: that's the one you want to use most of the time*

## Reporting bugs and contributing

If you want to report a bug or request a feature, please open an issue.
If want to help us improve hush, fork and make a pull request.
Please use commit format as described [here](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).
And don't forget to run `npm run format` before pushing commit.

## Repository

- [https://github.com/sagacify/hush](https://github.com/sagacify/hush)

## License

The MIT License (MIT)

Copyright (c) 2020 Sagacify

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
