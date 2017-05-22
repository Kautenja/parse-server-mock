"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var MockFunctionResponse = (function () {
    function MockFunctionResponse(options) {
        this.isUsingDeepEquals = true;
        if (options === undefined) {
            options = {};
        }
        if (options.expectedSuccess !== undefined && options.expectedError !== undefined) {
            throw Error('cant expect a call to both success and error');
        }
        if (options.isUsingDeepEquals !== undefined) {
            this.isUsingDeepEquals = options.isUsingDeepEquals;
        }
        this.expectedSuccess = options.expectedSuccess;
        this.expectedError = options.expectedError;
    }
    MockFunctionResponse.prototype.success = function (argument) {
        if (this.expectedError !== undefined) {
            chai_1.expect.fail('called success when expecting an error');
        }
        else if (this.isUsingDeepEquals) {
            chai_1.expect(argument).to.deep.equal(this.expectedSuccess);
        }
        else {
            chai_1.expect(argument).to.equal(this.expectedSuccess);
        }
    };
    MockFunctionResponse.prototype.error = function (message) {
        if (this.expectedSuccess !== undefined) {
            chai_1.expect.fail('called error when expecting a success');
        }
        else {
            chai_1.expect(message).to.equal(this.expectedError);
        }
    };
    return MockFunctionResponse;
}());
exports.MockFunctionResponse = MockFunctionResponse;
;
