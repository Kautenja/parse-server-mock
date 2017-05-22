"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var MockResponse_1 = require("../src/MockResponse");
describe('Mock.MockResponse.constructor()', function () {
    it('should initialize a response with no parameters', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new MockResponse_1.MockResponse();
        };
        chai_1.expect(attemptToInitialize).to.not.throw(Error);
        chai_1.expect(entity.isUsingDeepEquals).to.equal(true);
        chai_1.expect(entity.expectedError).to.be.undefined;
        chai_1.expect(entity.expectedSuccess).to.be.undefined;
    });
    it('should initialize a response with "isUsingDeepEquals" parameter', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new MockResponse_1.MockResponse({
                isUsingDeepEquals: false
            });
        };
        chai_1.expect(attemptToInitialize).to.not.throw(Error);
        chai_1.expect(entity.isUsingDeepEquals).to.equal(false);
        chai_1.expect(entity.expectedError).to.be.undefined;
        chai_1.expect(entity.expectedSuccess).to.be.undefined;
    });
    it('should initialize a response with "expectedError" parameter', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new MockResponse_1.MockResponse({
                expectedError: 'arb'
            });
        };
        chai_1.expect(attemptToInitialize).to.not.throw(Error);
        chai_1.expect(entity.isUsingDeepEquals).to.equal(true);
        chai_1.expect(entity.expectedError).to.equal('arb');
        chai_1.expect(entity.expectedSuccess).to.be.undefined;
    });
    it('should initialize a response with "expectedSuccess" parameter', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new MockResponse_1.MockResponse({
                expectedSuccess: {
                    foo: 'bar'
                }
            });
        };
        chai_1.expect(attemptToInitialize).to.not.throw(Error);
        chai_1.expect(entity.isUsingDeepEquals).to.equal(true);
        chai_1.expect(entity.expectedError).to.be.undefined;
        chai_1.expect(entity.expectedSuccess).to.deep.equal({ foo: 'bar' });
    });
    it('should raise an error when "expectedSuccess" & "expectedError" are both set', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new MockResponse_1.MockResponse({
                expectedError: 'arb',
                expectedSuccess: {
                    foo: 'bar'
                }
            });
        };
        chai_1.expect(attemptToInitialize).to.throw(Error);
    });
});
describe('(Mock.MockResponse).error()', function () {
    it('shouldnt fail by default', function () {
        var entity = new MockResponse_1.MockResponse();
        var tryError = function () {
            entity.error();
        };
        chai_1.expect(tryError).to.not.throw(Error);
    });
    it('shouldnt fail when expectedError is set and passed in', function () {
        var entity = new MockResponse_1.MockResponse({
            expectedError: 'arb'
        });
        var tryError = function () {
            entity.error('arb');
        };
        chai_1.expect(tryError).to.not.throw(Error);
    });
    it('should fail when expectedError is set and a different error is passed in', function () {
        var entity = new MockResponse_1.MockResponse({
            expectedError: 'arb'
        });
        var tryError = function () {
            entity.error('not the same');
        };
        chai_1.expect(tryError).to.throw(Error);
    });
    it('should fail when expectedSuccess is set', function () {
        var entity = new MockResponse_1.MockResponse({
            expectedSuccess: 'arb'
        });
        var tryError = function () {
            entity.error();
        };
        chai_1.expect(tryError).to.throw(Error);
    });
});
describe('(Mock.MockResponse).success()', function () {
    it('shouldnt fail by default', function () {
        var entity = new MockResponse_1.MockResponse();
        var trySuccess = function () {
            entity.success();
        };
        chai_1.expect(trySuccess).to.not.throw(Error);
    });
    it('shouldnt fail when expectedSuccess is set and passed in', function () {
        var entity = new MockResponse_1.MockResponse({
            expectedSuccess: 'arb'
        });
        var trySuccess = function () {
            entity.success('arb');
        };
        chai_1.expect(trySuccess).to.not.throw(Error);
    });
    it('should fail when expectedSuccess is set and a different error is passed in', function () {
        var entity = new MockResponse_1.MockResponse({
            expectedSuccess: 'arb'
        });
        var trySuccess = function () {
            entity.success('not the same');
        };
        chai_1.expect(trySuccess).to.throw(Error);
    });
    it('should fail when expectedError is set', function () {
        var entity = new MockResponse_1.MockResponse({
            expectedError: 'arb'
        });
        var trySuccess = function () {
            entity.success();
        };
        chai_1.expect(trySuccess).to.throw(Error);
    });
    it('should use deep equals', function () {
        var entity = new MockResponse_1.MockResponse({
            expectedSuccess: {
                foo: 'bar'
            }
        });
        var trySuccess = function () {
            entity.success({
                foo: 'bar'
            });
        };
        chai_1.expect(trySuccess).to.not.throw(Error);
    });
    it('should not use deep equals', function () {
        var entity = new MockResponse_1.MockResponse({
            isUsingDeepEquals: false,
            expectedSuccess: {
                foo: 'bar'
            }
        });
        var trySuccess = function () {
            entity.success({
                foo: 'bar'
            });
        };
        chai_1.expect(trySuccess).to.throw(Error);
    });
});
