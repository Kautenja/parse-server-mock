# parse-server-mock #

[![npm][npm-image]][npm-url]
[![build-status][]][travis-ci]
[![downloads][downloads-image]][downloads-url]
[![npm-issues][npm-issues-image]][npm-issues-url]
[![js-standard-style][standard-image]][standard-url]

[build-status]: https://travis-ci.org/Kautenja/parse-server-mock.svg?branch=master
[travis-ci]: https://travis-ci.org/Kautenja/parse-server-mock
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[npm-image]: https://img.shields.io/npm/v/parse-server-mock.svg?style=flat
[npm-url]: https://npmjs.org/package/parse-server-mock
[downloads-image]: https://img.shields.io/npm/dt/parse-server-mock.svg?style=flat
[downloads-url]: https://npmjs.org/package/parse-server-mock
[npm-issues-image]: https://img.shields.io/github/issues/Kautenja/parse-server-mock.svg
[npm-issues-url]: https://github.com/Kautenja/parse-server-mock/issues

This project aims to make testing parse server cloud code easier by mocking
the input parameters for cloud functions and triggers to test them at the unit
level.

## Features ##

-   uses Chai for assertions
-   built with TypeScript (types defined and included)

### Fully Mocked Classes ###

-   [x] Parse.Cloud.AfterDeleteRequest
-   [x] Parse.Cloud.BeforeDeleteRequest
-   [x] Parse.Cloud.BeforeDeleteResponse
-   [x] Parse.Cloud.AfterSaveRequest
-   [x] Parse.Cloud.BeforeSaveRequest
-   [x] Parse.Cloud.BeforeSaveResponse
-   [x] Parse.Cloud.FunctionRequest
-   [x] Parse.Cloud.FunctionResponse
-   [ ] Parse.Cloud.JobRequest
-   [ ] Parse.Cloud.JobStatus

## Installation ##

To install the module locally (preferred) use:

```shell
npm install parse-server-mock --save-dev
```

<!-- ## Usage ##

### Mock.FunctionRequest ###

### Mock.FunctionResponse ###

### Save / Delete Triggers ###

1.  Mock.AfterDeleteRequest
1.  Mock.BeforeDeleteRequest
1.  Mock.AfterSaveRequest
1.  Mock.BeforeSaveRequest -->
