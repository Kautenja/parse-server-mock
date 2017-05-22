"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var src_1 = require("../src");
var FunctionResponse = src_1.Mock.FunctionResponse;
describe('Mock.FunctionResponse.constructor()', function () {
    it('should initialize a response with no parameters', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new FunctionResponse();
        };
        chai_1.expect(attemptToInitialize).to.not.throw(Error);
        chai_1.expect(entity.isUsingDeepEquals).to.equal(true);
        chai_1.expect(entity.expectedError).to.be.undefined;
        chai_1.expect(entity.expectedSuccess).to.be.undefined;
    });
    it('should initialize a response with "isUsingDeepEquals" parameter', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new FunctionResponse({
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
            entity = new FunctionResponse({
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
            entity = new FunctionResponse({
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
            entity = new FunctionResponse({
                expectedError: 'arb',
                expectedSuccess: {
                    foo: 'bar'
                }
            });
        };
        chai_1.expect(attemptToInitialize).to.throw(Error);
    });
});
describe('(Mock.FunctionResponse).error()', function () {
    it('shouldnt fail by default', function () {
        var entity = new FunctionResponse();
        var tryError = function () {
            entity.error();
        };
        chai_1.expect(tryError).to.not.throw(Error);
    });
    it('shouldnt fail when expectedError is set and passed in', function () {
        var entity = new FunctionResponse({
            expectedError: 'arb'
        });
        var tryError = function () {
            entity.error('arb');
        };
        chai_1.expect(tryError).to.not.throw(Error);
    });
    it('should fail when expectedError is set and a different error is passed in', function () {
        var entity = new FunctionResponse({
            expectedError: 'arb'
        });
        var tryError = function () {
            entity.error('not the same');
        };
        chai_1.expect(tryError).to.throw(Error);
    });
    it('should fail when expectedSuccess is set', function () {
        var entity = new FunctionResponse({
            expectedSuccess: 'arb'
        });
        var tryError = function () {
            entity.error();
        };
        chai_1.expect(tryError).to.throw(Error);
    });
});
describe('(Mock.FunctionResponse).success()', function () {
    it('shouldnt fail by default', function () {
        var entity = new FunctionResponse();
        var trySuccess = function () {
            entity.success();
        };
        chai_1.expect(trySuccess).to.not.throw(Error);
    });
    it('shouldnt fail when expectedSuccess is set and passed in', function () {
        var entity = new FunctionResponse({
            expectedSuccess: 'arb'
        });
        var trySuccess = function () {
            entity.success('arb');
        };
        chai_1.expect(trySuccess).to.not.throw(Error);
    });
    it('should fail when expectedSuccess is set and a different error is passed in', function () {
        var entity = new FunctionResponse({
            expectedSuccess: 'arb'
        });
        var trySuccess = function () {
            entity.success('not the same');
        };
        chai_1.expect(trySuccess).to.throw(Error);
    });
    it('should fail when expectedError is set', function () {
        var entity = new FunctionResponse({
            expectedError: 'arb'
        });
        var trySuccess = function () {
            entity.success();
        };
        chai_1.expect(trySuccess).to.throw(Error);
    });
    it('should use deep equals', function () {
        var entity = new FunctionResponse({
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
        var entity = new FunctionResponse({
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
